import axios from "axios";


const ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function fetchGPTResponse(prompt: string) {
  try {
    const response = await axios.post(
      ENDPOINT,
      {
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching response: ", error);
    return null;
  }
}

// 测试用例
const testPrompt =
  "Translate the following English text to French: 'Hello, how are you?'";

export const testConnection = () => fetchGPTResponse(testPrompt).then((response) => console.log(response));

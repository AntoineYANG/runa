import "dotenv/config";

// import { ChatOpenAI } from "langchain/chat_models/openai";


import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});

export {
  model,
};

// ----------------

// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { AgentExecutor } from "langchain/agents";
// // import { SerpAPI } from "langchain/tools";
// import { Calculator } from "langchain/tools/calculator";
// import { pull } from "langchain/hub";
// import { renderTextDescription } from "langchain/tools/render";
// import { RunnableSequence } from "langchain/schema/runnable";
// import { formatLogToString } from "langchain/agents/format_scratchpad/log";
// import { ReActSingleInputOutputParser } from "langchain/agents/react/output_parser";
// import { BufferMemory } from "langchain/memory";

// import type { PromptTemplate } from "langchain/prompts";
// import type { AgentStep, BaseMessage } from "langchain/schema";


// const executor = new Promise<AgentExecutor>(async resolve => {
//   /** Define your chat model */
//   const model = new ChatOpenAI({
//     modelName: "gpt-4",
//     openAIApiKey: process.env.OPEN_AI_API_KEY,
//   });
//   /** Bind a stop token to the model */
//   const modelWithStop = model.bind({
//     stop: ["\nObservation"],
//   });
//   /** Define your list of tools */
//   const tools = [
//     // new SerpAPI(process.env.SERPAPI_API_KEY, {
//     //   location: "Kyoto,Japan",
//     //   hl: "en",
//     //   gl: "us",
//     // }),
//     new Calculator(),
//   ];
//   /**
//    * Pull a prompt from LangChain Hub
//    * @link https://smith.langchain.com/hub/hwchase17/react-chat
//    */
//   const prompt = await pull<PromptTemplate>("hwchase17/react-chat");
//   /** Add input variables to prompt */
//   const toolNames = tools.map((tool) => tool.name);
//   const promptWithInputs = await prompt.partial({
//     tools: renderTextDescription(tools),
//     tool_names: toolNames.join(","),
//   });

//   const runnableAgent = RunnableSequence.from([
//     {
//       input: (i: {
//         input: string;
//         steps: AgentStep[];
//         chat_history: BaseMessage[];
//       }) => i.input,
//       agent_scratchpad: (i: {
//         input: string;
//         steps: AgentStep[];
//         chat_history: BaseMessage[];
//       }) => formatLogToString(i.steps),
//       chat_history: (i: {
//         input: string;
//         steps: AgentStep[];
//         chat_history: BaseMessage[];
//       }) => i.chat_history,
//     },
//     promptWithInputs,
//     modelWithStop,
//     new ReActSingleInputOutputParser({ toolNames }),
//   ]);
//   /**
//    * Define your memory store
//    * @important The memoryKey must be "chat_history" for the chat agent to work
//    * because this is the key this particular prompt expects.
//    */
//   const memory = new BufferMemory({ memoryKey: "chat_history" });
//   /** Define your executor and pass in the agent, tools and memory */
//   resolve(AgentExecutor.fromAgentAndTools({
//     agent: runnableAgent,
//     tools,
//     memory,
//   }));
// });


// export {
//   executor,
// };

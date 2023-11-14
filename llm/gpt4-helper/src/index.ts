import { model, /*executor as _exc*/ } from "./setup.js";
import { prompt, infinite } from "./utils.js";
import { testConnection } from "./test-connection.js";


const main = async () => {
  
  await testConnection();
  
  // const executor = await _exc;
  model.pipe((i) => {
    console.log(i);
    return i;
  });
  
  console.log("Agent loaded.");

  infinite(async () => {
    const input = await prompt("> ");
    console.log('...');
    const result = await model.predict(input);
    // const result = await executor.call({ input });
    console.log(`: ${result}`);
  });
};


main();

import readline from "readline";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = async (input: string) => {
  return new Promise<string>((resolve) => {
    rl.question(input, answer => {
      resolve(answer);
    });
  });
};


const infiniteIterator = async function* <T>(iterable: AsyncIterable<T>) {
  while (true) {
    for await (const item of iterable) {
      yield item;
    }
  }
};

const infinite = async (fn: (handle: { close: () => void }) => Promise<void>) => {
  while (true) {
    await fn({ close: () => { } });
  }
};


export {
  prompt,
  infinite,
};

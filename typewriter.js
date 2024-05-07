const sentence = "hello there from lighthouse labs\n";
let interval = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 50;
};
const spinners = ['|', '/', '-', '\\'];
let delay = spinners.length * 10

for (let i = 0; i < delay; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinners[i % spinners.length]}`);
    if (i === delay - 1) {
      process.stdout.write('\n');
    }
  }, i * 100);
};
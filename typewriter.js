const sentence = "hello there from lighthouse labs";
const increment = 100;
let delay = 0;

for (const char of sentence) {
  setTimeout(()=> {
    process.stdout.write(char);
  }, delay);
  delay += increment;

};


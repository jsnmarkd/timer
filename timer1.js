let args = process.argv.slice(2); //array of node arguments
// process.stdout.write('\x07'); make beep noise (only on the main Terminal);
for (let i in args) {
  if (!args) {
    break;
  }
  if (isNaN(args[i]) || args[i] < 0) {
    continue;
  }
  setTimeout(() => { 
    console.log(`Beep at : ${args[i]} seconds` + '\x07');
    // process.stdout.write(`Beep at : ${args[i]} seconds` + '\x07');
   }, args[i] * 100)
}
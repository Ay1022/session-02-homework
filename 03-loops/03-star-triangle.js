// =============================================
// 3. LOOPS — Star triangle
// =============================================
// Create a variable rows = 5 and print a triangle of stars.
// Hint: start with let line = ""; and add one "*" to it in every loop step.
//
// Expected output:
//   *
//   **
//   ***
//   ****
//   *****

// your code here
const rows = 5;
let st=0;
let line = "";
const stars ="*";


while(st < rows){
    line += "*";
    console.log(line)
    st++;
}
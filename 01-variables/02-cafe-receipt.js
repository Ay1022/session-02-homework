// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR

// your code here
const shawarma = 600;
const karak = 150;
const totalpriceSh = 2 * shawarma
const totalpriceKa = 3 * karak
const totalprice = totalpriceKa + totalpriceSh ;
const totalOMR = totalprice / 1000;
console.log(`Shawarma: 2 X ${shawarma} = ${totalpriceSh} baisa`)
console.log(`Karak: 3 X ${karak} = ${totalpriceKa} baisa`)
console.log(`Total : ${totalprice} baisa = ${totalOMR} OMR `)
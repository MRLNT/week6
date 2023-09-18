// // SOAL 1
// for (let i = 1; i <= 9; i++) {
//     let bintang = '';
//     for (let j = 1; j <= i; j++) {
//         if (j == i) {
//             bintang += '* ';
//         }
//       bintang += '  ';
//     }
//     console.log(bintang);
// }  

// // SOAL 2
// for (let i = 9; i >= 1; i--) {
//     let bintang = '';
//     for (let j = 1; j <= i; j++) {
//         if (j == i) {
//             bintang += '* ';
//         }
//       bintang += '  ';
//     }
//     console.log(bintang);
// }  

// // SOAL 3
// const tinggiSegitiga = 9;
// const setengahTinggi = tinggiSegitiga / 2;
// for (let i = 1; i <= tinggiSegitiga; i++) {
//   let bintang = '';
//   for (let j = 1; j <= tinggiSegitiga; j++) {
//     if (i === setengahTinggi + 1) {
//       bintang += '*';
//     } else if (j === i || j === tinggiSegitiga - i + 1) {
//       bintang += '*';
//     } else {
//       bintang += '  ';
//     }
//   }
//   console.log(bintang);
// }

// // SOAL 4
// const n = 9;
// for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= n; j++) {
//         // if (i === j || i + j === n || i === (n + 1) / 2 || j === (n + 1) / 2) {
//         if (i === j || i + j === n + 1 || i === Math.ceil(n / 2) || j === Math.ceil(n / 2)) {
//             line += "*";
//         } else {
//             line += " ";
//         }
//     }
//     console.log(line);
// }
  
// // SOAL 5
// const n = 9;
// for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= n; j++) {
//     if (i === 1 || i === n || j === 1 || j === n || i === j || i + j === n + 1) {
//         line += "*";
//     } else {
//         line += " ";
//     }
//     }
//     console.log(line);
// }

// // SOAL 6
// for (let i = 1; i <= 9; i++) {
//     let bintang = '';
//     for (let j = 1; j <= i; j++) {
//       bintang += '* ';
//     }
//     console.log(bintang);
// }  

// // SOAL 7
// for (let i = 1; i <= 9; i++) {
//   let bintang = '';
//   for (let j = 1; j <= 9 - i; j++) {
//     bintang += '  ';
//   }
//   for (let k = 1; k <= i; k++) {
//     bintang += '* ';
//   }
//   console.log(bintang);
// }

// // SOAL 8
// const tinggiPola = 9;
// const setengahTinggi = tinggiPola / 2;
// for (let i = 1; i <= tinggiPola; i++) {
//   let bintang = '';
//   for (let j = 1; j <= tinggiPola; j++) {
//     if (i <= setengahTinggi) {
//       if (j >= i && j <= tinggiPola - i + 1) {
//         bintang += '*';
//       } else {
//         bintang += ' ';
//       }
//     } else {
//       if (j >= tinggiPola - i + 1 && j <= i) {
//         bintang += '*';
//       } else {
//         bintang += ' ';
//       }
//     }
//   }
//   console.log(bintang);
// }

// // SOAL 9
// let tinggiPola = 9;
// let pattern = '';

// for (let x = 0; x < tinggiPola; x++) {
//   for (let y = 0; y < tinggiPola; y++) {
//     if (x < y && x + y < tinggiPola - 1) {
//       pattern += '   ';
//     } else if (x > y && x + y > tinggiPola - 1) {
//       pattern += '   ';
//     } else {
//       pattern += ' * ';
//     }
//   }
//   pattern += '\n';
// }
// console.log(pattern);

// // SOAL 10
// let tinggiPola = 9;
// let bintang = '';
// const middleRow = Math.floor(tinggiPola / 2);

// for (let i= 0; i< tinggiPola; i++) {
//   for (let j = 0; j < tinggiPola; j++) {
//     if (i < middleRow) { 
//       if (j <= i) {
//         bintang += ' * ';
//       } else {
//         bintang += '   ';
//       }
//     } else if (i === middleRow) { 
//       bintang += " * "
//     }
//     else {
//       if (j > middleRow - 1 && j >= i) {
//         bintang += ' * ';
//       }else {
//         bintang += '   ';
//       }
//     }
//   }
//   bintang += "\n";
// }
// console.log(bintang);

// latihan dari ka femil
function soal10(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    // baris
    for (let j = 0; j < n; j++) {
      // kolom
      if (
        (i <= Math.floor(n / 2) && j <= i) ||
        (i >= Math.floor(n / 2) && j >= i)
      ) {
        output += "* ";
      } else {
        output += "  ";
      }
      
    }
    output += "\n";
  }
  console.log(output);
}

soal10(9);
  

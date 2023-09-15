{
    console.log("hai billionaire!");
    var globalVariable = "ini adalah globar var";
    console.log(globalVariable);
    let variableLet = "ini let";
    console.log(variableLet);
    console.log(typeof variableLet);

    variableLet = "ini let baru";
    console.log(variableLet);

    const pi = 3.14;
    console.log(pi);
    console.log(typeof pi);

    let fname = "marcel";
    let lname = "antonio";
    let fullName = `${fname} ${lname}`;
    let aceng = fname + " " + lname;
    console.log(`${fullName} menggunakan string literal`);
    console.log(aceng);

    let arr = [18, 29, 30, 47, 56, "satu"];
    console.log(arr);
    console.log(`type dari arr adalah ${typeof arr}`);

    const user = {
        email : "user@gmail.com",
        pass : "123",
    };
    console.log(user);


    // bakalan error
    // pi = 123213;
    // console.log(pi);
}

if (true) {
    globalVariable = "ini baru di timpa"
    console.log(globalVariable);
    //console.log(variableLet);
}



const angka = 100;
// perbadingan 
// == compare hanya value nya aja
// === compare value dan tippe datanya
if (angka === "100") {
    console.log(`angka bernilai ${angka}`);
} else {
    console.log(`angka bernilai ${angka} dan tipe datanya ${typeof angka}`);
}


let jam = 10;
let hari = (jam < 12) ? "hari masih pagi" : "hari sudah siang";
console.log(hari);

// LOOPING, TIDAK ADA PERUBAHAN SAMA SEKALI
// for (let i = 90; i > 24; i--) {
//     console.log(i);
// }
// while (true) {
//     // test
// }

// FUNCTION
// declare func
function penjumlahanDuaAngka(angka1, angka2) {
    console.log(angka1 + angka2);
    // return angka1 + angka2;
}
// let hasil = penjumlahanDuaAngka(100,90);
// console.log(hasil);
penjumlahanDuaAngka(100, 90);

// variable function
let pengurangan = function (angka1, angka2) {
    console.log(angka1 - angka2);
};
pengurangan(100, 90);


// ES6 : ARROW FUNCTION
let perkalianDuaAngka = (angka1, angka2) => {
    console.log(`${angka1} x ${angka2} = ${angka1 * angka2}`);
};

perkalianDuaAngka(100, 90);










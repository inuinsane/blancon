
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#lw11");
const input4 = document.querySelector("#lw21");
const input5 = document.querySelector("#lw43");
const input6 = document.querySelector("#circle");
const material = document.querySelector("#material")
const form = document.querySelector("#form")
const tombol = document.querySelector("#tombol")
const refresh = document.querySelector("#refresh")
const output1 = document.querySelector("#output1")
const output2 = document.querySelector("#output2")
const output3 = document.querySelector("#output3")


// VERSI ALUMUNIUM
// mencari panjang dan lebar rasio 1:1
function alm_11(w, d) {
    return akar(w / ((d / 1000) * 2.7));
}
// mencari panjang dan lebar rasio 2:1
function alm_21(w, d) {
    return akar(w / ((d / 1000) * 2.7 * 2));
}
function alm_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 2.7 * 2));
}


// mencari panjang dan lebar rasio 4:3
function alm_43(w, d) {
    return akar(3 * w / ((d / 1000) * 2.7 * 4));
}
function alm_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 2.7 * 4)) / 3;
}
// mencari diameter lingkaran
function alm_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 2.7 * 3.14));
}
function kuadrat(kuadrat) {
    return Math.pow(kuadrat, 2)
}
function akar(a) {
    return Math.sqrt(a)
}

// VERSI BRASS
// mencari panjang dan lebar rasio 1:1
function brass_11(w, d) {
    return akar(w / ((d / 1000) * 8.4));
}
// mencari panjang dan lebar rasio 2:1
function brass_21(w, d) {
    return akar(w / ((d / 1000) * 8.4 * 2));
}
function brass_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.4 * 2));
}
// mencari panjang dan lebar rasio 4:3
function brass_43(w, d) {
    return akar(3 * w / ((d / 1000) * 8.4 * 4));
}
function brass_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 8.4 * 4)) / 3;
}
// mencari diameter lingkaran
function brass_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.4 * 3.14));
}

// VERSI CARBON
// mencari panjang dan lebar rasio 1:1
function carbon_11(w, d) {
    return akar(w / ((d / 1000) * 3.25));
}
// mencari panjang dan lebar rasio 2:1
function carbon_21(w, d) {
    return akar(w / ((d / 1000) * 3.25 * 2));
}
function carbon_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 3.25 * 2));
}
// mencari panjang dan lebar rasio 4:3
function carbon_43(w, d) {
    return akar(3 * w / ((d / 1000) * 3.25 * 4));
}
function carbon_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 3.25 * 4)) / 3;
}
// mencari diameter lingkaran
function carbon_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 3.25 * 3.14));
}

// VERSI BRONZE
// mencari panjang dan lebar rasio 1:1
function bronze_11(w, d) {
    return akar(w / ((d / 1000) * 8.8));
}
// mencari panjang dan lebar rasio 2:1
function bronze_21(w, d) {
    return akar(w / ((d / 1000) * 8.8 * 2));
}
function bronze_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.8 * 2));
}
// mencari panjang dan lebar rasio 4:3
function bronze_43(w, d) {
    return akar(3 * w / ((d / 1000) * 8.8 * 4));
}
function bronze_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 8.8 * 4)) / 3;
}
// mencari diameter lingkaran
function bronze_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.8 * 3.14));
}

// VERSI CONCRETE
// mencari panjang dan lebar rasio 1:1
function concrete_11(w, d) {
    return akar(w / ((d / 1000) * 2.2));
}
// mencari panjang dan lebar rasio 2:1
function concrete_21(w, d) {
    return akar(w / ((d / 1000) * 2.2 * 2));
}
function concrete_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 2.2 * 2));
}
// mencari panjang dan lebar rasio 4:3
function concrete_43(w, d) {
    return akar(3 * w / ((d / 1000) * 2.2 * 4));
}
function concrete_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 2.2 * 4)) / 3;
}
// mencari diameter lingkaran
function concrete_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 2.2 * 3.14));
}

// VERSI COPPER
// mencari panjang dan lebar rasio 1:1
function copper_11(w, d) {
    return akar(w / ((d / 1000) * 8.3));
}
// mencari panjang dan lebar rasio 2:1
function copper_21(w, d) {
    return akar(w / ((d / 1000) * 8.3 * 2));
}
function copper_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.3 * 2));
}
// mencari panjang dan lebar rasio 4:3
function copper_43(w, d) {
    return akar(3 * w / ((d / 1000) * 8.3 * 4));
}
function copper_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 8.3 * 4)) / 3;
}
// mencari diameter lingkaran
function copper_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 8.3 * 3.14));
}

// VERSI Carbon Steel
// mencari panjang dan lebar rasio 1:1
function carbos_11(w, d) {
    return akar(w / ((d / 1000) * 7.85));
}
// mencari panjang dan lebar rasio 2:1
function carbos_21(w, d) {
    return akar(w / ((d / 1000) * 7.85 * 2));
}
function carbos_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.85 * 2));
}
// mencari panjang dan lebar rasio 4:3
function carbos_43(w, d) {
    return akar(3 * w / ((d / 1000) * 7.85 * 4));
}
function carbos_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 7.85 * 4)) / 3;
}
// mencari diameter lingkaran
function carbos_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.85 * 3.14));
}

// VERSI Chrome Steel
// mencari panjang dan lebar rasio 1:1
function chromes_11(w, d) {
    return akar(w / ((d / 1000) * 7.74));
}
// mencari panjang dan lebar rasio 2:1
function chromes_21(w, d) {
    return akar(w / ((d / 1000) * 7.74 * 2));
}
function chromes_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.74 * 2));
}
// mencari panjang dan lebar rasio 4:3
function chromes_43(w, d) {
    return akar(3 * w / ((d / 1000) * 7.74 * 4));
}
function chromes_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 7.74 * 4)) / 3;
}
// mencari diameter lingkaran
function chromes_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.74 * 3.14));
}

// VERSI white iron
// mencari panjang dan lebar rasio 1:1
function wi_11(w, d) {
    return akar(w / ((d / 1000) * 7.5));
}
// mencari panjang dan lebar rasio 2:1
function wi_21(w, d) {
    return akar(w / ((d / 1000) * 7.5 * 2));
}
function wi_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.5 * 2));
}
// mencari panjang dan lebar rasio 4:3
function wi_43(w, d) {
    return akar(3 * w / ((d / 1000) * 7.5 * 4));
}
function wi_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 7.5 * 4)) / 3;
}
// mencari diameter lingkaran
function wi_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 7.5 * 3.14));
}

// VERSI Stainless steel 304
// mencari panjang dan lebar rasio 1:1
function ss_11(w, d) {
    return akar(w / ((d / 1000) * 8));
}
// mencari panjang dan lebar rasio 2:1
function ss_21(w, d) {
    return akar(w / ((d / 1000) * 8 * 2));
}
function ss_12(w, d) {
    return 2 * akar(w / ((d / 1000) * 8 * 2));
}
// mencari panjang dan lebar rasio 4:3
function ss_43(w, d) {
    return akar(3 * w / ((d / 1000) * 8 * 4));
}
function ss_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 8 * 4)) / 3;
}
// mencari diameter lingkaran
function ss_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 8 * 3.14));
}

// VERSI Titanium Alloy
// mencari panjang dan lebar rasio 1:1
function ta_11(w, d) {
    return akar(w / ((d / 1000) * 4.45));
}
// mencari panjang dan lebar rasio 2:1
function ta_21(w, d) {
    return akar(w / ((d / 1000) * 4.45 * 2));
}
function ta_12(w, d) {
    return 2 * akar(w / ((d / 10000) * 4.45 * 2));
}
// mencari panjang dan lebar rasio 4:3
function ta_43(w, d) {
    return akar(3 * w / ((d / 1000) * 4.45 * 4));
}
function ta_34(w, d) {
    return 4 * akar(3 * w / ((d / 1000) * 4.45 * 4)) / 3;
}
// mencari diameter lingkaran
function ta_lingkaran(w, d) {
    return 2 * akar(w / ((d / 1000) * 4.45 * 3.14));
}



tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Alumunium" && form.value == "lw11") {
        hasil = alm_11(input1.value, input2.value)
    }
    else if (material.value == "Alumunium" && form.value == "lw21") {
        hasil = alm_21(input1.value, input2.value)
    }
    else if (material.value == "Alumunium" && form.value == "lw43") {
        hasil = alm_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Alumunium" && form.value == "lw11") {
        hasil2 = alm_11(input1.value, input2.value)
    }
    else if (material.value == "Alumunium" && form.value == "lw21") {
        hasil2 = alm_12(input1.value, input2.value)
    }
    else if (material.value == "Alumunium" && form.value == "lw43") {
        hasil2 = alm_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Alumunium" && form.value == "Circle") {
        hasil3 = alm_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Brass" && form.value == "lw11") {
        hasil = brass_11(input1.value, input2.value)
    }
    else if (material.value == "Brass" && form.value == "lw21") {
        hasil = brass_21(input1.value, input2.value)
    }
    else if (material.value == "Brass" && form.value == "lw43") {
        hasil = brass_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Brass" && form.value == "lw11") {
        hasil2 = brass_11(input1.value, input2.value)
    }
    else if (material.value == "Brass" && form.value == "lw21") {
        hasil2 = brass_12(input1.value, input2.value)
    }
    else if (material.value == "Brass" && form.value == "lw43") {
        hasil2 = brass_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Brass" && form.value == "Circle") {
        hasil3 = brass_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Carbon" && form.value == "lw11") {
        hasil = carbon_11(input1.value, input2.value)
    }
    else if (material.value == "Carbon" && form.value == "lw21") {
        hasil = carbon_21(input1.value, input2.value)
    }
    else if (material.value == "Carbon" && form.value == "lw43") {
        hasil = carbon_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Carbon" && form.value == "lw11") {
        hasil2 = carbon_11(input1.value, input2.value)
    }
    else if (material.value == "Carbon" && form.value == "lw21") {
        hasil2 = carbon_12(input1.value, input2.value)
    }
    else if (material.value == "Carbon" && form.value == "lw43") {
        hasil2 = carbon_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Carbon" && form.value == "Circle") {
        hasil3 = carbon_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Tin Bronze" && form.value == "lw11") {
        hasil = bronze_11(input1.value, input2.value)
    }
    else if (material.value == "Tin Bronze" && form.value == "lw21") {
        hasil = bronze_21(input1.value, input2.value)
    }
    else if (material.value == "Tin Bronze" && form.value == "lw43") {
        hasil = bronze_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Tin Bronze" && form.value == "lw11") {
        hasil2 = bronze_11(input1.value, input2.value)
    }
    else if (material.value == "Tin Bronze" && form.value == "lw21") {
        hasil2 = bronze_12(input1.value, input2.value)
    }
    else if (material.value == "Tin Bronze" && form.value == "lw43") {
        hasil2 = bronze_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Tin Bronze" && form.value == "Circle") {
        hasil3 = bronze_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Concrete" && form.value == "lw11") {
        hasil = concrete_11(input1.value, input2.value)
    }
    else if (material.value == "Concrete" && form.value == "lw21") {
        hasil = concrete_21(input1.value, input2.value)
    }
    else if (material.value == "Concrete" && form.value == "lw43") {
        hasil = concrete_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Concrete" && form.value == "lw11") {
        hasil2 = concrete_11(input1.value, input2.value)
    }
    else if (material.value == "Concrete" && form.value == "lw21") {
        hasil2 = concrete_12(input1.value, input2.value)
    }
    else if (material.value == "Concrete" && form.value == "lw43") {
        hasil2 = concrete_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Concrete" && form.value == "Circle") {
        hasil3 = concrete_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Copper" && form.value == "lw11") {
        hasil = copper_11(input1.value, input2.value)
    }
    else if (material.value == "Copper" && form.value == "lw21") {
        hasil = copper_21(input1.value, input2.value)
    }
    else if (material.value == "Copper" && form.value == "lw43") {
        hasil = copper_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Copper" && form.value == "lw11") {
        hasil2 = copper_11(input1.value, input2.value)
    }
    else if (material.value == "Copper" && form.value == "lw21") {
        hasil2 = copper_12(input1.value, input2.value)
    }
    else if (material.value == "Copper" && form.value == "lw43") {
        hasil2 = copper_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Copper" && form.value == "Circle") {
        hasil3 = copper_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Carbon Steel" && form.value == "lw11") {
        hasil = carbos_11(input1.value, input2.value)
    }
    else if (material.value == "Carbon Steel" && form.value == "lw21") {
        hasil = carbos_21(input1.value, input2.value)
    }
    else if (material.value == "Carbon Steel" && form.value == "lw43") {
        hasil = carbos_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Carbon Steel" && form.value == "lw11") {
        hasil2 = carbos_11(input1.value, input2.value)
    }
    else if (material.value == "Carbon Steel" && form.value == "lw21") {
        hasil2 = carbos_12(input1.value, input2.value)
    }
    else if (material.value == "Carbon Steel" && form.value == "lw43") {
        hasil2 = carbos_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Carbon Steel" && form.value == "Circle") {
        hasil3 = carbos_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Chrome Steel" && form.value == "lw11") {
        hasil = chromes_11(input1.value, input2.value)
    }
    else if (material.value == "Chrome Steel" && form.value == "lw21") {
        hasil = chromes_21(input1.value, input2.value)
    }
    else if (material.value == "Chrome Steel" && form.value == "lw43") {
        hasil = chromes_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Chrome Steel" && form.value == "lw11") {
        hasil2 = chromes_11(input1.value, input2.value)
    }
    else if (material.value == "Chrome Steel" && form.value == "lw21") {
        hasil2 = chromes_12(input1.value, input2.value)
    }
    else if (material.value == "Chrome Steel" && form.value == "lw43") {
        hasil2 = chromes_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Chrome Steel" && form.value == "Circle") {
        hasil3 = chromes_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "White iron" && form.value == "lw11") {
        hasil = wi_11(input1.value, input2.value)
    }
    else if (material.value == "White iron" && form.value == "lw21") {
        hasil = wi_21(input1.value, input2.value)
    }
    else if (material.value == "White iron" && form.value == "lw43") {
        hasil = wi_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "White iron" && form.value == "lw11") {
        hasil2 = wi_11(input1.value, input2.value)
    }
    else if (material.value == "White iron" && form.value == "lw21") {
        hasil2 = wi_12(input1.value, input2.value)
    }
    else if (material.value == "White iron" && form.value == "lw43") {
        hasil2 = wi_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "White iron" && form.value == "Circle") {
        hasil3 = wi_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Stainless steel" && form.value == "lw11") {
        hasil = ss_11(input1.value, input2.value)
    }
    else if (material.value == "Stainless steel" && form.value == "lw21") {
        hasil = ss_21(input1.value, input2.value)
    }
    else if (material.value == "Stainless steel" && form.value == "lw43") {
        hasil = ss_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Stainless steel" && form.value == "lw11") {
        hasil2 = ss_11(input1.value, input2.value)
    }
    else if (material.value == "Stainless steel" && form.value == "lw21") {
        hasil2 = ss_12(input1.value, input2.value)
    }
    else if (material.value == "Stainless steel" && form.value == "lw43") {
        hasil2 = ss_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Stainless steel" && form.value == "Circle") {
        hasil3 = ss_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

tombol.addEventListener("click", function () {
    let hasil;
    if (material.value == "Titanium alloy" && form.value == "lw11") {
        hasil = ta_11(input1.value, input2.value)
    }
    else if (material.value == "Titanium alloy" && form.value == "lw21") {
        hasil = ta_21(input1.value, input2.value)
    }
    else if (material.value == "Titanium alloy" && form.value == "lw43") {
        hasil = ta_43(input1.value, input2.value)
    }
    output1.value = thousands_separators(hasil);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil2;
    if (material.value == "Titanium alloy" && form.value == "lw11") {
        hasil2 = ta_11(input1.value, input2.value)
    }
    else if (material.value == "Titanium alloy" && form.value == "lw21") {
        hasil2 = ta_12(input1.value, input2.value)
    }
    else if (material.value == "Titanium alloy" && form.value == "lw43") {
        hasil2 = ta_34(input1.value, input2.value)
    }
    output2.value = thousands_separators(hasil2);
    output3.value = '';
})

tombol.addEventListener("click", function () {
    let hasil3;
    if (material.value == "Titanium alloy" && form.value == "Circle") {
        hasil3 = ta_lingkaran(input1.value, input2.value)
    }
    else {
    }
    output3.value = thousands_separators(hasil3);
    output2.value = '';
    output1.value = '';
})

form.addEventListener("change", function () {
    output1.disabled = false;
    output2.disabled = false;
    output3.disabled = false;

    if (form.value == "Circle") {
        output1.disabled = true;
        output2.disabled = true;
    }
    else if (form.value == "lw11") {
        output3.disabled = true;
    }
    else if (form.value == "lw21") {
        output3.disabled = true;
    }
    else if (form.value == "lw43") {
        output3.disabled = true;
    }
})
function thousands_separators(num) {
    num = num.toFixed(2);
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}
refresh.addEventListener("click", function () {
    material.value = '';
    form.value = '';
    input1.value = '';
    input2.value = '';
    output1.value = '';
    output2.value = '';
    output3.value = '';
})











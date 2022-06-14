const input0 = document.getElementById("mms");
const input1 = document.getElementById("speed");
const input2 = document.getElementById("rotorweight");
const standard = document.getElementById("standard");
const ISO = document.getElementById("ISO");
const API = document.getElementById("API");
const grade = document.getElementById("grade");
const g04 = document.getElementById("g04");
const g10 = document.getElementById("g10");
const g25 = document.getElementById("g25");
const g63 = document.getElementById("g63");
const tombol = document.getElementById("tombol");
const refresh = document.getElementById("refresh");
const output0 = document.getElementById("output0");
const output1 = document.getElementById("output1");
console.log("Running");

const uper_04 = (rpm, kg) => {
  return (9549 * 0.4 * (kg / 2)) / rpm;
};

const uper_10 = (rpm, kg) => {
  return (9549 * 1 * (kg / 2)) / rpm;
};
const uper_25 = (rpm, kg) => {
  return (9549 * 2.5 * (kg / 2)) / rpm;
};
const uper_63 = (rpm, kg) => {
  return (9549 * 6.3 * (kg / 2)) / rpm;
};
const API687 = (rpm, kg) => {
  return (6350 * (kg / 2)) / rpm;
};

const actual_unbalance = (rpm, kg, mms) => {
  return ((kg / 2) * mms) / ((0.707 * 2 * 3.14 * rpm) / 60000);
};

const thousands_separators = (num) => {
  num = num.toFixed(2);
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

tombol.addEventListener("click", () => {
  if (standard.value == "ISO" && grade.value == "g04") {
    hasil = uper_04(input1.value, input2.value);
  } else if (standard.value == "ISO" && grade.value == "g10") {
    hasil = uper_10(input1.value, input2.value);
  } else if (standard.value == "ISO" && grade.value == "g25") {
    hasil = uper_25(input1.value, input2.value);
  } else if (standard.value == "ISO" && grade.value == "g63") {
    hasil = uper_63(input1.value, input2.value);
  } else if (standard.value == "API") {
    hasil = API687(input1.value, input2.value);
  }

  let aktual = actual_unbalance(input1.value, input2.value, input0.value);
  //   console.log(`hasil aktual: ${aktual}`);

  //   output actual unbalance
  output0.value = thousands_separators(
    actual_unbalance(input1.value, input2.value, input0.value)
  );

  //   output permisible unbalance
  output1.value = thousands_separators(hasil);
});

refresh.addEventListener("click", () => {
  input0.value = "";
  input1.value = "";
  input2.value = "";
  output0.value = "";
  output1.value = "";
  standard.value = "";
  grade.value = "";
});

standard.addEventListener("change", () => {
  grade.disabled = false;
  if (standard.value == "API") {
    grade.disabled = true;
  }
});

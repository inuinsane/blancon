const massa = document.querySelector("#massa");
const depth = document.querySelector("#depth");
const ratio = document.querySelector("#ratio");
const tombol = document.querySelector("#tombol");
const outputPanjang = document.querySelector("#outputPanjang");
const outputLebar = document.querySelector("#outputLebar");
const outputRound = document.querySelector("#outputRound");
const refresh = document.querySelector("#refresh");

// Field material
const fieldMaterial = document.querySelector("#material");

// Link backend
const backendUrl = "https://salty-mountain-75077.herokuapp.com";

// membuat elemen option material
$.ajax({
  url: `${backendUrl}/material`,
  type: "get",
  success: function (res) {
    let dataMaterial = res;
    $.each(dataMaterial, function (i, material) {
      $("#material").append(
        `<option value=${material.massajenis}>${material.name}</option>
        `
      );
    });
  },
});

// Melakukan perhitungan data dimensi balance weight
tombol.addEventListener("click", () => {
  console.log("Proses mengirim data");
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: `${backendUrl}/balanceweight`,
    data: JSON.stringify({
      mass: Number(massa.value),
      depth: Number(depth.value),
      c: Number(fieldMaterial.value),
      ratio: ratio.value,
    }),
    dataType: "json",
    success: function (res) {
      res.panjang
        ? ((outputPanjang.value = res.panjang), (outputRound.value = null))
        : true;
      res.lebar
        ? ((outputLebar.value = res.lebar), (outputRound.value = null))
        : true;
      res.diameter
        ? ((outputRound.value = res.diameter),
          (outputPanjang.value = null),
          (outputLebar.value = null))
        : true;
    },
  });
});

refresh.addEventListener("click", () => {
  massa.value = depth.value = material.value = ratio.value = outputLebar.value = outputPanjang.value = outputRound.value = null;
});

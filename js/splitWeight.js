const input1 = document.querySelector("#mass")
    const input2 = document.querySelector("#degree")
    const input3 = document.querySelector("#positiona")
    const input4 = document.querySelector("#positionb")
    const tombol = document.querySelector("#tombol")
    const output1 = document.querySelector("#output1")
    const output2 = document.querySelector("#output2")
    const output3 = document.querySelector("#output3")
    const output4 = document.querySelector("#output4")
    const refresh = document.querySelector("#refresh")


    function posA (gr,d1,d2,d3) {
        let posA = gr*sin(radians(d3-d1))/sin(radians(180-(d3-d2)))
        output1.value = posA.toFixed(2);
        output3.value = input3.value;
    }
    function sin (a) {
        return Math.sin(a)
    }
    function radians (degrees) {
        var pi = Math.PI;
        return degrees*(pi/180);
    }
    function posB (gr,d1,d2,d3) {
        let posB = gr*sin(radians(d1-d2))/sin(radians(180-(d3-d2)))
        output2.value = posB.toFixed(2);
        output4.value = input4.value;
    }
    tombol.addEventListener("click",function() {
            output1.value == posA (input1.value,input2.value,input3.value,input4.value);
            output2.value == posB (input1.value,input2.value,input3.value,input4.value);
    })

    refresh.addEventListener("click", function () {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';
        output1.value = '';
        output2.value = '';
        output3.value = '';
        output4.value = '';
    })



    let rCara = 0
    let rCoroa = 0
    let result;
    let tuffArray = [];
    function girar() {
    rndm = Math.floor(2 * Math.random());
    if (rndm == 1) {
        result = "Cara!";
        document.getElementById("coin").innerHTML = ":)";
        rCara += 1;
        rCoroa = 0;
    } else {
        result = "Coroa!";
        document.getElementById("coin").innerHTML = "$";
        rCoroa += 1;
        rCara = 0;
    }

    if(rCara + rCoroa >= 2){
        if(rCara > 1){
            document.getElementById("result").innerHTML = result + " x" + rCara;
        }
        if(rCoroa > 1){
            document.getElementById("result").innerHTML = result + " x" + rCoroa;
        }
    } else{
        document.getElementById("result").innerHTML = result;
    }

    //quero fazer com que a função armazene os cinco ultimos resultados, estou tentando pensar como

    //arrays, carambolas, você já estudou isso

    tuffArray.push(result)
    document.getElementById("st").innerHTML = "1-" + tuffArray[tuffArray.length -1];
    document.getElementById("nd").innerHTML = "2-" + tuffArray[tuffArray.length -2];
    document.getElementById("rd").innerHTML = "3-" + tuffArray[tuffArray.length -3];
    document.getElementById("fourth").innerHTML = "4-" + tuffArray[tuffArray.length -4];
    document.getElementById("fifth").innerHTML = "5-" + tuffArray[tuffArray.length -5];
    if(tuffArray.lenght > 5){
        tuffArray.shift();// remove o mais velho
    }
}



function showAnimation() {
    document.getElementById("container").innerHTML = `
    <div class="juice">
        <div class="orange">
            <div class="eyes"></div>
            <div class="eyes3"></div>
            <div class="boca"></div>
        </div>
        <div class="jug"></div>
        <div class="jug3"></div>
        <div class="jugo"></div>
        <div class="jug7"></div>
        <div class="vaso">
            <div class="vaso3">
                <div class="ojos"></div>
                <div class="ojos3"></div>
                <div class="boca3"></div>
            </div>
            <div class="linea"></div>
        </div>
    </div>
`
    document.getElementById("container").style.background =  "#f40750";
}

function hiddenAnimation(){
    document.getElementById("container").innerHTML = ``;
    document.getElementById("container").style.background =  "none";
}
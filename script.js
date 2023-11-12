window.onload = function() {

    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);

}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName !== "" && crushName !=="") {
        let percentage = Math.floor(Math.random() * 101);
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of  love: "
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";

        if (percentage <= 10){
            document.getElementById("result-identifier").innerText = "Dili mo para sa usag usa";
        }
        else if (percentage <= 25 ){
            document.getElementById("result-identifier").innerText = "Medyo naay chance";
        }
        else if (percentage <= 60){
            document.getElementById("result-identifier").innerText = "Naa kay chance";
        }
        else if (percentage <= 85){
            document.getElementById("result-identifier").innerText = "Panguyabi na";
        }
        else if(percentage <= 99){
            document.getElementById("result-identifier").innerText = "Kayasa sanaol";
        }
        else { 
            document.getElementById("result-identifier").innerText = "Soulmate ampota";
        }




    }
}
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");
let computerChoice = document.getElementById("computerChoice");
let options = ["batu", "gunting", "kertas"];

batu.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout (() => {
        switch (randomOption){
            case "batu":
                alert("seri")
                break;
    
            case "gunting":
                alert("Kamu Menang!");
                break;
            
            default:
                alert("Komputer Menang!");
                break;
        }
    }),300
    })

gunting.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout (() =>{
        switch (randomOption){
            case "batu":
                alert("Komputer Menang!")
                break;
    
            case "gunting":
                alert("Seri");
                break;
            
            default:
                alert("Kamu Menang");
                break;
        }
    }),300
})

kertas.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout (() =>{
        switch (randomOption){
            case "batu":
                alert("Kamu Menang!")
                break;
    
            case "gunting":
                alert("Komputer Menang!");
                break;
            
            default:
                alert("Seri");
                break;
        }
    }),300
})

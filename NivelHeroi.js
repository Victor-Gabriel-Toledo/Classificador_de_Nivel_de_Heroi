//entrada de dados do herói
let nomeHeroi =  "VG"
let XP = 70000
let nivelHeroi = ""

//realiza o cálculo do nível do herói
if(XP <= 1000){
    nivelHeroi = "Ferro"
}

else if(XP >= 1001 && XP < 2001){
    nivelHeroi = "Bronze"
}

else if(XP >= 2001 && XP < 5001){
    nivelHeroi = "Prata"
}

else if(XP >= 5001 && XP < 7001){
    nivelHeroi = "Ouro"
}

else if(XP >= 7001 && XP < 8001){
    nivelHeroi = "Platina"
}

else if(XP >= 8001 && XP < 9001){
    nivelHeroi = "Ascendente"
}

else if(XP >= 9001 && XP < 10001){
    nivelHeroi = "Imortal"
}

else {
    nivelHeroi = "Radiante"
}

//menssagem de saída
console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
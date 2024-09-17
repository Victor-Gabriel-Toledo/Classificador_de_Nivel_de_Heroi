let nomeHeroi =  "VG"
let XP = 5500
let nivelHeroi = ""

if(XP <= 1000){
    nivelHeroi = "Ferro"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 1001 && XP < 2001){
    nivelHeroi = "Bronze"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 2001 && XP < 5001){
    nivelHeroi = "Prata"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 5001 && XP < 7001){
    nivelHeroi = "Ouro"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 7001 && XP < 8001){
    nivelHeroi = "Platina"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 8001 && XP < 9001){
    nivelHeroi = "Ascendente"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else if(XP >= 9001 && XP < 10001){
    nivelHeroi = "Imortal"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}

else {
    nivelHeroi = "Radiante"
    console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi)
}
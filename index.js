let nome = "Washington"
let XP = 8000
let nivel = true

if (XP < 1000){
    console.log("Ferro")
}if (XP > 1000){
    console,log("Bronze")
}else if (XP <= 2000){
    console.log("Bronze")
}else if (XP > 2000){
    console.log("Prata")
}else if (XP <= 5000){
    console.log("Prata")
}else if (XP > 5000){
    console.log("Ouro")
}else if (XP <= 7000){
    console.log ("outro")
}else if (XP > 7000){
    console.log("Platina")
}else if (XP <= 8000){
    console.log("Platina")
}else if (XP > 8000){
    console.log("Ascendente")
}else if (XP <= 9000){
    console.log("Ascendente")
}else if (XP > 9000){
    console.log("Imortal")
}else if (XP <= 10000){
    console.log("Imortal")
}else if (XP >= 10001){
    console.log("Radiante")
}

console.log("O Herói de nome " + nome)
console.log("está no nível de " + XP)
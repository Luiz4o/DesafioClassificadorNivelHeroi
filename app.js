
const name =  "Luiz"  //Insira o nome do seu personagem 
const xpCharacter = 5003  //Informe a quantidade de XP do personagem
let rank

if(xpCharacter < 1000){
    rank = "Ferro"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter < 2000){
    rank = "Bronze"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter < 5000){
    rank = "Prata"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter < 7000){
    rank = "Ouro"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter < 8000){
    rank = "Platina"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter < 9000){
    rank = "Ascendente"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter <= 10000){
    rank = "Imortal"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
}else if(xpCharacter > 10000){
    rank = "Radiante"
    console.log(`O Herói de nome ${name} está no nível de ${rank}`)
} else{
    console.log(`Olá Herói ${name} sinto lhe informar, mas não encontramos o nível do seu personagem`)
}
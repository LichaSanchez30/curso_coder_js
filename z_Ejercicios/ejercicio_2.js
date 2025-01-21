let names = ['Homero','Marge','Bart','Lisa','Maggie'];
let play = confirm('Queres jugar?')
let respuesta = names[Math.floor(Math.random()*5)].toLocaleUpperCase();


function guessCharacter(names){  
    let vidas = 3
    while(vidas != 0){
        console.log(names)
    let character = prompt("Ingresa un nombre:\n◾Homero\n◾Marge\n◾Bart\n◾Lisa\n◾Maggie").toLocaleUpperCase();
        if(names == character){
            document.write("<h3>Fui yo.</h3><h2>MUY BIEN GANASTE🎉😁🙌👏✨</h2>")
            break
        }else{
            vidas--;
            console.log(vidas);
        }
    }
}
guessCharacter(respuesta)
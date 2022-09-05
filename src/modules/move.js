const moveCharacter = () =>{
    const character = document.querySelector('.mem')
    let x = 0
    let y = 0
    document.addEventListener('keydown', function(event)    {
        if (event.code == 'ArrowDown'){
            y = +y + 20
            character.style.top = y+'px'
            console.log("вниз");
        }
        else if (event.code == 'ArrowUp'){
            y = +y - 20
            character.style.top = y+'px'
            console.log("вверх");
        }
        else if (event.code == 'ArrowRight'){
            x = +x + 20
            character.style.left = x+'px'
            console.log("вправо");
        }
        else if (event.code == 'ArrowLeft'){
            x = +x - 20
            character.style.left = x+'px'
            console.log("влево");
        }
    });
}

export default moveCharacter



const pauseGame = () =>{
    const pauseWindow = document.querySelector('.pause')
    let i = 0
    document.addEventListener('keydown', function(event){
        if (event.code == "Escape"){
            if(i == 0){
                pauseWindow.style.display = 'flex'
                i = 1  
            }
            else{
                pauseWindow.style.display = 'none'
                i = 0
            }
        }
    })
}

export default pauseGame
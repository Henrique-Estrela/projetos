const teclas = document.querySelectorAll(".oitava > div")

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
    };

teclas.forEach(function(tecla) {
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada")
    };
    
    tecla.onmouseup = () => desmarcar(tecla)
    tecla.onmouseleave = () => desmarcar(tecla)
})
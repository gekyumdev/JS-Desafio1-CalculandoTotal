precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

aumentar=document.querySelector('#aumentar')
aumentar.onclick=function(){
    cant=document.querySelector('.cantidad')
    suma=Number(cant.innerHTML)
    suma = suma + 1
    cant.innerHTML = suma
    actValor()
}

disminuir=document.querySelector('#disminuir')
disminuir.onclick=function(){
    cant=document.querySelector('.cantidad')
    resta=Number(cant.innerHTML)
    resta = resta - 1
    cant.innerHTML = resta
    actValor()
}

function actValor(){ cantidad=document.querySelector('.cantidad')
cant=Number(cantidad.innerHTML)
valorTotal=document.querySelector('.valor-total')
valorTotal.innerHTML = cant * precio
}
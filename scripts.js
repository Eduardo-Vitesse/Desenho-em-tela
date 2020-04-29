document.addEventListener('DOMContentLoaded', () => {

const pincel = {
    ativo: false,
    movendo: false,
    pos: { x:0, y:0 },
    posAnterior: null
}

const tela = document.querySelector('#tela')
const contexto = tela.getContext('2d')

tela.width = 700
tela.height = 500

contexto.lineWidth = 7
contexto.strokeStyle = '#ff6600'

const desenharLinha = (linha) => {
    contexto.beginPath()
    contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y)
    contexto.lineTo(linha.pos.x, linha.pos.y)
    contexto.stroke()
}

tela.onmousedown = (event) => {
    pincel.ativo = true
}

tela.onmouseup = (event) => {
    pincel.ativo = false
}

tela.onmousemove = (event) => {
    pincel.pos.x = event.clientX
    pincel.pos.y = event.clientY
    pincel.movendo = true
}


const cilco = () => {
    if(pincel.ativo && pincel.movendo && pincel.posAnterior){
        desenharLinha({
            pos: pincel.pos,
            posAnterior: pincel.posAnterior
        }, pincel.movendo = false )
    }

    pincel.posAnterior = {...pincel.pos}

    setTimeout(cilco, 10)
}

cilco()

})
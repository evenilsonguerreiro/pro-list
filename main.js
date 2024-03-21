const input = document.querySelector('.input-texto')
const botao = document.querySelector('.button-adicionar')
const listaCompleta = document.querySelector('.taks')
const icone = document.querySelector('.icone-lixeira')



let minhaListadeitem = []


function adicionaNovatarefa() {
    minhaListadeitem.push({
        tarefa: input.value,
        concluida:  false
    })

    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLista = ''

    minhaListadeitem.forEach((item, posicao) => {
        novaLista = novaLista + `
        <li class="tak ${item.concluida && 'done'}">
            <img " src="./imagens/checked.png" alt="" onclick="tarefaConcluida(${posicao})">
            <p>${item.tarefa}</p>
            <img class="icone-lixeira" src="./imagens/trash.png" alt="" onclick="deletarItem(${posicao})">
        </li>

        `
        
    })

    listaCompleta.innerHTML = novaLista

    localStorage.setItem('lista',JSON.stringify(minhaListadeitem))
}

function tarefaConcluida(posicao){
     minhaListadeitem[posicao].concluida = !minhaListadeitem[posicao].concluida

     mostrarTarefa()
}


function deletarItem(posicao){
    minhaListadeitem.splice(posicao,1)

    mostrarTarefa()
}

function recarregarTarefas(){
    const tarefasDolocalstorage = localStorage.getItem('lista')
    if(tarefasDolocalstorage){
        minhaListadeitem = JSON.parse(tarefasDolocalstorage)
    }

    mostrarTarefa()
}

recarregarTarefas()




botao.addEventListener('click', adicionaNovatarefa)


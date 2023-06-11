const lista = document.getElementById("lista")
const crescente = document.getElementById("crescente")
const decrescente = document.getElementById("decrescente")
const limpa = document.getElementById("limpa")
const array = []

lista.addEventListener("click", ()=>{
        array.push(prompt("Adicione um numero de cada vez na lista e ao final, selecione a ordem que deseja:"))
})
crescente.addEventListener("click", ()=>{
    for(let n = 1; n<array.length; n++){
        for(let i = 0; i<array.length; i++){
            if(array[i]>array[i+1]){
                let aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
            }
        }
    }
    alert(array)
})
decrescente.addEventListener("click", ()=>{
    for(let n = 1; n<array.length; n++){
        for(let i = 0; i<array.length; i++){
            if(array[i]<array[i+1]){
                let aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
            }
        }
    }
    alert(array)
})
limpa.addEventListener("click", ()=>{
    array.splice(0, array.length)
    alert("Lista limpa com sucesso!")
})
const inputUsuario = document.getElementById("nomeUsuario")
const botaoAdd = document.getElementById("botaoAdiciona")
const fotoPerfil = document.getElementById("imgPerfil")


botaoAdd.addEventListener("click", () =>{
    if(inputUsuario === ""){

    }
})



function carregaUsuario(){
    let user = "abeazist"
    let url = `https://api.github.com/users/${user}`

    fetch(url)
    .then((resposta) => {
         return resposta.json()
    })
    .then((dados) => {
        console.log(dados.avatar_url)
        fotoPerfil.setAttribute("src", dados.avatar_url)
    })
    .catch((erro) => console.log(erro))
}

carregaUsuario()
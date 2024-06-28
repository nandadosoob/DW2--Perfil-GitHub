const inputUsuario = document.getElementById("nomeUsuario")
const botaoAdd = document.getElementById("botaoAdiciona")
const fotoPerfil = document.getElementById("imgPerfil")
const fotoFundo = document.getElementById("imgFundo")
const nome = document.getElementById("nomeUsuario")
const login = document.getElementById("IDlogin")
const repositorioNome = document.getElementById("nomeRepositorio")
const descRepositorio = document.getElementById("descricao")
const linguagens = document.getElementById("ling")


botaoAdd.addEventListener("click", () =>{
    if(inputUsuario === ""){

    }
})



function carregaUsuario(){
    let user = "abeazist"
    let url = `https://api.github.com/users/${user}`
    let nomePerfil = 

    fetch(url)
    .then((resposta) => {
         return resposta.json()
    })
    .then((dados) => {
        console.log(dados.avatar_url)
        fotoPerfil.setAttribute("src", dados.avatar_url)
        console.log(dados.name)
        nome.setAttribute("h3", dados.name)
    })
    .catch((erro) => console.log(erro))
}

carregaUsuario()
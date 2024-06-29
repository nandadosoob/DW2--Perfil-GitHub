const inputUsuario = document.getElementById("nomeUsuario")
const botaoAdd = document.getElementById("botaoAdiciona")
const fotoPerfil = document.getElementById("imgPerfil")
const fotoFundo = document.getElementById("imgFundo")
const nome = document.getElementById("nomeUsuario")
const login = document.getElementById("IDlogin")
const repositorioNome = document.getElementById("nomeRepositorio")
const descRepositorio = document.getElementById("descricao")
const linguagens = document.getElementById("ling")
const caixaUsuario = document.getElementById("caixa")


botaoAdd.addEventListener("click", () => {
    if (inputUsuario === "") {

    }
})



function carregaUsuario() {
    // let user = inputUsuario.value
    let user = "nandadosoob"
    let url = `https://api.github.com/users/${user}`

    fetch(url)
        .then((resposta) => {
            return resposta.json()
        })
        .then((dados) => {
            //foto de perfil
            console.log(dados.avatar_url)
            fotoPerfil.setAttribute("src", dados.avatar_url)

            //nome
            console.log(dados.name)
            nome.innerHTML = dados.name;

            //login
            console.log(dados.login)
            login.innerHTML = dados.login;

        })

        .catch((erro) => console.log(erro))
}

function carregaRespositorio() {
    let user = "nandadosoob"

    // let repository = "Dw1"
    let repositoryUrl = `https://api.github.com/repos/${user}/${repository}`
    // let repositoryUrl = `https://api.github.com/users/${user}/repos/${repository}`
    // let repositoryUrl = `https://api.github.com/${user}/${repository}`

    fetch(repositoryUrl)
        .then((resposta) => {
            return resposta.json()
        })
        .then((dadosRepositorio) => {
            console.log(dadosRepositorio)

            // dadosRepositorio.forEach(() => {
            //     let cartao = document.createElement("div")

            //     caixaUsuario.innerHTML = `
            //     <h6 class="font-bold text-sm" id="nomeRepositorio"></h6>
            //     <p class="text-sm text-gray-600" id="descricao"></p>
            //     <span class="bg-neutral-400 text-xs font-bold w-auto px-1 rounded" id="ling"></span>
            //         `
            //     console.log(dadosRepositorio.name)
            //     repositorioNome.innerHTML = dadosRepositorio.name

            //     //descricao do repositorio
            //     console.log(dadosRepositorio.description)
            //     descRepositorio.innerHTML = dadosRepositorio.description

            //     console.log(dadosRepositorio.language)
            //     linguagens.innerHTML = `#${dadosRepositorio.language}`

            //     caixaUsuario.appendChild(cartao)

            // });

        })
        .catch((erro) => console.log(erro))
}



carregaUsuario()
carregaRespositorio()
// carregaLinguagens()
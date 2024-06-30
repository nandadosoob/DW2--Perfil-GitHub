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
const espacoCartao = document.getElementById("espacoCartoes")
const caixaRepositorios = document.getElementById("divRepositorios")


botaoAdd.addEventListener("click", () => {
    adicionaCartao()

})

function adicionaCartao() {
    const novoCard = document.createElement("div")
    // novoCard.classList = "border-solid border-2 border-stone-400 h-96 w-80 flex flex-col m-4 rounded-md"
    novoCard.innerHTML = `        
    <div class="border-solid border-2 border-stone-400 h-96 w-80 flex flex-col m-4 rounded-md" id="caixa">
        <img id="imgPerfil" src="../teste-perfil-git/130059223.jpg"
            class="rounded-full  w-20 h-20 border-4 border-white self-center absolute top-40">
        <img id="imgFundo" src="../teste-perfil-git/o-que-e-paisagem.jpg.png" class=" h-28 w-full self-center">
        <br>
        <br>
        <p class="self-center" id="nomeUsuario"></p>
        <p class="self-center" id="IDlogin"></p>
        <p class="text-xs font-semibold px-4 py-2">REPOSITÓRIOS</p>
        <div class="w-72 h-28 bg-gray-200 rounded-md border-2 border-neutral-300 ps-2 self-center">
            <h6 class="font-bold text-sm" id="nomeRepositorio"></h6>
            <p class="text-sm text-gray-600" id="descricao"></p>
            <span class="bg-neutral-400 text-xs font-bold w-auto px-1 rounded" id="ling">
            </span>
        </div>`
    espacoCartao.appendChild(novoCard)

}


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

    let qntRepositorios = `https://api.github.com/users/${user}`


    let repository = "Dw1"
    // let repositoryUrl = `https://api.github.com/users/${user}/repos/${repository}`
    // let repositoryUrl = `https://api.github.com/${user}/${repository}`
    // let repositoryUrl = `https://api.github.com/repos/${user}/${repository}`
    let repositoryUrl = `https://api.github.com/users/${user}/repos`

    fetch(repositoryUrl)
        .then((resposta) => {
            return resposta.json()
        })
        .then((dadosRepositorio) => {

            // console.log(dadosRepositorio)

            dadosRepositorio.forEach((repo) => {
                const cartao = document.createElement("div")
                cartao.classList = "w-72 h-28 bg-gray-200 rounded-md border-2 border-neutral-300 ps-2 self-center"
                

                // cartao.innerHTML = `
                // <h6 class="font-bold text-sm" id="nomeRepositorio"></h6>
                // <p class="text-sm text-gray-600" id="descricao"></p>
                // <span class="bg-neutral-400 text-xs font-bold w-auto px-1 rounded" id="ling"></span>
                // `
                // console.log(dadosRepositorio.name)
                // repositorioNome.innerHTML = dadosRepositorio.name

                // descricao do repositorio
                // console.log(dadosRepositorio.description)
                // descRepositorio.innerHTML = dadosRepositorio.description
                
                // console.log(dadosRepositorio.language)
                // linguagens.innerHTML = `#${dadosRepositorio.language}`
                
                caixaRepositorios.appendChild(cartao)
                
                // console.log(repo)
            });

        })
        .catch((erro) => console.log(erro))
}



carregaUsuario()
carregaRespositorio()
// carregaLinguagens()
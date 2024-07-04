const inputUsuario = document.getElementById("nomeUsuario")
const botaoAdd = document.getElementById("botaoAdiciona")
const fotoPerfil = document.getElementById("imgPerfil")
const fotoFundo = document.getElementById("imgFundo")
// const nome = document.querySelector("#nomeUsuario")
const nome = document.getElementById("nomeUsuarios")
const login = document.getElementById("IDlogin")
const repositorioNome = document.getElementById("nomeRepositorio")
const descRepositorio = document.getElementById("descricao")
const linguagens = document.getElementById("ling")
const caixaUsuario = document.getElementById("caixa")
const espacoCartao = document.getElementById("espacoCartoes")
const caixaRepositorios = document.getElementById("divRepositorios")


botaoAdd.addEventListener("click", () => {

    adicionaCartao()
    // carregaUsuario()
    carregaRespositorio()
    inputUsuario.value = ''
})

function adicionaCartao() {
    const novoCard = document.createElement("div")
    // novoCard.classList = "border-solid border-2 border-stone-400 h-96 w-80 flex flex-col m-4 rounded-md"
    let user = inputUsuario.value
    // let user = "nandadosoob"
    let url = `https://api.github.com/users/${user}`

    fetch(url)
        .then((resposta) => {
            return resposta.json()
        })
        .then((dados) => {
            let fotoPerfil = dados.avatar_url

            novoCard.innerHTML = `        
            <div class="border-solid border-2 border-stone-400 h-96 w-80 flex flex-col m-4 rounded-md" id="caixa">
                <img id="imgPerfil" src=${fotoPerfil}
                    class="rounded-full  w-20 h-20 border-4 border-white self-center absolute top-40">
                <img id="imgFundo" src="../teste-perfil-git/o-que-e-paisagem.jpg.png" class=" h-28 w-full self-center">
                <br>
                <br>
                <p class="self-center" id="nomeUsuario">${dados.name}</p>
                <p class="self-center" id="IDlogin">${dados.login}</p>
                <p class="text-xs font-semibold px-4 py-2">REPOSITÓRIOS</p>
                <div id="divRepositorios" class="w-auto h-44 flex flex-col justify-center gap-3 overflow-auto"></div>
                `
                espacoCartao.appendChild(novoCard)

               
            })

        .catch((erro) => console.log(erro))


}


function carregaRespositorio() {
    let user = inputUsuario.value

    let repositoryUrl = `https://api.github.com/users/${user}/repos`

    fetch(repositoryUrl)
    .then((resposta) => {
        return resposta.json()
    })
    .then((dadosRepositorio) => {
        
        // console.log(dadosRepositorio)
            const caixaRepositorios = document.getElementById("divRepositorios")
            
            
            dadosRepositorio.forEach((repo) => {
                const cartao = document.createElement("div")
                // cartao.classList = "w-auto h-44 flex flex-col justify-center gap-3 overflow-auto"
                
                cartao.innerHTML = `<div class="w-72 h-28 bg-gray-200 rounded-md border-2 border-neutral-300 ps-2 self-center">
                <h6 class="font-bold text-sm" id="nomeRepositorio">${repo.name}</h6>
                <p class="text-sm text-gray-600" id="descricao">${repo.description}</p>
                <span class="bg-neutral-400 text-xs font-bold w-auto px-1 rounded" id="ling">${repo.language}
                </span>
                </div>`
                
                caixaRepositorios.appendChild(cartao)
                
            });
            
        })
        .catch((erro) => console.log(erro))
    }
    
    
    
    // carregaUsuario()
    // carregaRespositorio()
    // carregaLinguagens()
    
    // function carregaUsuario() {
    //     let user = inputUsuario.value
    //     // let user = "nandadosoob"
    //     let url = `https://api.github.com/users/${user}`
    
    //     fetch(url)
    //         .then((resposta) => {
    //             return resposta.json()
    //         })
    //         .then((dados) => {
    //             //foto de perfil
    //             console.log(dados.avatar_url)
    //             fotoPerfil.setAttribute("src", dados.avatar_url)
    
    //             //nome
    //             nome.innerHTML = dados.name;
    //             console.log(dados.name)
    
    //             //login
    //             console.log(dados.login)
    //             login.innerHTML = dados.login;
    
    //         })
    
    //         .catch((erro) => console.log(erro))
    // }
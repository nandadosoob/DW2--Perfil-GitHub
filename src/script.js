const inputUsuario = document.getElementById("nomeUsuario")
const botaoAdd = document.getElementById("botaoAdiciona")
// const caixaUsuario = document.getElementById("caixa")
const espacoCartao = document.getElementById("espacoCartoes")



botaoAdd.addEventListener("click", () => {
    if (inputUsuario.value === ''){
        alert("Entre com um usuário válido")
    } else{
        adicionaCartao()
        inputUsuario.value = ''

    }
})



function adicionaCartao() {
    const novoCard = document.createElement("div")
    let user = inputUsuario.value
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
                <img id="imgFundo" src="../teste-perfil-git/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_4e0d816kuzyu700pdbjn.jpg" class=" h-28 w-full self-center">
                <br>
                <br>
                <p class="self-center" id="nomeUsuario">${dados.name}</p>
                <p class="self-center" id="IDlogin">${dados.login}</p>
                <p class="text-xs font-semibold px-4 py-2">REPOSITÓRIOS</p>
                <div id="divRepositorios" class="w-auto h-44 flex flex-col items-center gap-3 overflow-auto"></div>
                `
                


                espacoCartao.appendChild(novoCard)

                const caixaRepositorios = novoCard.querySelector("#divRepositorios");
                carregaRespositorio(user, caixaRepositorios)

                // console.log("Usuário não encontrado, por favor digite um usuário existente")

               
            })

        .catch((erro) => {
            console.log("errp: ",erro)
            alert("Usuário não encontrado, por favor digite um usuário existente" + erro.message)
        })
        // .catch((erro) => console.log(erro))


}


function carregaRespositorio(user,caixaRepositorios) {
    // let user = inputUsuario.value

    let repositoryUrl = `https://api.github.com/users/${user}/repos`

    fetch(repositoryUrl)
    .then((resposta) => {
        return resposta.json()
    })
    .then((dadosRepositorio) => {            
            
            dadosRepositorio.forEach((repo) => {
                const cartao = document.createElement("div")
                
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
    

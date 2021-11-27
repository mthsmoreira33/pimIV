const items = [
    {
        id: 0,
        nome: 'QUARTO 1',
        img: '',
        quantidade: 0,
        qtdStars: 4,
        preco: 250
    },
    {
        id: 1,
        nome: 'QUARTO 2',
        img: '',
        quantidade: 0,
        qtdStars: 3,
        preco: 350
    },
    {
        id: 2,
        nome: 'QUARTO 3',
        img: '',
        quantidade: 0,
        qtdStars: 5,
        preco: 600
    },
]
let nomeLogado = JSON.parse(localStorage.getItem('nomeLogado')) 

let logado = document.querySelector('#logado')

logado.innerHTML = 'Seja bem vindo ' + nomeLogado.nome

if(localStorage.getItem('token')==null){
    alert('Você precisa estar logado')
    window.location.href='file:///C:/Users/Julio/Desktop/PIM/HOTEL/login/index.html'
}
function sair(){
    localStorage.removeItem('token')
    window.location.href='file:///C:/Users/Julio/Desktop/PIM/HOTEL/login/index.html'
}

inicializarLojaVirual = () => {
    var containerProduto = document.getElementById('produtos');
    items.map((val) => {
        containerProduto.innerHTML += `
        
            <div class="produtos-single">
                <img src="`+val.img+`"/>
                <p>`+val.nome+`</p>
                <p class="preco">R$ `+val.preco+`,00</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
            </div>

        `;
    })
}

inicializarLojaVirual()

autualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinhos');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `

                <p class="res">Produto: `+val.nome+` | Quantidade: `+val.quantidade+` | Preco: R$ `+(val.quantidade * val.preco)+`,00</p>
                <hr>

            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        autualizarCarrinho();
        return false;
    })
}

let nome = document.querySelector('#nome');
let validNome = false;
let labelNome = document.querySelector('#labelNome');
let email = document.querySelector('#email');
let validEmail = false;
let labelEmail = document.querySelector('#labelEmail');
let senha = document.querySelector('#senha');
let validSenha = false;
let labelSenha = document.querySelector('#labelSenha');
let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');

nome.addEventListener('keyup',()=> {
if(nome.value.length  <= 2 ){
    nome.setAttribute('style','color: red')
    validNome = false
}else{
    nome.setAttribute('style','color: green')
    validNome = true
}
})

email.addEventListener('keyup',()=> {
    if(email.value.length  <= 5 ){
        email.setAttribute('style','color: red')
        validEmail = false
    }else{
        email.setAttribute('style','color: green')
        validEmail = true
    }
    })

 senha.addEventListener('keyup',()=> {
 if(senha.value.length  <= 4 ){
     senha.setAttribute('style','color: red')
     validSenha = false
        }else{
        senha.setAttribute('style','color: green')
        validSenha = true
        }
        })
function cadastrar(){
    if(validNome && validEmail && validSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser')|| '[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser',JSON.stringify(listaUser))

      alert('Cadastrado com sucesso')
      setTimeout(()=>{
        window.location.href='index.html'
      },3000)
     
    }else{
      alert('Erro ao cadastrar, verifique os campos!')
    }
    };


var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
btnSignin.addEventListener("click", function() {
    body.className = "sign-in-js";
});
btnSignup.addEventListener("click", function() {
    body.className = "sign-up-js";

});
function entrar(){
let nome = document.querySelector('#nome')
let email = document.querySelector('#emaillogin')
let senha = document.querySelector('#senhalogin')
let listaUser = []
let emailValid = {
    nome:'',
    email:'',
    senha:''
}
listaUser = JSON.parse(localStorage.getItem('listaUser'))
listaUser.forEach((item) =>{
if(email.value == item.emailCad && senha.value == item.senhaCad){
    emailValid ={
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
    }
}
})
if(email.value == emailValid.email && senha.value == emailValid.senha){
    alert('Logado com sucesso, você será redirecionado para a tela de reserva')
    window.open("file:///C:/Users/Julio/Desktop/PIM/HOTEL/login/loja.html");
    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)
    localStorage.setItem('nomeLogado', JSON.stringify(emailValid))
}else{
    alert('Erro ao logar, verifique suas credenciais')
}
}
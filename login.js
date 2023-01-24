const usuarios = [
    {
        email: 'isabel2012natalia@gmail',
        senha: '123456'
    },
    {
        email: 'diogofarias@gmail',
        senha: '654321'
    },
    {
        email: 'leticiamatias@gmail',
        senha: '456789'
    }
]

let botao = document.getElementById('btn-login');

botao.addEventListener('click', function login() {
    let pegaEmail = document.getElementById("email").value;
    let pegaSenha = document.getElementById("senha").value;
    let validaLogin = false;

    for(let i in usuarios) {
        
        if (pegaEmail == usuarios[i].email && pegaSenha == usuarios[i].senha) {
            validaLogin = true;
            break;
        }

    }

    if (validaLogin == true ) {
        location.href = "perfil.html";
    } else {
        alert('ERRO: E-mail ou senha incorretos ou não cadastrados!')
    }
})
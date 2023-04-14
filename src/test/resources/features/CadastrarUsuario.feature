#language: pt
#enconding: UTF-8
Funcionalidade: Login

  Cenario: criar conta com saldo
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022CS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E acionar o botao switch para a direita
    E clicar no botao cadastrar
    E usuario criado com saldo em conta
    Entao confirmar cadastro

  Cenario: criar conta sem saldo
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    E usuario criado sem saldo em conta
    Entao confirmar cadastro

  Cenario: não informar email
    Quando eu clicar no botao registrar
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    E entao erro de e-mail obrigatorio

  Cenario: email formato invalido
    Quando eu clicar no botao registrar
    E informar no campo o email "fdsga"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    Entao aviso de formato invalido

  Cenario: nome vazio
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    Entao aviso de nome vazio

  Cenario: campo senha vazia
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar no campo o nome "Andre"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    Entao erro de campo senha obrigatorio

  Cenario: campo confirmar senha vazio
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E clicar no botao cadastrar
    Entao erro de confirmar senha obrigatorio

  Cenario: campo de senhas diferentes
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "1234564789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    Entao aviso de senha diferente

#language: pt
#enconding: UTF-8
Funcionalidade: realizar login

  Contexto: criar conta
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022CS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E acionar o botao switch para a direita
    E clicar no botao cadastrar
    E confirmar cadastro
    Entao usuario criado com saldo em conta

  Cenario: Login valido
    Quando eu informar o email "maratonaqa2022CS@outlook.com"
    E eu informar a senha "123456789"
    E eu clicar no botao acessar
    Entao usuario logado

  Cenario: Login Invalido
    Quando eu informar o email "asdf@asd.com"
    E eu informar a senha "1asdf"
    E eu clicar no botao acessar
    E entao clicar em fechar
    Entao login invalido

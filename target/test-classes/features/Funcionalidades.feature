#language: pt
#enconding: UTF-8
Funcionalidade: realizar testes logado na plataforma

  Contexto: criar conta com saldo
    Quando eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022CS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E acionar o botao switch para a direita
    E clicar no botao cadastrar
    E usuario criado com saldo em conta
    E confirmar cadastro
    E eu informar o email "maratonaqa2022CS@outlook.com"
    E eu informar a senha "123456789"
    E eu clicar no botao acessar
    Entao usuario logado

  Cenario: realizar pagamento
    Quando eu clicar no botao pagamento
    Entao mensagem de reforma

  Cenario: realizar saque
    Quando eu cicar no botao saque
    Entao mensagem de reforma

  Cenario: Verificar saldo
    Quando eu clicar em extrato
    E verificar o saldo
    Entao acionar botao de home
   
  Cenario: Transferencia
  	Quando eu clicar em sair
  	E eu clicar no botao registrar
    E informar no campo o email "maratonaqa2022SS@outlook.com"
    E informar no campo o nome "Andre"
    E informar a senha "123456789"
    E confirmar a senha "123456789"
    E clicar no botao cadastrar
    E salvar numero
    E usuario criado sem saldo em conta
    E confirmar cadastro
    E eu informar o email "maratonaqa2022CS@outlook.com"
    E eu informar a senha "123456789"
    E eu clicar no botao acessar
  	E eu clicar no botao transferencia
  	E informar o numero da conta1
  	E o digito da conta1
  	E o valor da transferencia "582"
  	E a descricao "teste transferencia"
  	E clicar no botao transferencia
  	Entao transferencia realizada com sucesso
  	

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "criar conta com saldo",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "criar conta sem saldo",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado sem saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoSemSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "não informar email",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entao erro de e-mail obrigatorio",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.entaoErroDeEMailObrigatorio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "email formato invalido",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"fdsga\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aviso de formato invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.avisoDeFormatoInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "nome vazio",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aviso de nome vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.avisoDeNomeVazio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campo senha vazia",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "erro de campo senha obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.erroDeCampoSenhaObrigatorio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campo confirmar senha vazio",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "erro de confirmar senha obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.erroDeConfirmarSenhaObrigatorio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campo de senhas diferentes",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"1234564789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aviso de senha diferente",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.avisoDeSenhaDiferente()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Funcionalidades.feature");
formatter.feature({
  "name": "realizar testes logado na plataforma",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "criar conta com saldo",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.usuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar pagamento",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu clicar no botao pagamento",
  "keyword": "Quando "
});
formatter.match({
  "location": "FuncionalidadesSteps.euClicarNoBotaoPagamento()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mensagem de reforma",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.mensagemDeEmReformar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar conta com saldo",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"style__ContainerButton-sc-1wsixal-0 otUnI button__child\"\u003e...\u003c/button\u003e is not clickable at point (1442, 509). Other element would receive the click: \u003cdiv class\u003d\"styles__Container-sc-8zteav-0 eaPGNe\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DEZIN\u0027, ip: \u0027192.168.0.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Andre\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63960}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9be606fcfcd448f50ff7100af822e88e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObjects.LoginPage.acionarBotaoLogin(LoginPage.java:30)\r\n\tat stepsDefinitions.LoginSteps.clicarNoBotaoLogin(LoginSteps.java:28)\r\n\tat ✽.eu clicar no botao acessar(file:src/test/resources/features/Funcionalidades.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.usuarioLogado()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "realizar saque",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu cicar no botao saque",
  "keyword": "Quando "
});
formatter.match({
  "location": "FuncionalidadesSteps.euCicarNoBotaoSaque()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "mensagem de reforma",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.mensagemDeEmReformar()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar conta com saldo",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.usuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar saldo",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu clicar em extrato",
  "keyword": "Quando "
});
formatter.match({
  "location": "FuncionalidadesSteps.euClicarEmExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verificar o saldo",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.verificarOSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao de home",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarBotaoDeHome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar conta com saldo",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.usuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario1"
    }
  ]
});
formatter.step({
  "name": "eu clicar em sair",
  "keyword": "Quando "
});
formatter.match({
  "location": "FuncionalidadesSteps.euClicarEmSair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022SS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar numero",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.salvarNumero()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado sem saldo em conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoSemSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.euClicarNoBotaoTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o digito da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.oDigitoDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor da transferencia \"582\"",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.oValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a descricao \"teste transferencia\"",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.aDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.clicarNoBotaoTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transferencia realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.transferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "realizar login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "criar conta",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login valido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "eu informar o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.usuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar conta",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euClicaNoBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o email \"maratonaqa2022CS@outlook.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo o nome \"Andre\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"123456789\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao switch para a direita",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSwitchParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar cadastro",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario criado com saldo em conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.usuarioCriadoComSaldoEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Invalido",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "eu informar o email \"asdf@asd.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar a senha \"1asdf\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entao clicar em fechar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.entaoClicarEmFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.loginInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
});
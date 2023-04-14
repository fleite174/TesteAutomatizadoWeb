package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastrarUsuarioPage;

public class CadastrarUsuarioSteps {
	
	@Quando("eu clicar no botao registrar")
	public void euClicaNoBotaoRegistrar() {
		Na(CadastrarUsuarioPage.class).botaoRegistrar();
	}

	@Quando("informar no campo o email {string}")
	public void informarNoCampoOEmail(String campoEmail) {		
		Na(CadastrarUsuarioPage.class).campoInformarEmail(campoEmail);

	}

	@Quando("informar no campo o nome {string}")
	public void informarNoCampoONome(String campoNome) {
		Na(CadastrarUsuarioPage.class).campoInformarNome(campoNome);

	}

	@Quando("informar a senha {string}")
	public void informarCampoSenha(String campoSenha) {
		Na(CadastrarUsuarioPage.class).campoInformarSenha(campoSenha);

	}

	@Quando("confirmar a senha {string}")
	public void confirmarASenha(String campoSenhaConfirmar) {
		Na(CadastrarUsuarioPage.class).campoConfirmarSenha(campoSenhaConfirmar);

	}

	@Quando("acionar o botao switch para a direita")
	public void acionarOBotaoSwitchParaADireita() {
		Na(CadastrarUsuarioPage.class).botaoSwitch();

	}

	@Quando("clicar no botao cadastrar")
	public void clicarNoBotaoCadastrar() {
		Na(CadastrarUsuarioPage.class).botaoConfirmarRegistro();

	}
	
	@E("^confirmar cadastro$")
	public void confirmarCadastro() {
		Na(CadastrarUsuarioPage.class).confirmarCadastro();
		
	}

	@Entao("usuario criado com saldo em conta")
	public void usuarioCriadoComSaldoEmConta() throws Throwable {

	}
	
	@Entao("^conta criada$")
	public void contaCriada() throws Throwable {

	}

	@E("entao erro de e-mail obrigatorio")
	public void entaoErroDeEMailObrigatorio() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='style__ContainerFieldInput-sc-s3e9ea-0 kOeYBn input__child']//p")).isDisplayed());
		
	}

	@Entao("aviso de formato invalido")
	public void avisoDeFormatoInvalido() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='style__ContainerFieldInput-sc-s3e9ea-0 kOeYBn input__child']//p")).isDisplayed());
	}

	@Entao("aviso de nome vazio")
	public void avisoDeNomeVazio() throws Throwable {	
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='styles__Container-sc-8zteav-0 eaPGNe']//div[@class='styles__ContainerInformations-sc-8zteav-3 fQkeSa']//a[@class='styles__Button-sc-8zteav-5 gyHUvN']")).isDisplayed());
	}

	@Entao("erro de campo senha obrigatorio")
	public void erroDeCampoSenhaObrigatorio() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='style__ContainerFieldInput-sc-s3e9ea-0 kOeYBn input__child']//p")).isDisplayed());
	}

	@Entao("erro de confirmar senha obrigatorio")
	public void erroDeConfirmarSenhaObrigatorio() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='style__ContainerFieldInput-sc-s3e9ea-0 kOeYBn input__child']//p")).isDisplayed());
	}

	@Entao("aviso de senha diferente")
	public void avisoDeSenhaDiferente() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//div[@class='styles__Container-sc-8zteav-0 eaPGNe']//div[@class='styles__ContainerInformations-sc-8zteav-3 fQkeSa']//p")).isDisplayed());

	}

	@E("^usuario criado sem saldo em conta$")
	public void usuarioCriadoSemSaldoEmConta() throws Throwable {

	}

}

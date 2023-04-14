package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

public class LoginSteps {

	@Quando("eu informar o email {string}")
	public void euInformarOEmail(String usuario) {
		Na(LoginPage.class).InformarCampoUsuario(usuario);
	}

	@Quando("eu informar a senha {string}")
	public void euInformarASenha(String senha) {
		Na(LoginPage.class).InformarCampoSenha(senha);
	}

	@Quando("eu clicar no botao acessar")
	public void clicarNoBotaoLogin() throws InterruptedException {
		Thread.sleep(2000);
		Na(LoginPage.class).acionarBotaoLogin();
	}

	@Entao("^usuario logado$")
	public void usuarioLogado() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//div[@id='__next']//p[@id='textName']")).isDisplayed());
	}

	@Entao("^entao clicar em fechar$")
	public void entaoClicarEmFechar() throws Throwable {
		Na(LoginPage.class).acionarBotaoFechar();

	}

	@Entao("^login invalido$")
	public void loginInvalido() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//div[@class='pages__Background-sc-1ee1f2s-0 frRieb']//div[@class='login__buttons']//button[@class='style__ContainerButton-sc-1wsixal-0 otUnI button__child']")).isDisplayed());

	}

}
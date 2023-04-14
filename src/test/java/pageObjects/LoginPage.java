package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

	@FindBy(xpath = "//div[@class='pages__Background-sc-1ee1f2s-0 frRieb']//div[@class='card__login']//input[@name='email']")
	private WebElement campoUsuario;

	@FindBy(xpath = "//div[@class='pages__Background-sc-1ee1f2s-0 frRieb']//div[@class='card__login']//input[@name='password']")
	private WebElement campoSenha;

	@FindBy(xpath = "//div[@class='pages__Background-sc-1ee1f2s-0 frRieb']//div[@class='login__buttons']//button[@class='style__ContainerButton-sc-1wsixal-0 otUnI button__child']")
	private WebElement botaoLogin;

	@FindBy(id = "btnCloseModal")
	private WebElement botaoFechar;
	
	public void InformarCampoUsuario(String campoUsuarioLogin) {
		campoUsuario.sendKeys(campoUsuarioLogin);

	}

	public void InformarCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}

	public void acionarBotaoLogin() {
		botaoLogin.click();
	}

	public void acionarBotaoFechar() throws InterruptedException {
		Thread.sleep(2000);		
		botaoFechar.click();
	}

	public void realizarLogin(String usuario, String senha) {
		InformarCampoUsuario(usuario);
		InformarCampoSenha(senha);
		acionarBotaoLogin();

	}

}
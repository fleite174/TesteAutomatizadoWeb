package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastrarUsuarioPage {
	
	@FindBy(xpath = "//div[@class='pages__FormBackground-sc-1ee1f2s-2 jNpkvU']//button[@class='style__ContainerButton-sc-1wsixal-0 ihdmxA button__child']")
	public WebElement botaoRegistrar;
	
	@FindBy(xpath = "//div[@class='card__register']//form//div//input[@name='email']")
	public WebElement campoInformarEmail;
	
	@FindBy(xpath = "//div[@class='card__register']//input[@name='name']")
	public WebElement campoInformarNome;
	
	@FindBy(xpath = "//div[@class='card__register']//input[@name='password']")
	public WebElement campoInformarSenha;
	
	@FindBy(xpath = "//div[@class='card__register']//input[@name='passwordConfirmation']")
	public WebElement campoConfirmarSenha;
	
	@FindBy(xpath = "//div[@class='card__register']//label[@class='styles__Input-sc-1pngcbh-1 dTSgXK']")
	public WebElement botaoSwitchSaldo;
	
	@FindBy(xpath = "//div[@class='card__register']//button[@class='style__ContainerButton-sc-1wsixal-0 CMabB button__child']")
	public WebElement botaoConfirmarRegistro;
	
	@FindBy(xpath = "//p[@id='modalText']")
	public WebElement sucessoCadastro;
	
	@FindBy(id = "btnCloseModal")
	public WebElement confirmarCadastro;
	
	public void botaoRegistrar() {
		botaoRegistrar.click();
		
	}
	
	public void campoInformarEmail(String campoEmail) {
		campoInformarEmail.clear();
		campoInformarEmail.sendKeys(campoEmail);
		
	}
	
	public void campoInformarNome(String campoNome) {
		campoInformarNome.clear();
		campoInformarNome.sendKeys(campoNome);
		
	}
	
	public void campoInformarSenha(String campoSenha) {
		campoInformarSenha.clear();
		campoInformarSenha.sendKeys(campoSenha);
		
	}
	
	public void campoConfirmarSenha(String campoSenhaConfirmar) {
		campoConfirmarSenha.clear();
		campoConfirmarSenha.sendKeys(campoSenhaConfirmar);
		
	}
	
	public void botaoSwitch() {
		botaoSwitchSaldo.click();
		
	}
	
	public void botaoConfirmarRegistro() {
		botaoConfirmarRegistro.click();
		
	}
	
	public void confirmarCadastro() {		
		confirmarCadastro.click();
		
	}
	
	public void cadastrarUsuario(String campoEmail, String campoNome, String campoSenha, String campoSenhaConfirmar) {
		campoInformarEmail(campoEmail);
		campoInformarNome(campoNome);
		campoInformarSenha(campoSenha);
		campoConfirmarSenha(campoSenhaConfirmar);
				
	}

}
package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	
	@FindBy(id = "btn-PAGAMENTOS")
	public WebElement botaoPagamento;
	
	@FindBy(id = "btnCloseModal")
	public WebElement botaoFechar;
	
	@FindBy(id = "btn-SAQUE")
	public WebElement botaoSaque;
	
	@FindBy(id = "btnCloseModal")
	public WebElement botaoFecharSaque;
	
	@FindBy(id = "btn-EXTRATO")
	public WebElement botaoExtrato;
	
	@FindBy(id = "btnBack")
	public WebElement botaoVoltar;
	
	@FindBy(id = "btn-TRANSFERÊNCIA")
	public WebElement botaoTransferencia;
	
	@FindBy(xpath = "//div[@id='__next']//input[@type='accountNumber']")
	public WebElement campoConta;
	
	@FindBy(xpath = "//div[@id='__next']//input[@type='digit']")
	public WebElement campoDigito;
	
	@FindBy(xpath = "//div[@id='__next']//input[@type='transferValue']")
	public WebElement campoValorTransferencia;
	
	@FindBy(xpath = "//div[@id='__next']//input[@type='description']")
	public WebElement campoDescricao;
	
	@FindBy(xpath = "//div[@id='__next']//div[@class='transfer__ContainerForm-sc-1yjpf2r-8 gasnNO']//button")
	public WebElement botaoSubmit;		
	
	@FindBy(xpath = "//div[@id='__next']//div[@class='home__ContainerLink-sc-1auj767-2 cCGrzy']")
	public WebElement botaoSair;
	
	public static String conta;
	public static String digito;
	
	public void salvarNumero() throws InterruptedException{
		WebElement modalConta = driver.findElement(By.xpath("//p[@class='styles__Text-sc-8zteav-4 gpcLtj']"));
        Thread.sleep(2000);
        conta = modalConta.getText();
        conta = conta.replace("A conta ", "");
        conta = conta.replace(" foi criada com sucesso", "");
        String[] traco = new String[1];
        traco = conta.split("-");
        conta = traco[0];
        digito = traco[1];
	}

	
	public void botaoPagamento() {
		botaoPagamento.click();
	}
	
	public void botaoFechar() {
		botaoFechar.click();
	}
	
	public void botaoSaque() {
		botaoSaque.click();
	}
	
	public void botaoFecharSaque() {
		botaoFechar.click();
	}
	
	public void botaoExtrato() {
		botaoExtrato.click();
	}
	
	public void botaoVoltar() {
		botaoVoltar.click();
	}
	
	public void botaoTransferencia() {
		botaoTransferencia.click();
	}
	
	public void campoConta() {
		campoConta.sendKeys(conta);
	}
	
	public void campoDigito() {
		campoDigito.sendKeys(digito);
	}
	
	public void campoValorTransferencia(String campoValor) {
		campoValorTransferencia.sendKeys(campoValor);
	}
	
	public void campoDescricao(String campoDescricaoTransfer) {
		campoDescricao.sendKeys(campoDescricaoTransfer);
	}
	
	public void botaoSubmit() {
		botaoSubmit.click();
	}
	
	public void botaoSair() {
		botaoSair.click();
	}
	
	

}

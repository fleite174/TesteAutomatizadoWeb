package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;

public class FuncionalidadesSteps {

	@Quando("eu clicar no botao pagamento")
	public void euClicarNoBotaoPagamento() throws InterruptedException {
		Thread.sleep(2000);
		Na(BasePage.class).botaoPagamento();

	}

	@Entao("mensagem de reforma")
	public void mensagemDeEmReformar() throws InterruptedException {
		Thread.sleep(2000);
		Na(BasePage.class).botaoFechar();

	}

	@Quando("^eu cicar no botao saque$")
	public void euCicarNoBotaoSaque() throws Throwable {
		Thread.sleep(2000);
		Na(BasePage.class).botaoSaque();

	}

	@Quando("eu clicar em extrato")
	public void euClicarEmExtrato() throws InterruptedException {
		Thread.sleep(2000);
		Na(BasePage.class).botaoExtrato();

	}

	@Quando("verificar o saldo")
	public void verificarOSaldo() throws InterruptedException {
		Thread.sleep(2000);
		assertEquals("R$ 1.000,00", driver.findElement(By.id("textBalanceAvailable")).getText());

	}

	@Entao("acionar botao de home")
	public void acionarBotaoDeHome() {
		Na(BasePage.class).botaoVoltar();

	}
	
	@Quando("eu clicar no botao transferencia")
	public void euClicarNoBotaoTransferencia() {
		Na(BasePage.class).botaoTransferencia();

	}

	@Quando("informar o numero da conta1")
	public void informarONumeroDaConta() {
		Na(BasePage.class).campoConta();

	}

	@Quando("o digito da conta1")
	public void oDigitoDaConta() {
		Na(BasePage.class).campoDigito();

	}

	@Quando("o valor da transferencia {string}")
	public void oValorDaTransferencia(String campoValor) {
		Na(BasePage.class).campoValorTransferencia(campoValor);

	}

	@Quando("a descricao {string}")
	public void aDescricao(String campoDescricao) {
		Na(BasePage.class).campoDescricao(campoDescricao);

	}

	@Entao("transferencia realizada")
	public void transferenciaRealizada() {
		

	}

	@Quando("^eu clicar em sair$")
	public void euClicarEmSair() throws Throwable {
		Na(BasePage.class).botaoSair();
		
	}

	@E("^salvar numero$")
	public void salvarNumero() throws Throwable {
		Na(BasePage.class).salvarNumero();
		

	}

	@E("^clicar no botao transferencia$")
	public void clicarNoBotaoTransferencia() throws Throwable {
		Na(BasePage.class).botaoSubmit();
		
	}

	@Entao("^transferencia realizada com sucesso$")
	public void transferenciaRealizadaComSucesso() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//p[@id='modalText']")).isDisplayed());

	}

}

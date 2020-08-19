package stepdefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginStepFile {
	WebDriver driver;
	@Given("^User is on login page$")
	public void user_is_on_login_page()
	{
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://ui.cogmento.com/");
	}
	
	@When("^Login page title is displayed$")
	public void loginPageTitle()
	{
		String title=driver.getTitle();
		Assert.assertEquals("Cogmento CRM", title);
	}
	
	//Examples keyword
	/*
	 * @Then("^user enters \"(.*)\" and \"(.*)\"$") public void
	 * user_enters_uname_and_password(String userName,String password) {
	 * //driver.findElement(By.xpath(".//*[text()='SignUp']")).click();
	 * 
	 * WebElement uname=driver.findElement(By.name("email")); WebElement
	 * password1=driver.findElement(By.name("password")); uname.sendKeys(userName);
	 * password1.sendKeys(password); }
	 */
	
	//Using Data table
	
	/*
	 * @Then("^user enters username and password$") public void
	 * user_enters_uname_and_password(DataTable dt) {
	 * //driver.findElement(By.xpath(".//*[text()='SignUp']")).click();
	 * List<List<String>> tb=dt.raw(); WebElement
	 * uname=driver.findElement(By.name("email")); WebElement
	 * password1=driver.findElement(By.name("password"));
	 * uname.sendKeys(tb.get(0).get(0)); password1.sendKeys(tb.get(0).get(1)); }
	 */
	 
	// using maps 
	  @Then("^user enters username and password$")
	  public void user_enters_uname_and_password(DataTable dt) {
	  //driver.findElement(By.xpath(".//*[text()='SignUp']")).click();
	  for (Map<String,String> tb:dt.asMaps(String.class, String.class))
	  {
	  WebElement uname=driver.findElement(By.name("email")); WebElement
	  password1=driver.findElement(By.name("password"));
	  uname.sendKeys(tb.get("username")); password1.sendKeys(tb.get("password"));
	  driver.findElement(By.xpath("//div[contains(@class,'submit')]")).click();
	  }
	  }
	/*
	 * @Then("^user clicks on login button$") public void user_clicks_login_button()
	 * { driver.findElement(By.xpath("//div[contains(@class,'submit')]")).click(); }
	 */
	
	@Then("^user is navigated to HomePage$")
	public void user_is_on_homePage() throws InterruptedException
	{
		Thread.sleep(5000);
		WebElement homeIcon=driver.findElement(By.xpath("//div[@id='main-nav']/a[1]/span"));
		String text=homeIcon.getText();
		Assert.assertEquals( "Home", text);
		
	}
	@Then("^browser is closed$")
	public void browser_is_closed()
	{
		driver.quit();
	}

}

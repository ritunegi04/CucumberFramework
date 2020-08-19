package Runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/features/Login.feature",
		glue="stepdefinitions",
		format= {"pretty","html:test-output"},
		dryRun=false,
		monochrome=true,
		strict=false
		)

public class TestRunner {
	 
	

}

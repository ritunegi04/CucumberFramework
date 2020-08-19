$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples"
    },
    {
      "line": 4,
      "value": "#Scenario: FreeCRM login scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User is on login page"
    },
    {
      "line": 7,
      "value": "#When Login page title is displayed"
    },
    {
      "line": 8,
      "value": "#Then user enters \"ritu.negi04@gmail.com\" and \"Passutir@20\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#And user is navigated to HomePage"
    },
    {
      "line": 11,
      "value": "#And browser is closed"
    },
    {
      "line": 13,
      "value": "#With Examples and Scenario Outline"
    },
    {
      "line": 14,
      "value": "#Scenario Outline: FreeCRM login scenario"
    },
    {
      "line": 16,
      "value": "#Given User is on login page"
    },
    {
      "line": 17,
      "value": "#When Login page title is displayed"
    },
    {
      "line": 18,
      "value": "#Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 19,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 20,
      "value": "#And user is navigated to HomePage"
    },
    {
      "line": 21,
      "value": "#And browser is closed"
    },
    {
      "line": 23,
      "value": "#Examples:"
    },
    {
      "line": 24,
      "value": "#\t| username | password |"
    },
    {
      "line": 25,
      "value": "#\t| ritu.negi04@gmail.com | Passutir@20 |"
    },
    {
      "line": 26,
      "value": "#\t| test@gmail.com | test |"
    },
    {
      "line": 28,
      "value": "#Scenario: FreeCRM login scenario"
    },
    {
      "line": 30,
      "value": "#Given User is on login page"
    },
    {
      "line": 31,
      "value": "#When Login page title is displayed"
    },
    {
      "line": 32,
      "value": "#Then user enters username and password"
    },
    {
      "line": 34,
      "value": "##| ritu.negi04@gmail.com | Passutir@20 |"
    },
    {
      "line": 36,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 37,
      "value": "#And user is navigated to HomePage"
    },
    {
      "line": 38,
      "value": "#And browser is closed"
    },
    {
      "line": 40,
      "value": "#using maps"
    }
  ],
  "line": 41,
  "name": "FreeCRM login scenario",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Login page title is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 46
    },
    {
      "cells": [
        "ritu.negi04@gmail.com",
        "Passutir@20"
      ],
      "line": 47
    },
    {
      "cells": [
        "tesuser.test@gmail.com",
        "testuser"
      ],
      "line": 48
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#Then user clicks on login button"
    }
  ],
  "line": 51,
  "name": "user is navigated to HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "browser is closed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepFile.user_is_on_login_page()"
});
formatter.result({
  "duration": 13875380100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepFile.loginPageTitle()"
});
formatter.result({
  "duration": 7786300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepFile.user_enters_uname_and_password(DataTable)"
});
formatter.result({
  "duration": 550887800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepFile.user_is_on_homePage()"
});
formatter.result({
  "duration": 5032377100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027main-nav\u0027]/a[1]/span\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GDC-RITUN-LPT\u0027, ip: \u0027192.168.1.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\RITU~1.NEG\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:57927}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aae7b19bd67e3fec9d0061bcd461e97f\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027main-nav\u0027]/a[1]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.LoginStepFile.user_is_on_homePage(LoginStepFile.java:81)\r\n\tat ✽.And user is navigated to HomePage(src/main/java/features/Login.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepFile.browser_is_closed()"
});
formatter.result({
  "status": "skipped"
});
});
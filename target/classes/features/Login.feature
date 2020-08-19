Feature: FreeCRM login feature

#Without Examples
#Scenario: FreeCRM login scenario
#
#Given User is on login page
#When Login page title is displayed
#Then user enters "ritu.negi04@gmail.com" and "Passutir@20"
#Then user clicks on login button
#And user is navigated to HomePage
#And browser is closed

#With Examples and Scenario Outline
#Scenario Outline: FreeCRM login scenario

#Given User is on login page
#When Login page title is displayed
#Then user enters "<username>" and "<password>"
#Then user clicks on login button
#And user is navigated to HomePage
#And browser is closed

#Examples:
#	| username | password |
#	| ritu.negi04@gmail.com | Passutir@20 |
#	| test@gmail.com | test |

#Scenario: FreeCRM login scenario

#Given User is on login page
#When Login page title is displayed
#Then user enters username and password
 
 ##| ritu.negi04@gmail.com | Passutir@20 |

#Then user clicks on login button
#And user is navigated to HomePage
#And browser is closed

#using maps
Scenario: FreeCRM login scenario

Given User is on login page
When Login page title is displayed
Then user enters username and password
 	| username              | password |
 	| ritu.negi04@gmail.com | Passutir@20 |
 	| tesuser.test@gmail.com| testuser |

#Then user clicks on login button
And user is navigated to HomePage
And browser is closed
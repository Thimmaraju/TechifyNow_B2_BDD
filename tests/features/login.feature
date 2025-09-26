Feature: Verify Login functionality


Scenario: Verify Login With Valid Credentials

   Given User launch the Application 
   When User Enter username as "Admin" and Password As "admin123"
   And User clicks on Login Button 
   Then User should be Navigated to Dashbaord Page 

Scenario: Verify Login With Valid Username and Invalid password 

   Given User launch the Application 
   When User Enter username as "Admin" and Password As "dfgvfd"
   And User clicks on Login Button 
   Then User Should login error Message 

Scenario: Verify Login With InValid Username and valid password 

   Given User launch the Application 
   When User Enter username as "vfdv" and Password As "admin123"
   And User clicks on Login Button 
   Then User Should login error Message 

Scenario: Verify Login With InValid Username and Invalid password 

   Given User launch the Application 
   When User Enter username as "vfdv" and Password As "fvgfdg"
   And User clicks on Login Button 
   Then User Should login error Message 
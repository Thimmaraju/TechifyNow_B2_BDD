Feature: Verify Add Employee functionalities

   Feature Description

   Background: Navigate to Add Employee Page

      Given User launch the Application
      When User Enter username as "Admin" and Password As "admin123"
      And User clicks on Login Button
      Then User should be Navigated to Dashbaord Page
      When User clicks on PIM Menu
      And User clicks on Add Employee SubMenu

   Scenario Outline: Verify Add Employee with Mandatory Details
      And User Enter firstname as "<firstname>" and Lastname as "<lastname>"
      And User clicks Save button
      Then User Employee should be created
      Examples:
         | firstname | lastname |
         | Jagdish   | Rao      |
         # | Raju      | G        |
         # | Praveen   | Abc      |


   Scenario: Verify Error Message for Mandatory Fields
      And User clicks Save button
      # Then User get Error Message for Mandatory Fields
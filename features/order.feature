Feature: Order a gizmo
  As an online shopper
  I want to place an order for a gizmo
  So that I can purchase it

  Scenario: Adequate inventory exists to fulfill order
    Given A gizmo costs 2.99
    And I have added 3 gizmos to my order
    And There are 5 gizmos in stock
    When The order is placed
    Then The order should be fulfilled
    And The order total should be 8.97
    And There should now be 2 gizmos in stock
    And My account should be charged 8.97

  Scenario: Inadequate inventory exists to fulfill order
    Given I have added 5 gizmos to my order
    And There are 3 gizmos in stock
    When The order is placed
    Then The order should not be fulfilled
    And The quantity of gizmos should be adjusted to 3
    And 2 gizmos should be backordered

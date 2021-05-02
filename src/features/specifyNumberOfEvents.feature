Feature: Specify number of events

  Scenario: When user hasn't change the number, 32 is the default number
    Given number 32 is the default number of events to be shown
    When user opens an app
    Then user sees number of events input is 32

  Scenario: User can change the number of events they want to see
    Given the main page is open
    When user changes number on the input, then search
    Then the number of events are shown


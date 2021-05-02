Feature: Show/hide an Event's details

  Scenario: An Event element collapsed by default
    Given the user opens event list
    When Event details is collapsed
    Then user can find a button which shows event details

  Scenario: User can expand an event to see its details
    Given the event details is hidden
    When user clicks show event button
    Then user should see a details of the event

  Scenario: User can collapse an event to hide its details
    Given the event details is shown
    When the user clicks hide event button
    Then event details are hidden
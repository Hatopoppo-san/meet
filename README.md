# meet
This meet app uses a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.



https://user-images.githubusercontent.com/73891874/124612047-4c240880-de72-11eb-81f4-8d1647e1036a.mov

 ## Quick Start 🚀
   Install dependencies
   ```
    npm install
   ```
   Run
   ```
    npm run start
   ```
  Deploy
  ```
  npm run deploy
  ```
  
## Features
  * Filter events by city name
  * Users can show/hide event details
  * Users can specify the number of events they see displayed
  * Allows users to use the app when offline
  * Add an app shortcut to the homescreen
  * View a chart showing the number of upcoming events by city
    Technologies
  * React application created with React framework
  * Google Calendar API and OAuth2 authentication flow
  * AWS Lambda serverless functions
  * Recharts for data visualisation

# My user story and Gherkin(Given-When-Then) syntax 

   * Feature1: Filter events by city
     * Scenario1: 
       When user doesn’t search specific city, show upcoming all events.
       * User story: As a user, I would like to see all events so I can see any events all locations
       * Given: 
         The list of events has been loaded.
       * When:
         User doesn’t search specific location.
       * Then:
         All events are shown.

     * Scenario2:
        User should see a list of suggestions when they search for a city.
       * User story: As  a user, I would like to see a list of suggestions when I search the city, so I can see recommendations on the area.
       * Given:
          The list of events has been loaded
       * When: 
          User search a specific city using text box
       * Then:
          Result shows list of suggestions of city that matched what they typed

     * Scenario3:
        User can select a city from the suggested list
       * User story: As a user, I would like to select a city from the suggested list so I can see all events on the city
       * Given:
          User searched a specific city and suggested list is shown
       * When:
          User clicks a city button
       * Then:
          List shows events on that location

   * Feature 2: Show/hide an event’s details
      * Scenario1:
         An event element is collapsed by default
        * User event: As a user, I would my event list to be neat and show a brief information so I can see many events at once.
        * Given:
          Events list is shown
        * When:
          User opens an app / Search specific city
        * Then:
          Events details  are kept hidden by default

      * Scenario2:
          User can expand an event to see its details
          User story: As a user, I would like to see event details when I want to, so my page is organised.
        * Given:
          The list of events has been loaded, or user searches specific location
        * When:
          User clicks “details” button
        * Then:
          Event details is shown

      * Scenario3:
        User can collapse an even to hide its details.
        * User story: As user, I would like to hide details when it’s not necessary anymore, so I can keep my page organised.
        * Given:
          Event details is shown
        * When:
          User clicks “hide” button
        * Then:
          Event details becomes hidden.

   * Feature 3 Specify number of events
     * Scenario1:
        When user hasn’t specified a number, 32 is the default
        * Given:
          User opens an app 
        * When: 
          User doesn’t choose how many events are shown at once
        * Then:
          Total number of shown events is 32

   * Scenario2:
      User can change the number of events they want to see.
      * User story: As a user, I would like to choose how many events are shown at once, so I can keep my page customised as I wish
      * Given:
        The list of events has been loaded
      * When:
        User put specific numbers to be shown on the page or chooses number.
      * Then:
        Then number of events which user chose are shown.

  * Feature4: Use the app when offline
      * Scenario1:
          Show cached data when there’s no internet connection
        * User story: As a user, I would like to check events even though my internet connection is lost so I can check events when it’s out of service.
        * Given:
          No internet connection
        * When:
          User opens the app
        * Then:
          App shows cached data

      * Scenario2: 
         Show error when user changes the settings
        * User story: As a user: I would like to know if I can change my settings even though my internet connection is lost so I can get if it’s successful or not
        * Given:
          No internet connection
        * When:
          User tries to change the settings
        * Then:
          Show error

  * Feature 5: Data Visualization
    * Scenario1: 
      Show a chart with the number of upcoming events in each city
      * User story: As a user, I would like to know how many events take place each day so I know total amount of events per day.
      * Given:
        The list of events is loaded/ user searched a specific city
      * When:
        User clicks “show details” button
      * Then:
        A correspond	chart is shown.


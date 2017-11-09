# Restaurant Search
This is a single page, full stack application demonstrating the use of React, Express, Node, and MongoDB services (MERN).

A user can search through a database of over 28k restaurants

## Initializing and Running
1. Clone the repository `git clone http://www.github.com/sshilal1/restaurantsearch.git`
2. Open 2 consoles, 1 to the `service` folder, another to the `client-app` folder
3. Install dependencies in both consoles `npm install`
4. Start the apps in both consoles `npm start`

## Design Notes
* I chose to not use flux because...
* The 2 separate pages (**main** and **search results**) are managed by a *search* boolean contained in the Main state. I used the *Thomas* logo as a means of returning to the main screen.
* The address is populated with the *boro* instead of the *city* because the database does not return the city
* The ‘Cost’ indicator of the restaurant has been hardcoded into the design, as this is something the database does not contain. Down the road, this could be accomplished by interfacing with the Yelp public API. The **Price** sort button now commits no actions
* I found the **Cabin** Google Font and it was as close to the true font as I could find, and looked nicer than Arial

## Extras
* I have added a ‘Z’ image I created in Photoshop to associate with restaurants that have a Z letter grade

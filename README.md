# Restaurant Search
This is a single page, full stack application that helps a user search through a database of over 28k restaurants in New York City.

## Initializing and Running
1. Clone the repository `git clone http://www.github.com/sshilal1/restaurantsearch.git`
2. Open 2 consoles, 1 to the `service` folder, another to the `client-app` folder
3. Install dependencies in both consoles `npm install`
4. Start the apps in both consoles `npm start`

## Design Features
#### MERN & REST
* This project was designed with **MongoDB, Express, React, Node**, aka as the MERN stack. This is common set of tools for deploying powerful, versatile web applications. The front and back end of the project communicate with eachother over a simple REST protocol involving GETs and POSTs.

#### Searching
* The service handles searching through the Mongo Database with the help of *Mongoose* and the provided Restaurant Schema. The queries take place via Mongoose's native `.find()` function, with the help of `.limit()` and `.skip()`

#### Paging
* Paging is handled on both the front and back end for this project. When a user queries the database, the server first returns the first 12 entries (page size) for a quick response time. The server then searches the database again for the full result count. Then *React-Pagination* handles calculating how many pages there should be. A user can then select a page and the server queries the database again using a *skip/limit* query.

## Design Notes
* The address is populated with the *boro* instead of the *city* because the database does not return the city
* This app requires access to a MongoDB, which I have saved in a *dburl* file ignored by git.
* The 2 separate pages (**main** and **search results**) are managed by a *search* boolean contained in the Main state. I used the *Thomas* logo as a means of returning to the main screen.
* The ‘Cost’ indicator of the restaurant has been hardcoded into the design, as this is something the database does not contain. Down the road, this could be accomplished by interfacing with the Yelp public API. The **Price** sort button now commits no actions
* I found the **Cabin** Google Font and it was as close to the true font as I could find, and looked nicer than Arial
* **Sorting**
	* Currently, sorting by grade only sorts the current 12 restaurants on the page. I was not able to figure out how to sort ALL results returned by the MongoDB query.
	* Sorting by price is disabled, as stated above restaurant 'Cost' is not functional yet.
* **State management**
	* Unfortunately, I decided too late to look into a more secure state management with React such as Flux.
	* This project currently uses a combination of *passing props* and *setStates* within components to handle state changes. One of the major benefits of Flux is that it allows the user to commits state-altering actions directly from any component, as oppossed to my current setup where I have to pass functions as props from the parent through multiple layers of components.
	* This would be the first thing to change down the road, as it makes any project scalable and easier to add new components/features to.

## Extras
* I have added a ‘Z’ image I created in Photoshop to associate with restaurants that have a Z letter grade
* I added a *No Results* page to show the user on an empty search result
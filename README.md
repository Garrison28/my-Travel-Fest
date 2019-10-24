ArtistGO

Technologies Used: SQL, Sequelize, Node.js, Express

For this project, I wanted to make an app that let you search for an artist, choose said artist and then display that artist information in cluding and end tour date, name and the amount of interest you had in the artist. I started off by planning out routes and what there relations would with the data base they were associated with. Then I went ahead and planned out what ionformation the data bases would contain. Finally i made my user stories.
<link href="/READMEassets/searchroutes.jpg">
<link href="/READMEassets/favesroutes.jpg">

As a user, I want to be able to search for any artist and have the artist information displayed.

Then, I want to be able to save the artist to a my artists page.

After that, I want to be able to update how much my current interest for that artist is.

As stretch goals, i want be able to display concert/festival info of the queried artist and choose specific concert/festivals im interested in.

And Finally, I want to be able to make a roadtrip out of the selected concert/festival info.

Day 1: I planned all my data bases, routes and views that would display the information. It was relativily easy to plan out everything and make corellations between data bases and routes. 
I knew I wanted an artists data base to save all the users artists to, I also knew I would have to have a joined data bases of users and artists along with a possible concerts and festivals data base to store relvent info in.

Day 2-4: I started to psudocode my routes, using verbs to direct where I wanted my routes to go and how they would connect.

Day 5: Ran into problems with my routing and understanding how the routes related to eachother, especially in using GET and POST and then displaying in ejs. my GET route for grabbing the api then displaying the requested information took the longest to set up, making sure my query, data base and url all lined up so that I could grab that information and the store it in my artists data base.

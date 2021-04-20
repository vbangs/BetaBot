# BetaBot

**Author:** Veronica Bangs


## Project Summary
BetaBot is an app that allows users to track their bouldering activities and to gather insight into their progress as they expand their bouldering skillsets.  Users may log data that include the name, grade, location, date of ascent, rock/wall features as well as techniques used to climb a given boulder problem.  The aim of BetaBot is to guide boulderers along their skill-building journeys by emphasizing technical progress over V-Scale leveling-up.         
</br>
![Screen Shot 2021-04-20 at 6 22 03 PM](https://user-images.githubusercontent.com/77699407/115471411-f0989600-a205-11eb-9d18-056d382a83d6.png)<br></br>

![Screen Shot 2021-04-20 at 6 22 11 PM](https://user-images.githubusercontent.com/77699407/115471490-132aaf00-a206-11eb-90db-042294231630.png)<br></br>

![Screen Shot 2021-04-20 at 6 29 44 PM](https://user-images.githubusercontent.com/77699407/115471710-6997ed80-a206-11eb-95a1-2feaf4acfd2c.png)<br></br>

![Screen Shot 2021-04-20 at 6 22 40 PM](https://user-images.githubusercontent.com/77699407/115471531-20479e00-a206-11eb-9c10-f20763f27371.png)<br></br>

![Screen Shot 2021-04-20 at 6 23 22 PM](https://user-images.githubusercontent.com/77699407/115471557-2b023300-a206-11eb-83f6-d5ee9d3a5c65.png)<br></br>

![Screen Shot 2021-04-20 at 6 23 48 PM](https://user-images.githubusercontent.com/77699407/115471581-348b9b00-a206-11eb-9c50-08ee4433e131.png)<br></br>

![Screen Shot 2021-04-20 at 6 24 06 PM](https://user-images.githubusercontent.com/77699407/115471611-3f463000-a206-11eb-9cf9-3ba9070bb2d2.png)<br></br>





## Technology Used
HTML </br>
CSS </br>
JavaScript </br>
Node.js </br>
EJS </br>
Express </br>
Mongoose </br>
MongoDB </br>
Bulma <br>
</br>

## Models

User:
 - username => {type: String, unique: true, required: true}
 - password => {type: String, required: true}
 - boulders => [Boulder]

 Boulder:
 - url => String
 - name => {type: String, required: true}
 - grade => {type: String, required: true}
 - location => String
 - date => String
 - slab => Boolean
 - vertical => Boolean
 - overhung => Boolean
 - jugs => Boolean
 - crimps => Boolean
 - slopers => Boolean
 - pinches => Boolean
 - pockets => Boolean
 - volumes => Boolean
 - cracks => Boolean
 - aretes => Boolean
 - edging => Boolean
 - smearing => Boolean
 - flagging => Boolean
 - stemming => Boolean
 - bathanging => Boolean
 - liebacking => Boolean
 - mantling => Boolean
 - dropkneeing => Boolean
 - sidepulling => Boolean
 - palming => Boolean
 - dynoing => Boolean
 - gastoning => Boolean
 - heelhooking => Boolean
 - toehooking => Boolean
 - lockingoff => Boolean

</br>

## Route Map
</br>

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/climbs" | List All Boulder Problems (/climbs.ejs) |
|GET| "/climbs/:id | Display Single Boulder Problem (/show.ejs) |
|GET| "/climbs/new | Render Form for New Boulder Problem (/new.ejs) |
|POST| "/new" | Uses Form Submission to Create New Boulder Problem |
|GET| "/climbs/:id/edit" | Render Form to Edit Boulder Problem (/edit.ejs) |
|PUT| "/climbs/:id" | Uses Form Submission to Edit Boulder Problem |
|DELETE| "/climbs/:id" | Delete a Particular Boulder Problem |


## Future Plans
- Add more responsive design

- Simplify the Boulder schema so that rock faces, hold types and techniques are expressed as three properties

- Develop the Dashboard page so that it displays user stats that include bouldering trends and recommended areas/means of improvement
<br></br>


**Link to Live Site:** https://betabotv0.herokuapp.com/
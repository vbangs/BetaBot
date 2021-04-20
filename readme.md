# BetaBot

- **Author:** Veronica Bangs
- **Link to Live Site:** https://betabotv0.herokuapp.com/



## Project Summary
BetaBot is an app that allows users to track their bouldering activities and to gather insight into their progress as they expand their bouldering skillsets.  Users may log data that include the name, grade, location, date of ascent, rock/wall features as well as techniques used to climb a given boulder problem.  The aim of BetaBot is to guide boulderers along their skill-building journeys by emphasizing technical progress over V-Scale leveling-up.         
</br>


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
- Simplify the Boulder schema so that rock faces, hold types and techniques are expressed as three properties

- Develop the Dashboard page so that it displays user stats that include bouldering trends and recommended areas/means of improvement

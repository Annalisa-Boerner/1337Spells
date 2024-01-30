# Welcome, Level 1 Wizard!

## Populate your spellbook with ease on 1337 Spells.

When I was a new D&D player, I needed an easy, breezy spellbook to get my Wizard character started. Sometimes less is more in a rules-heavy game like D&D 5e. So, during the Grace Hopper Program at Fullstack Academy and since graduation, I have embarked on creating a clear and attractive spellbook for the brand-new Wizard in all of us.

*Update: the frontend is deployed! Does it do anything without a functional backend and db? No! But it does appear beautifully: https://leet-spells-95b5i.ondigitalocean.app/*

Learning objectives for this project:
+ Designing a full stack site from scratch, working from a concept through schema design through implementation
  + Learning how to manage my scope (oh baby, I started WAY too big and pared down many times to the MVP you see today)
+ Working with the [D&D 5e API](https://www.dnd5eapi.co/) to pull in spells and lazy load deets
+ Completing an authorization flow and using local storage to maintain login during refreshes
+ Creating the clean flow that one expects from a site instead of using janky student workarounds
+ I'm not a designer (IANAD?), but I want it to look nice!
+ Continuing to organize myself via  my [Jira Kanban board](https://adventure-party.atlassian.net/jira/software/projects/APS/boards/2)
+ Finding a deployment solution at a reasonable price that will have a 24/7 server so that my site doesn't look broken bc the server went to sleep
  
Things I didn't mean to learn but did:
+ jQuery basics (on CodePen like, "what is going on in this gorgeous thing I'm looking at")
+ To add "React Component" to your google search if you're working in react ([oh baby, this collapse](https://github.com/glennflanagan/react-collapsible?tab=readme-ov-file#readme))
+ Leave lots of time and headspace for deployment! Holy guacamole, what a process (ongoing as of this writing)
+ How to write a much better support ticket to the lovely deployment support team

Upon landing at the site, the user can either register a new account or log in (flow secured with BCrypt). 1337 Spells then redirects to [Character]'s Spellbook (you have to register with a character name in addition to a username - this is D&D, after all, and each user could ostensibly register a variety of characters for a variety of games). 

Take a look at the available spells and cantrips (thanks, D&D 5e API!), and choose which you'd like your character to learn using the "Add" button. (For the uninitiated, a cantrip is the lowest-level type of spell in the game - they're useful but inconsequential tricks that even the newest wizard can pull off without expending any of their precious magical energy.) I chose to use a Details button that calls the individual spell's API endpoint rather than fully loading all of the spell info on initial load in order to improve performance on load.

Your spellbook informs you that you can add up to six spells and three cantrips, and will dyamically update to "Spellbook full" once your list is complete.  Frankly, I was excited to save myself from the endless cycle of googling "level 1 wizard how many spells how many cantrips 5e", and to do that for my users, as well.

---
## Installation

+ Fork this repository
+ Clone down your forked repository
+ Install dependencies using "npm i"
+ Create a PostgreSQL database for user info: createdb 1337Spells
+ Create your own secrets file to satisfy bcrypt requirements:
  + Create a secrets.js file at the server level
  + Copy and paste the following, and add your own secrets:
    ```
    const JWT_SECRET = "<your secret here>";
    const COOKIE_SECRET = "<another secret here>";
    
    module.exports = { JWT_SECRET, COOKIE_SECRET };
    ```
+ Run a localhost port on the back end:
  + Start the back end with command "npm run start"
+ Run a localhost port on the front end:
  + CD into client, then start the front end with command "npm run dev"
  + View on localhost:5173

  ---
## Future Plans

Next steps for 1337 spells include the following:

- Add character image upload and display
- Add username/password requirements
- Design, redirect to, and create a mobile version
  

# Welcome, Level 1 Wizard!

## Populate your spellbook with ease on 1337 Spells.

When I was a new D&D player, I needed an easy, breezy spellbook to get my Wizard character started. Sometimes less is more in a rules-heavy game like D&D 5e. So, during the Grace Hopper Program at Fullstack Academy and since graduation, I have embarked on creating a clear and attractive spellbook for the brand-new Wizard in all of us.

Learning objectives for this project:
+ Designing a full stack site from scratch, working from a concept through schema design through implementation
  + Learning how to manage my scope (oh baby, I started WAY too big and pared down many times to the MVP you see today)
+ Working with the [D&D 5e API](https://www.dnd5eapi.co/) to pull in spells and lazy load deets
+ Completing an authorization flow and using local storage to maintain login during refreshes
+ Creating the clean flow that one expects from a site instead of using janky student workarounds
+ I'm not a designer (IANAD?), but I want it to look nice! Work in progress

Things I didn't mean to learn but did:
+ jQuery basics (on CodePen like, "what is going on in this gorgeous thing I'm looking at")
+ To add "React Component" to your google search if you're working in react ([oh baby, this collapse](https://github.com/glennflanagan/react-collapsible?tab=readme-ov-file#readme))

Upon landing at the site, the user can either register a new account or log in (flow secured with BCrypt). 1337 Spells then redirects to [Character]'s Spellbook (you have to register with a character name in addition to a username - this is D&D, after all, and each user could ostensibly register a variety of characters for a variety of games). 

Take a look at the available spells and cantrips, and choose which you'd like your character to learn using the "Add to Spellbook" button. (For the uninitiated, a cantrip is the lowest-level type of spell in the game - they're useful but inconsequential tricks that even the newest wizard can pull off without expending any of their precious magical energy.)

Your spellbook informs you that you can add up to six spells and three cantrips, and will dyamically update to "Spellbook full" once your list is complete.  Frankly, I was excited to save myself from the endless cycle of googling "level 1 wizard how many spells how many cantrips 5e", and to do that for my users, as well.

The Browse Spells link navigates to DND Beyond, where the spells are pre-filtered to include the ones that are avaiable to you. Soon, the site will be conntected to the [D&D 5e API](https://www.dnd5eapi.co/), and you'll be able to do all of your browsing internally.

---
## Installation

+ Fork this repository
+ Clone down your forked repository
+ Install dependencies using "npm i"
+ Create a PostgreSQL database for seed data: createdb 1337Spells
+ Run a localhost port on the back end:
  + CD into server, then run "npm run seed"
  + Start the back end with command "npm run start"
+ Run a localhost port on the front end:
  + CD into client, then start with command "npm run dev"
  + View on localhost:5173

  ---
## Future Plans

Next steps for 1337 spells include the following:

- Connect to the D&D 5e API to import spell and cantrip names
- Implement lazy loading of full spell/cantrip information using a detail button that calls the relevant endpoint
- Implement an attractive table with scroll to house all those darned spells and cantrips
- Create a mobile version

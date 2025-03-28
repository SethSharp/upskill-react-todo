# CodingLabs Upskill Challenge: React todo

This app is focused on learning some new skills, the skills learnt here will be:
1. React
2. Native-PHP

## React
I have basically no experience (but some knowledge) of React, considering how popular it is, it will be good to have it 
as a skill.

## Native-PHP
This is a relatively new software, allowing you to run your laravel (php) apps locally as a electron (desktop) app.

# Development
Development setup is just like a regular laravel app, won't go too much into detail. To run the app natively you will
need to do this:
1. `php artisan native:serve` and
2. `npm run dev`
You still need to run the vite server for hot reloading

That is a basic overview, I'm gonna get to coding...

# Summary
Things started out well with getting the application working natively. Then found at that you need to sign your apps,
with macos (which is what we use) requires a apple developer account - which means money. I kind of knew about this
from prior experience in app development but didn't think it was needed here.

Continued on working locally in the native application and started learning React. Started a little slow, but I guess
that's expected when you aren't watching a step-by-step tutorial. Managed to figure it out pretty quick and understand the basics.

Implemented a basic drag 'n' drop system to mark your items as complete / in-complete and added a pretty basic
CRUD system.

Key points from me:
1. `useState` is the equivalent of a ref in vue
2. The development feels a more connected? Vue is pretty connected but react basically puts everything together (js and html)
3. The syntax is fun with passing props around (via ={})
4. Make sure to connect to herd otherwise changes in Laravel wouldn't reflect in the application

Troubles:
1. Found that the sqlite db / connection was a bit off and wasn't always showing the data that I expected to be in it.
2. Couldn't import enums from `index.d.ts` - just hardcoded them for now.
# Welcome to Me - A personal website

Check it out at: https://boiling-woodland-75372.herokuapp.com

The best part about creating a basic personal website is the fruitful plethora of resources available to you on the web! I decided to use Bootstrap (which has a lot of styling and shared components you can use), as well as node/ejs partials (templates so that you don't have to repeat a lot of code on your pages), and a few other random things to help me get started. I always find that the toughest part about a website like this is coming up with reasonable content and then tackling it piece by piece. It won't look like amazing at first, so give yourself time to learn your way around the code before beautifying!!

Feel free to ask me questions as you go or just poke around and see what you like. Here are some notable things:

## Bootstrap Nav etc
If you're going to use Bootstrap, don't forget to add the script tag in your `<head>`, or the styles won't come in. Also, add it before the reference to your own css file (lol, made that mistake and was furious for a while. It happens). The [bootstrap nav](http://getbootstrap.com/components/#glyphicons) is easy to use and looks great.

## Node Routing / EJS Templates
[Here](https://scotch.io/tutorials/use-ejs-to-template-your-node-application) is a tutorial I found helpful for ejs partials/templates to help with reusable code. And [node routing](http://expressjs.com/en/guide/routing.html) is how I switch between pages when clicking on the navigation tabs. Don't forget to restart your server whenever you make any changes to the `index.js` server file, else nothing you do will be picked up when you're running locally (also made that mistake for a while. I literally get paid to do this and I forget the simple stuff all the time. Never fear, you are a queen, I am a queen, and we can all be good at everything we set our hearts and minds to).

## Other helpful things
If you're looking for some boss fonts, check out [Google Fonts](https://www.google.com/fonts#), where you can browse around for some free ones and then just insert the script tag in your `<head>` of the ones that you like. If you're looking for some sweet colors to add to your website, [this](http://www.rapidtables.com/web/color/RGB_Color.htm) is a nice way to figure out the rgb and hex values. Finally, here is another icon service. Bootstrap provides a bunch of icons with glyphicons, but all my sweet social icons came from [FontAwesome](http://fortawesome.github.io/Font-Awesome/get-started/), which is a super easy to use and free service

## Git Commit
When you make some changes, remember to commit and push them up to master. Once you want to see the good stuff on heroku, do `git push heroku master` and then `heroku open` WOW EASY.

Good luck, ask for help, and google away!

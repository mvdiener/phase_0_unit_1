#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
    The elements tab lets you edit your page's html on the left, your page's css on the right, but only temporarily. Using the sources tab allows you to make and save changes right from your browser! (This is so cool)
  * Javascript Debugging
    The console tab will output errors, if any exist. You can then edit your page on the source tab to try and fix these errors.
  * Performance Optimization
    There is a chrome plugin called PageSpeed which helps with performance. It analyzes your page and gives suggestions on what you could improve. You can also use the network tab to see how quickly different aspects of your page load. This will show you file size, the speed at which the file downloaded, as well as the time it took to request the file itself.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  ctrl+shift+i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    The background is 0b0f11 which appears to be a blackish-blue background.
  * Tweak the background color to white.
    Wooo bright!
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
    Took a screenshot and stuck it in my /images folder in my Git repo.
    http://mvdiener.github.io/unit1_projects/images/Edited.png

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  This text is part of an image, and can't be changed unless you edit the picture itself.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
    The largest image is 316kb, and is part of the images that scroll through under the featured events section of the page.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    Open the dev tools and go to the network tab. Hit shift+f5 to refresh the page without using cached images. You can then sort by the size column. The link to the image is on the left: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  The easiest thing to do would be to reduce image size. According to the PageSpeed plugin, you could reduce overall image sizes by 39% and save 885kb of data. 
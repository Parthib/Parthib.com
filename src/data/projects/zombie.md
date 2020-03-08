<img src="../zcdProjectIcon.png" alt="Zombie project icon" id="icon"/>

## Zombie Castle Defense
Zombie Castle Defense is a small game I’ve developed in my free time starting my senior year of high school (2015). I finally put it on the Play Store in January 2019 and now it was over 1000+ downloads! It doesn’t have too good of a rating because the game is a bit simplistic and buggy, but if you want to check it out, [click here](https://play.google.com/store/apps/details?id=com.ps.castledefense&hl=en_US).

It started as a project to create a simple physics engine. I just wanted to apply some of the Java I learned in high school to create an Android app. After creating a simple app where an object would fall under the influence of gravity and respond to touch, I thought “why not make a game?” At the time, no game similar to “[Defend Your Castle](http://www.xgenstudios.com/play/castle)” existed for Android, so I decided to create something similar.

I soon realized I needed to draw some assets in order to make the raw physics engine look anything resembling game. I present to you my first “zombie”:

![First Zombie](../stickman.png)

Initially I had these static images slide across the screen. Pretty intimidating, but I knew I could do better. I decided creating an animation for the zombies could be a huge improvement.

In order to do this, I used something called spritesheets. Essentially, I would have several slightly modified images in one picture like this:

<img src="../originalSpritesheet.png" alt="First Spritesheet" id="medImage"/>

If you quickly iterate through each image, you end up with an animation! Now instead of static images, I had walking stick figures attacking my castle:

![First Zombie animation](../firstZombieAnimation.gif)

However, I also needed the zombies to punch the castle, get back up from short falls, and die from high falls. Here are the final animations I had for my zombies:

<div id="sideBySide">
  <img src="../zombieWalking.gif" alt="Zombie Walking" id="side"/>
  <img src="../zombieKnocking.gif" alt="Zombie Knocking" id="side"/>
  <img src="../zombieGetUp.gif" alt="Zombie Getting Up" id="side"/>
  <img src="../zombieDeath.gif" alt="Zombie Death" id="side"/>
</div>

As the game progressed, I added even more animations.

<div id="sideBySide">
  <img src="../explosion.gif" alt="Explosion" id="side"/>
  <img src="../coin.gif" alt="Coin" id="side"/>
  <img src="../arrow.gif" alt="Arrow" id="side"/>
</div>

The arrow animation in particular is a bit interesting because the sprite that is displayed depends on the angle of the velocity of the object with respect to its horizontal. This gave it the illusion that it faces the direction it’s going.

I also added a zombie dog:

<img src="../zombieDog.gif" alt="Zombie Dog" id="smallImage"/>

By the end, I got a bit greedy and decided to incorporate a teeny-tiny bit of ads just to see how I fare. I gave the user the option of viewing an ad in exchange for 5 coins that could be used towards purchasing upgrades. After about a year on the Play Store, Google Ads finally cut me a check for $100, so I can say the 400+ hours of development effort were totally worth it.

On a more serious note, I had a great time making the game and any revenue I generated was actually quite unexpected. It was amazing to see that a small project I started in high school could slowly turn into a game available on the Play Store. It taught me a great deal about what goes into making an app and gave me a profound new sense of awe towards the developers who make the games I *actually* play.

<img src="../zombieTitle.png" alt="Game Title" id="smallImage"/>

Side note: if you would like to take a look at the code for the game, I can make it available upon request.

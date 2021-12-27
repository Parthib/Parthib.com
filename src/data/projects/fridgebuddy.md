<img src="../fridgeBuddy/fridgeBuddyProjectIcon.png" alt="Facebook project icon" id="icon"/>

## Fridge Buddy

After graduating from college, I moved to Seattle with a few people and we started having an interesting problem. People would buy groceries, put it in the fridge, but later either forget about some of it or think it belongs to someone else. Over time, expired foods would accumulate to a breaking point where we needed to cleanse the fridge of months-old rotten food if we wanted to store anything else.

I knew I was also part of the problem, so I wanted to find a way to reduce our waste. My first idea was to use an app to get notifications for when our groceries were about to expire, but it needed to be low-friction so that people would actually use it. There were several solutions on the app store, but few that were cross platform between iOS and Android and none that scanned receipts to automatically load-in what you bought. At this point, I decided to take a stab creating the app I wanted.

Over the next twenty months, I spent my spare time sketching out the app, breaking it down into components, and developing the frontend/backend. 456 commits later, I had a fully functioning app beta tested by my friends and approved by Apple and Google!

<video controls id=smallImage>
  <source src="https://i.imgur.com/oXkBEbG.mp4" type="video/mp4">
</video>

Let me take you through my nearly 2 year journey...

## Planning - March 2020 - April 2020

### Choosing the Framework

My first problem was to make something that is cross-platform (i.e. works on both iOS and Android). I didn't want to spend the time trying to use Swift and Java to create the same app for iOS and Android, but luckily there are ways to write code once use it to generate both native Android and iOS apps. The two main frameworks available at the moment are [React Native](https://reactnative.dev/) and [Flutter](https://flutter.dev/). I decided to go with Flutter because it was an active space with [lots of official tutorial videos](https://www.youtube.com/c/flutterdev/videos) and [highly useful packages](https://pub.dev/) that are well integrated with Google's ecosystem. After spending six hours taking notes on Flutter and it's supporting language [dart](https://dart.dev/) from Maximilian Schwarzmüller's amazing [YouTube course](https://www.youtube.com/watch?v=x0uinJvhNxI), I moved onto creating a short demo.

### Sample App

Before investing significant time into designing and implementing the app, I wanted to be sure that my app idea was feasible with what is currently possible with Flutter. The most difficult part of the app was the optical character recognition (OCR) aspect which was needed to make the process of adding groceries to the app via receipts as frictionless as possible. Unfortunately, I did not have a large dataset of receipts to train a neural network, so I decided to do the next best thing and have Google do the OCR for me on-device through their [ML Kit](https://developers.google.com/ml-kit/vision/text-recognition) package. I wanted to see how well it worked, so I wrote a quick demo app:

<video controls id=smallImage>
  <source src="https://i.imgur.com/kUR7BV0.mp4" type="video/mp4">
</video>

The text recognition worked pretty well! With the demo out of the way, I gained enough confidence in Flutter to take the project more seriously.

### Sketches

When creating an app, it's always good to have reference drawings on what you plan to make. Let's compare what I drew back in April 2020 against what I ended up releasing in December 2021:

#### Home Screen

<img src="../fridgeBuddy/homeScreenSketch.png" alt="Home Screen Sketch" id="smallImage"/> <img src="../fridgeBuddy/actualHomeScreen.png" alt="Actual Home Screen" id="smallImage"/>

Since the sketch, I decided to simplify the bottom navigation bar, but otherwise it's mostly the same! You'll also notice that I initially called my app "Grocery Expiry." Since then I realized that might not be as catchy, so I switched to "Fridge Buddy" before release.

#### Adding an Item

<img src="../fridgeBuddy/addItemSketch.png" alt="Add Item Sketch" id="smallImage"/> <img src="../fridgeBuddy/actualAddItemScreen.png" alt="Actual Add Item Screen" id="smallImage"/>

Minor changes here since the sketch including a quantity button, but otherwise mostly the same.

#### Editing Scanned Items from a Receipt

<img src="../fridgeBuddy/editReceiptItemsSketch.png" alt="Edit Receipt Items Sketch" id="smallImage"/> <img src="../fridgeBuddy/actualEditReceiptScreen.png" alt="Actual Edit Receipt Screen" id="smallImage"/>

This one is still mostly the same, though I did simply the UI a bit further by removing the edit button for each tile. In the final design, tapping on the tile itself brings up the edit menu.

#### Login Screen

<img src="../fridgeBuddy/loginScreenSketch.png" alt="Login Screen Sketch" id="smallImage"/> <img src="../fridgeBuddy/actualLoginScreen.png" alt="Actual Login Screen" id="smallImage"/>

This one deviated quite a bit because I decided to allow logging in without a 3rd-party provider like Google or Facebook. I also had to add support for logging in with Apple because [they started requiring recently](https://developer.apple.com/app-store/review/guidelines/#sign-in-with-apple).

#### Settings Screen

<img src="../fridgeBuddy/settingsScreenSketch.png" alt="Settings Screen Sketch" id="smallImage"/> <img src="../fridgeBuddy/actualSettingsScreen.png" alt="Actual Login Screen" id="smallImage"/>

This one also deviated significantly because I later decided to move the logging in section to a separate page to reduce the clutter and better compartmentalize the app.

### Trello

At this point, all that was left in terms of planning was to break down each major section of the app into smaller tasks. I broke down the app into 50 subtasks and put them on [Trello](https://trello.com/en-US) for easy progress tracking. Over time, I decided to include more features including a whole backend to allow for sharing lists between people, so the number of tasks blew up to about 150.

Here's a sample of what the Trello board looked like:

<img src="../fridgeBuddy/trello.png" alt="Trello Board Image" id="medImage"/>

## Making The App: May 2020 - November 2021

Over the next year and a half, I authored 460 commits on my private git repository to develop the app. Here's a breakdown of where that development time went:

### Reading Receipts - May 2020

I still had to do some processing on the text given to me by Google's OCR to figure out what food was purchased, so I wrote a few scripts to parse data sourced from [a food safety database hosted by the USDA](https://catalog.data.gov/pt_PT/dataset/fsis-foodkeeper-data/resource/2128aebe-b3dd-4b4d-8315-e88d106bd741). I then devised a modified [edit distance algorithm](https://en.wikipedia.org/wiki/Levenshtein_distance) to determine what food from the database was seen on a given receipt. By this point, I could scan a receipt, get what foods were purchased, and retrieve information on when those foods were going to expire using my database. My barebones app looked like this after completing the receipt parsing:

<img src="../fridgeBuddy/initialParsing.jpg" alt="Primitive App Receipt Parsing" id="smallImage"/>

### Basic Functionality - May 2020 to October 2020

The next few things I did were to slowly build basic functionality for the app. Nothing that interesting here, so I'll just bullet point what I did

* Ability to read receipts and figure out what foods were bought - **May 2020**
* Main UI interface with individual tiles for food - **June 2020**
* Persistence so that items that the user saves isn't lost forever after app restart - **June 2020**
* Page for adding items to the main app page - **July 2020**
* Organize main page by foods that are expiring soon - **August 2020**
* Notifications for things that are expiring soon - **August 2020**
* Settings page - **September 2020**
* Google, Facebook, and basic email login with Firebase - **October 2020**
    * This is where [Flutter's integration with Google's cloud services](https://firebase.flutter.dev/docs/overview/) came in handy.

### More Complex Functionality: November 2020 - September 2021

#### Food Image API: November 2020 - December 2020

By November 2020, the basic app was complete, but I wanted to add a couple more features like provide an image for each food entry in my database. I had about 500 unique foods that would require images, and I wanted the resolution of each image to be 512x512px. For png images, this was about 400KB per image, which would mean that the 500 images would take up about 200MB of space. I didn't want my app to become a 200MB+ download, so I needed to create an API that would deliver the images as the user needed them.

Here's the basic architecture of the backend design I came up with for my APIs:

<img src="../fridgeBuddy/basicArchitecture.png" alt="Basic Backend Architecture Diagram Image" id="smallImage"/>

I use Firebase to authenticate calls to my backend since that's what manages my logins. I used [AWS API Gatway](https://aws.amazon.com/api-gateway/) and [AWS Lambda](https://aws.amazon.com/lambda/) to create an API that the app can reach out to. The lambda function works with a [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) database to retrieve information it needs (such as credit information for a particular image or the location in an [Amazon S3](https://aws.amazon.com/s3/) bucket for the image), and it works with S3 to retrieve an image URL to return back to the user. This is the design pattern I used for most of my APIs.

Half of the time here was spent just finding royalty-free images on the web for the 500+ food entries in my database, cropping them down to 512x512px, and updating my database of image attributions 😂

#### Other APIs and Functionality: January 2021 - August 2021

* Added a credits page for each image used in the app - **January 2021**
* Created an API to allow the user to use custom images for their food entries and save it to the backend - **February 2021**
* Created an API to synchronize user food data with a backend DynamoDB database - **February 2021 - March 2021**
* Created APIs to retrieve a join code for a list and an API to let a user join a list given a join code - **March 2021**
* Added QR code generation for sharing join codes and ability to scan QR codes to join lists - **April 2021**
* Created an API for modifying user permission to a list. Created a page to view the users on a list and their permissions - **May 2021 - June 2021**
* Created an API to allow users to create a custom profile image and sync it with the backend. **July 2021**
* Started testing and fixing the iOS version (had only tested on Android so far). Added support for signing in with Apple - **July 2021**
* Added Google AdMobs ads to monetize the app - **August 2021**

#### In-App Purchases and Subscriptions: August 2021 - September 2021

I wanted to offer users the ability to remove in-app ads by purchasing a "Pro" version of my app, so I turned to Flutter's [in_app_purchase](https://pub.dev/packages/in_app_purchase) dependency to help me out. The general workflow is that between both iOS and Android, when an in-app purchase is made, I need to verify some credential provided by the user's app against Apple's/Google's servers. If the credential could be validated, then I could give the user "Pro" access to my app. I also needed to periodically check that the purchases were not refunded or that subscriptions did not expire because otherwise I would need to remove a user's "Pro" status. All this required the implementation of a different backend:

<img src="../fridgeBuddy/verifyPurchaseArchitecture.png" alt="Verify Purchase Architecture Image" id="smallImage"/>

I created one API that could perform the appropriate receipt/purchase token validations against Apple's or Google's servers. If the user made a purchase, then the purchase validation lambda function will reach out to Google or Apple to validate the purchase, record the event in a DynamoDB table, and give the user Pro access if the transaction was verified. A scheduled AWS CloudWatch event also periodically triggers the purchase verification Lambda function to check for expired subscriptions and refunded purchases. I got the idea for this architecture from [this example diagram](https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/in-app-receipt-validation-ra.pdf) provided by AWS.

I also wanted to provide more features to people who get the "Pro" version of the Fridge Buddy app. I decided to integrate a few extra perks like increased max food entries per list, more lists per user, and more users per list into the backend and app logic.

<img src="../fridgeBuddy/fridgeBuddyProPage.png" alt="Pro Perks Page" id="smallImage"/>

### Pre-Launch Work: October 2021 - December 2021

#### Website - October 2021

No app is complete without a website! Up until this point I had been using the name "Grocery Expiry", which by this point multiple people had told me does not sound good 😔. I decided to claim https://www.fridgebuddy.io, quickly create a website for the domain in React, and rename my app to Fridge Buddy. I also came up with this silly guy for the logo:

<img src="../fridgeBuddy/fridgeBuddyLogo.png" alt="Fridge Buddy Logo" id="smallImage"/>

#### Google Play and Apple App Store Approval - November 2021

The Google Play approval process was pretty easy - they approved it upon my first submission! The Apple process on the other hand was much harder. The Apple reviewer was definitely human and kept finding small bugs that caused purchases to not work, login to fail, and the app to get into a bad state. I am definitely grateful for all the things the reviewer found, but it was frustrating because beyond a single screenshot and a vague description of the bug, I was left on my own to try and reproduce the bugs. It got to the point where I was printing log lines in the UI so that the screenshots could tell me what went wrong!

Either way, about 10 revisions later, I finally got the seal of approval from Apple as well.

#### Beta Testing and Release - December 2021

After making my app available for beta testing through the Google Play store and through TestFlight on iOS, I had a handful of people try out the app and report back any issues they found. They found several minor issues like not being able to sign-in with Google in the production app or certain UI elements overlapping, and I quickly addressed everything they found that was beyond feature requests. After a little bit more bickering with my iOS app store reviewer, I got the final versions of my app approved for release!


### Closing Notes

When I started out this project, I thought it was only gonna take 5 months tops, but instead it ended up taking nearly 2 years. Creating a working frontend AND backend for an app takes a lot of time even just to solidify its design. It's also hard to invest time into a major project when working on a full-time job on the side 😛. I now much better understand what it takes to develop major software from scratch and have a greater respect for those who do.

Also learned what an amazing framework Flutter is. If I had to develop two separate apps for iOS and Android, this project would have probably taken me another year! Compared to React, I think all the packages Flutter hosts on https://pub.dev made the development process much easier. I recommend the Flutter framework to whoever is considering developing an app for both iOS and Android.

This project also has helped accelerate my learnings with cloud infrastructure that regularly interact with at work. My experience with S3, AWS Lambda, and DynamoDB has definitely come in handy, and I expect that it will for a long time coming. If I had to develop another similar app from scratch, I know I could do it much faster next time, and knowing this is an incredible feeling. But, for now, I'm gonna take a break. Happy Holidays and Happy New Year!

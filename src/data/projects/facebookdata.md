<img src="../facebookProjectIcon.png" alt="Facebook project icon" id="icon"/>

## Facebook Data Analysis

It’s no secret that Facebook stores a lot of data on us, but people are surprised to know much of this data can be downloaded. If you go to your settings, go to "[Your Facebook Information](https://www.facebook.com/settings?tab=your_facebook_information),” and click on “Download Your Information,” Facebook starts preparing a compressed file containing gigabytes of information about your Facebook activity. I personally was curious about my messaging habits. Has my word choice changed over the years? Do I message people more now than in the past? I decided to parse all my Facebook Messenger messages to find out.

I wrote [this python script](https://github.com/Parthib/FacebookDataAnalysis/blob/master/parseMessages2.0.py) to go through all my messages and put the data into a nice format. It essentially creates a word frequency table for any given month or year. I had to remove some phrases such as “joined the video chat” and “set the nickname for” because Facebook considers these to be typed by the user. I also tokenized messages using [nltk’s tokenizer](https://www.nltk.org/api/nltk.tokenize.html) and removed words nltk considers to be [stop words](https://www.geeksforgeeks.org/removing-stop-words-nltk-python/) such as “a” and “we.” Finally, I used pyplot to graph this information. Here’s a sample for 2019:

<img src="../2019wordfreq.png" alt="2019wordfreq" id="largeImage"/>

Pretty basic, but it’s enough to show you I use “lol” and “like” way too often.

The script can also extract the most frequent [n-grams](https://en.wikipedia.org/wiki/N-gram) one uses. Here’s my most frequent 2-grams for 2019:

<img src="../2019wordfreqgram.png" alt="2019wordfreq" id="largeImage"/>

I thought making this into a gif would be great, but I have no animation skills. Fortunately, Flourish has a tool that can make gifs from data in a csv format. In the script, I wrote an additional function to generate that csv file. Here is the result:

<video controls id=largeImage>
  <source src="https://i.imgur.com/la6Yr7B.mp4" type="video/mp4">
</video>

You can see some cool trends in the data. First of all, the number of words explodes starting in the summer of 2013 because that’s when I got my first smartphone. It also looks like my use of “lol” recently caught up to my use of “like.”

I also tried graphing the words I’ve seen over time. Unfortunately, the sheer number of words (over 1 million!) made the gif much more laggy. Here it is:

<video controls id=largeImage>
  <source src="https://i.imgur.com/LT6tSU4.mp4" type="video/mp4">
</video>


Moving-month frequencies may have been more interesting, but so would have a bot that replicates my messaging patterns. I leave that work to someone else 😊

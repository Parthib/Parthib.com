<img src="../chipTestProjectIcon.png" alt="Chip project icon" id="icon"/>

## Testing the Encryption Chip

I recently got back the chip we designed in my Silicon Compilation class, and I finally got some time to mess around with it during the quarantine. If you want a bit more context on this project, check out [this page](/projects/Chip).

Here is a picture of the chip in all of its glory:

<img src="../physicalChip.png" alt="Picture of the chip" id="smallImage"/>

It’s hard to believe over 150 hours of effort were put into designing this 1x3cm device.

Since it had been over a year since I took the class, my knowledge in asynchronous design was a bit rusty, but I still gave a stab at testing it. If successful, the chip should be able to encrypt data, and if the data is fed back into it, the chip should be able to decrypt the data.

To test it, I purchased:

Two *Elegoo* Arduinos (because they are cheap)
<img src="../twoArduinos.png" alt="Elegoo Arduinos" id="smallImage"/>

A set of 80 jumper wires
<img src="../wires.png" alt="Jumper Wires" id="smallImage"/>

A breadboard
<img src="../breadboard.png" alt="Breadboard" id="smallImage"/>

I later realized a simple Arduino had too few ports, so I replaced one of the normal Arduinos with a Mega Arduino.
<img src="../megaArduino.png" alt="Mega Arduino" id="smallImage"/>

The first problem I ran into was mapping the pins in our design to our physical chip. Pretty simple since a mapping was provided to us! Right?
<img src="../mapping.png" alt="Pin Mapping" id="smallImage"/>

Apparently not. I misunderstood the diagram, and it took a day of debugging to find issue. On my third attempt, I turned the diagram into a nice drawing so that the wiring would be easier:
<img src="../chipTestDiagram.png" alt="Diagram" id="smallImage"/>

Using the diagram, I wired the Arduinos up.
<img src="../chipTestProjectIcon.png" alt="Arduinos wired up" id="smallImage"/>

The reason for using two separate Arduinos was to really highlight the separation between reader and writer of the chip.

Now it was time to load the Arduinos with programs to test it. Luckily, I had developed some code to test the chip for one of our classes. Unfortunately, the code did not work – who knew the code never works the first try! After working out all the bugs, I still had issues, and I nearly gave up thinking I had shorted the chip somehow.

Then it hit me. I was using Serial.print() to debug, but I was also using ports 0 and 1 to send signals to the chip. For those who don’t know, Serial.print() messages are also sent over ports 0 and 1, and this caused the chip to behave unpredictably. As soon as I comment out my debug lines, the chip started working correctly and encrypting data. Our design turned out to be a success!

If you are curious, you can find the code I used to test the chip [here](http://www.github.com/Parthib/encryptionChipTest).

Here's a demo showing the chip in action!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MmdZktqq63Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I also tested the chip with minimal Serial.print() statements to see how fast it could encrypt text. I found that it could encrypt 10,000 characters in 31.52 seconds, which means it can encrypt characters at a frequency of ~320 Hz. At first, this seems pretty slow since the processor on Arduinos run at 16 MHz, but it turns out that digital reads and writes individually take about [50 cycles](https://forum.arduino.cc/index.php?topic=486249.0) to complete, and each character read/write takes ~60 of these operations. This means that the fastest the Arduinos should be able to read/write characters to the chip is at about 5333 Hz. There is still a factor of 15 that I am missing between this value and the ~320 Hz that I observed, but there is a good chance this is due to the number of instructions required to perform a read/write based on the scripts I wrote. Either way, it appears the chip works, and it works pretty well!

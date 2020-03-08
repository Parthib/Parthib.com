<img src="../digitalsystemsProjectIcon.png" alt="Chip project icon" id="icon"/>

## Who's Home?

For the final group project in our Digital Systems class, I proposed making a device that could tell us who is inside a building when mounted above a doorway. By utilizing a distance sensor, the device would identify those who are walking underneath it by reading their height. We needed very few things to create such a device. These things were:

**9V Batteries** to power the contraption

![9V Batteries](../9VBattery.png)

An [**Arduino Uno R3**](https://www.elegoo.com/product/elegoo-uno-project-basic-starter-kit-with-tutorial-and-uno-r3-for-arduino/) to process data

<img src="../arduino.png" alt="Arduino Uno R3" id="smallImage"/>

A millimeter-accurate [**distance sensor**](https://www.sparkfun.com/products/11309) for reading the heights of people

<img src="../digitalsystemsProjectIcon.png" alt="Distance sensor" id="smallImage"/>

A **speaker** so that the device could “talk”

<img src="../speaker.png" alt="Speaker" id="smallImage"/>

And a [**MOVI Arduino shield**](https://www.audeme.com/movi.html) so that we could interact with the device by talking

<img src="../movi.png" alt="MOVI Arduino shield" id="smallImage"/>

In the final design, the device had the following functions when spoken to:

**“Recalibrate”** made the device to measure the distance to the ground, save the information, and state the distance to the ground.

**“Who is here”** made the device state the names of those who are home.

**“What is my height”** made the device read the distance to a person’s head, compare it to the ground distance, and state the calculated height of the person.

**“Who am I”** made the device guess who is standing underneath it based on his/her height.

**“Set [name] height”** associated a person’s name with the height of the person beneath the distance sensor.

**“Enable Greet Mode”** made the device to say “hello” and “goodbye” to specific people as they pass underneath the sensor.

The programming was relatively easy because the MOVI shield presents parsed human speech as a string to the Arduino. You can find the script we wrote [here](https://github.com/Parthib/WhosHome/blob/master/team11_final.ino). The slight difficulty was in reading the height of people underneath the sensor as they passed by. Using several polled data points on distance and messing with the algorithm based on experimental data helped us improve the accuracy of recognizing people under the sensor.
We also had a difficult time mounting the sensor to the ceiling, so I designed and printed this mount in SolidWorks:

<img src="../mount.png" alt="Mount" id="medImage"/>

Here is a video of our end product in action!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tH0ZVNCLBtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

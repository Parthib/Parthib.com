<img src="../chipProjectIcon.png" alt="Chip project icon" id="icon"/>

## Asynchronous Encryption Chip

This was the final project for a class I took in college called Silicon Compilation. I worked on with two others – [Rishab Ramanathan](https://www.linkedin.com/in/rishab-ramanathan-2ba328109/) and [Patrick Lawe](https://www.linkedin.com/in/patrick-lawe/) – and we probably put in a combined total of 100 hours to complete it. It was one of the more difficult classes I took at Yale, and we were pretty proud of the final design.

The class itself centered around designing circuits at the transistor level. We used a program called [Magic VLSI](http://opencircuitdesign.com/magic/) in order to draw the circuits. Here is an example of a NOT gate:

![NOT Gate](../notGate.png)

The red is polysilicon, the green is an n-diffusion layer, the brown is a p-diffusion layer, the top blue metal is Vdd, the bottom blue metal is ground, and the middle blue metal is output. When a voltage is applied to polysilicon, a path from ground to output is complete, which means the circuit outputs a 0. When ground is connected to the polysilicon, a path from Vdd to output is complete, which means the circuit outputs a 1. These are the fundamentals of a NOT gate.

Here is an 8 input OR gate:

<img src="../8orGate.png" alt="8-input OR Gate" id="medImage"/>

The second part of this class involved making *asynchronous* circuit designs. In this context, asynchronous means creating designs that do not involve a clock. Normal computers execute instructions every few nanoseconds whenever a quartz crystal emits a pulse, but the professor teaching our class specialized in computer designs that *don’t* require clocks. Instead, it involves lots of requests and acknowledgements between modularized components that preform small computations. This probably made the class much harder as we had to throw out all our intuitions related to computers out the window, but I’d say it was still a worthwhile experience.

For our final project, we decided to make a design that could encrypt and decrypt data using a [linear-feedback shift register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register). The encryption method is not too strong, but the algorithm was simple enough that we could finish the design in a semester.

Fortunately for us, our professor had a program that could outline the connections we needed to make between the modularized components for a design written in [CHP](http://vlsi.cornell.edu/~fang/hackt/hac/CHP.html) (Communicating Hardware Processes). This took off *some* of the pain in designing the circuit. Here is the CHP code for our encryption chip:

```
  vars {
    int<1> c;
    int<8> seed;
    int<8> plaintext;
    int<8> encrypted;
    chan<1> C;
    chan<8> input;
    chan<8> output;
  }
  chp {
    *[ C?c;
      [c -> input?seed
      []~c -> input?plaintext;
      seed := lfsr_8(seed);
      encrypted := xor_8(seed,plaintext);
      output!encrypted
      ]
    ]
  }
```

Looks pretty simple, but that piece of CHP “compiled” into over 300 lines of connection information for the chip design.

The design was also fairly difficult to debug because the only tools we had available were simulating the design and using a custom program authored by our professor. Nevertheless, after a solid week of pulling all-nighters, we managed to work out the bugs and create a working design. I believe our final design ended up using over 10000 transistors. Here it is in all its glory:

<img src="https://i.imgur.com/OmH2OMc.png" alt="Chip design" id="largeImage"/>

The black pads around the edges connect to the physical pins in the final chip design. What's really exciting is that the professor managed to get the design printed for us using ~120nm technology. I will follow-up in another post after I physically test the chip to see if it actually works. Until then!

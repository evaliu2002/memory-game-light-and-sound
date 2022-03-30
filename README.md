# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Eva Liu**

Time spent: **21** hours spent in total

Link to project: https://glitch.com/edit/#!/worried-fallacious-wool?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here: <br>
<br>Winning Gif + Button Images + More than 4 Buttons
![LightandSoundMemoryGameWinning](https://user-images.githubusercontent.com/69877857/160548546-a491c1f4-d949-468e-81c2-fe0f802a0891.gif)
<br>Losing Gif + Guessing Strikes Gif
![LightandSoundMemoryGameLosing](https://user-images.githubusercontent.com/69877857/160548573-d32a4cb8-957d-4195-ad7e-3dcc375ca7ad.gif)
<br>Guessing Timer Beginning Try Again
![Guessing Timer Beginning Try Again](https://user-images.githubusercontent.com/69877857/160548938-e19f0a08-f529-434d-8c62-afc33d98e265.gif)
<br>Timer After Correct Guess and Pressing Stop Button
![Timer After Correct Guess and Pressing Stop Button](https://user-images.githubusercontent.com/69877857/160548689-2aba3517-292c-4e35-9553-7677d53acc74.gif)
<br>Timer After Correct Guess and Not Pressing On Time After
![Timer After Correct Guess and Not Pressing On Time After](https://user-images.githubusercontent.com/69877857/160549054-a9f61041-ea62-43b4-9263-a328216df243.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. <br>
   [https://www.w3schools.com/howto/howto_css_round_buttons.asp,<br>
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random,<br>
   https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/,<br>
   https://www.w3schools.com/js/js_syntax.asp,<br>
   https://www.geeksforgeeks.org/how-to-change-an-input-button-image-using-css/#:~:text=The%20default%20button%20in%20HTML,show%20only%20the%20image%20itself, <br>
   I google searched the RGB code for the color lilac, Javascript Math.random, the setInterval clearInterval methods,
   how to make a button background an image, and how to make buttons round using CSS. I also attempted to contact the
   TAs on Slack regarding a console error.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br>
   [A challenge that I encountered was programming through Javascript since I wasn't used to
   some of the Javascript syntax as I usually program using Java, it took me a short while to be able to type up parts of my code.
   I overcame this challenge through practicing getting used to Javascript syntax by searching up about Javascript
   syntax and reading more about it.
   Another challenge was when I was implementing the random pattern generator. I created a function to randomly generate 
   the entire pattern and then ran the pattern in the startGame function. I assumed that implementing a random number
   generator in Javascript was different than Java due to Javascript variables and objects. I was stuck for 40 minutes
   wondering why the number generator wasn't inputting numbers into my pattern array until I realized that I just forgot
   the parenthesis after Math.random when I was comparing my code with examples online.
   In addition, due to the pattern generator function returning the entire pattern, the function had delays in returning the 
   pattern to startGame. To fix this problem, I altered the pattern generator function to only generate one number and then 
   pushed the random numbers into the pattern array inside startGame which sped up the pattern generating.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <br>
   [Questions I have about web development is how I would be able to host a website after I finished implementing
   the website locally. I have worked with the spark Java framework before, but I am unsure of how to host a
   website through a bought domain and if I need to use my own servers to host. I am also curious as to why React
   and Angular is so common in the industry and the benefits of Typescript versus Javascript. How does testing
   work for web developing? How does deploying and maintaining a web app work if there are active users of the
   web app at all times?]

4. If you had a few more hours to work on this project, what would you spend them doing 
   (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br>
   [If I had a few more hours to work on this project, I would focus more on the UX/UI elements of the project. I would experiment
   with CSS, implement and test different types of UX designs on the webpage. I'm interested in creating an animated background
   for the webpage with different changing shapes around the page. I could also implement a scoring system where everytime the
   player wins, the scoreboard would update the points by one. If the player loses, the scoreboard will reset, but if the
   player consecutively wins 3 times, then large "YOU WON" text will pop up with animated confetti popping up in the webpage.]

## Interview Recording URL Link

[My 5-minute Interview Recording] https://youtu.be/iaAFwuPWIKY

## License

    Copyright [Eva Liu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

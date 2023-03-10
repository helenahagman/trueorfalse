
<section>
  <h1>True or False game</h1>
  <img style="width:400px;" src="assets/images/thumbsupdown.jpg" alt="Thumbs up down">
  <br>
</section>

<section>
  <h2>Description</h2>
  <br>
  <p>This is a single page, True or False game. The user will be presented with questions that can be answered with either True or False. The goal for the user is to 
    be able to play a simple but entertaining online game with fun and slightly unusual questions. The site owner's goal is to provide a quick and fun game that can by played by anyone as the chans of a correct answer for each question is 50%. After 5 questions the user will be asked if they want to play again.
  <br>
    Three main colors have been used throughout the page to make it easy to navigate and to avoid distractions. Green for the "true" elements and red color for the "false" elements. The color on the "Reset Game" button at the bottom of the page is similar to the blue color in the image used on the top of the page.
   <br>
   </p>
</section>
<br>

<section>  
  <h2>Planning the project</h2>
  <br>
    <h4>Include features like:</h4> 
    <ul>
      <li>Feedback on answered questions.</li>
      <li>Display a limited amount of random questions from the question bank.</li>
      <li>Score tracking system that updated the score after each question.</li>
      <li>Icons/image or text to support instant feedback for correct and/or incorrect answers.</li>
      <li>Play again button and or reset button</li>
    </ul> 
  <br>
</section>

<section>
  <h2>Features</h2>
  <br>
    <h3>Game page</h3>
      <ul>
        <li>Single page game</li>
        <li>Clickable True and False buttons to answer the game questions.</li>
        <li>Instant feedback for correct and incorrect answers.</li> 
        <li>Hoover function on the True and False buttons.</li>
        <li>Clear and consistant visual design through out the page, with green representing true and red representing false</li>
        <li>Accessible and easy to navigate with no distractions</li>
      </ul>
    <br>  
  
  <h3>Interactive elements included on the page</h3>
  <br>
    <ul>
      <li>When the user hovers over the true button the black check symbol will turn white, the same rules apply for the red false button.</li>
      <br> 
      <img class="img" src="assets/images/hover.png" alt="Hover" style="width:160px">
      <br>
      <li>When the true or false buttons are clicked the user will get instant feedback with an emoji showing if the answer is correct or incorrect.</li>
      <br>
      <img src="assets/images/correct.jpg" alt="Correct feedback"><img src="assets/images/incorrect.jpg" alt="Incorrect feedback">
      <br>
      <li>Underneath the buttons on the page the score will show how many correct and incorrect answers the user has.</li>
      <br>
      <img src="assets/images/score.jpg" alt="Score count" style="width:100px"> 
      <br> 
      <li>After the 5 questions have been displayed the user will get a pop-up with the total score and the question to play again.</li>
      <br>
      <img src="assets/images/playagain.jpg" alt="Play again" style="width:150px">
    </ul>
  <br>
</section>
<br>

<section>
  <h2>Testing</h2>
  <br>
    <ul>
      <li>I tested and confirmed that the site is responsive and looks good on diffrent screen sizes using the devtools device toolbar, Am I Responsive and Lighthouse.</li>
  <br>
    <p>
      <a href="https://ui.dev/amiresponsive">
        <img style="border:0;width:600px;"
        src="assets/images/amiresponsive.jpg"
        alt="Am I Responsive"/>
      </a>
    </p>
  <br>
    <p>
       <a href="https://www.webpagetest.org/lighthouse">
       <img style="border:0;width:600px;" src="assets/images/webpagetest.jpg" alt="Lighthouse test"/>
       </a>
    </p>
   <br>
 
  <h4>Manual testing</h4>
   <ul>
    <li>I tested and confirmed that the game questions display correctly.</li>
    <li>I tested and confirmed that the true and false buttons work with the instant feedback function as expected.</li>
    <li>I tested and confirmed that the score updates as expected when the true and false buttons are clicked.</li>
    <li>I tested and confirmed that the score is reset when the reset game button is clicked.</li>
    <li>I tested and confirmed that the pop-up works when a game is completed and the buttons inside work.</li>
  </ul>
 <br>
</section>

<section>
  <h2>Fixed Bugs</h2>
    <br>
    <ul>
      <li>Questions did not show on the page - fixed <br>The code was missing the the div id="question". After updating the code the questions show</li>
      <li>True button didnt work - fixed <br>The code was missing some characters. After updating the code the True button works as expected.</li>
      <li>The score is not updated - fixed <br>Added and updated the incrementScore function after watching the walk through project again. The update is now working as expected.</li>
      <li>The score is not updated when game starts over - fixed<br>Updated the code with the help of FabioFaria in the Slack community of Code Institute</li>
    </ul>
  <br>

<h2>Unfixed Bugs</h2>
  <br>
  <ul>
    <li>When the user selects the end game button in the pop-up after a finished game the following error appears in the consol: Uncaught TypeError: Cannot read properties of undefined (reading 'question') </li>
  </ul>
  <br>
</section>

<section>
  <h2>Badges</h2>
  <br>
    <ul>
      <li>CSS validation complete with no errors</li>
      <br>
    <p>
      <a href="http://jigsaw.w3.org/css-validator/check/referer">
      <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
      </a>
    </p>
  <br>
      <li>HTML validation complete with no errors or warning, using <a href="https://validator.w3.org/">https://validator.w3.org/</a></li>
      <br>
    <p>JSHint validation completed, using <a href="https://jshint.com/">https://jshint.com/</a>
      <ul>Warnings: 
        <li>Undefined variable Swal - Variable is defined in the importet library from Sweet Alert.</li>
        <li>Unused variables true_clicked and false_clicked - Corrected in the code.</li>
    </ul>
    </p>
      </ul>
  <br>
</section>

<section>
  <h2>Support</h2>
  <br>
    <p>Useful links for validation and help:</p>
      <ul>
        <li><a href="https://www.w3schools.com/">https://www.w3schools.com/</a></li>
      <ul>Searched for assistance and tips</ul>
        <li><a href="https://teamtreehouse.com/community/how-do-i-use-mathrandom-on-an-array-of-questions">https://teamtreehouse.com/community/how-do-i-use-mathrandom-on-an-array-of-questions</a></li>
      <ul>Searched for help with the display of random questions</ul>
        <li><a href="https://fonts.google.com/">https://fonts.google.com/</a></li>
     <ul>Fonts and icons for the game.</ul>
        <li><a href="https://validator.w3.org/">https://validator.w3.org/</a></li>
     <ul>Validation of the HTML code.</ul>
        <li><a href="https://jigsaw.w3.org/css-validator/">https://jigsaw.w3.org/css-validator/</a></li>
     <ul>Validation of the CSS code.</ul>
        <li><a href="https://jshint.com/">https://jshint.com/</a></li>
     <ul>Validation of the Java Script code.</ul>
        <li><a href="https://www.webpagetest.org/">https://www.webpagetest.org/</a></li>
     <ul>Test of the page</ul>
        <li><a href="https://ui.dev/amiresponsive">https://ui.dev/amiresponsive</a></li>
     <ul>Validation of the responsiveness of the page</ul>
        <li><a href="https://www.javatpoint.com/javascript-tutorial">https://www.javatpoint.com/javascript-tutorial</a></li>
     <ul>Tips for Java Script</ul>
        <li><a href="https://htmlcolorcodes.com/">https://htmlcolorcodes.com/</a></li>
     <ul>Colors for the game page</ul> 
    </ul>
  <br>
</section>

<section>
  <h2>Future releases</h2>
  <br>
    <p>No future releases planned at the moment</p>
    <br>

  <h2>Acknowledgments</h2>
    <br>
    <p>Special thanks to:</p>
      <ul>
        <li>My Mentor Jubril Akolade for input and useful tips.</li>
        <li><a href="https://www.freepik.com/free-photo/3d-render-set-like-dislike-hand-sign-icons_35672122.htm#page=2&query=true%20false&position=36&from_view=keyword">The free image of the thumbs up and thumps down by upklyak</a> on Freepik
        <br>
        <li>Fabio Faria in the Slack community for help on solving my problem with the score not resetting when a new game started</li>
      </ul>
   <br>
</section>

<section>
  <h2>Deployment</h2>
  <br>
    <ul>
      <li>The site was deployed to GitHub pages, following the steps from the Love Running Project.</li>
    </ul>
    <br>

  <h3>Live site</h3>
  <br>
    <a href="https://helenahagman.github.io/trueorfalse/">https://helenahagman.github.io/trueorfalse/</a>
</section>





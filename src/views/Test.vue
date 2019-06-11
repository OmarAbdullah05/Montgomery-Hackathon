<template>
  <div class="about">
  <div class="row">
    <div id="pic" class="col-md-6">
    </div>
    <div class="col-md-6">
        <div class="media-body">
      <h1 id="fuckyeah">ADHD Test</h1>
      <p>This is a two-part test that will determine whether or not you have ADHD. Please note that this will not provide definitive results, it will simply help you identify aspects of your life that are associated with ADHD.

The first part of this test will ask 15 questions.
The second part will test your ability to focus.
In the end, you will be provided with results. Good Luck!
</p>
        <main id="quiz">
            <div class="quiz-container"> <h1 class="abt-sm-heading"> Looking for a better lifestyle? Answer these questions and get some advice.</h1>
              <form id="kdk">
                  <p>1. I find that I make careless mistakes in work, in school, or in other activities; or I have trouble paying attention to details.</p>
                      <input type="radio" name="ans1" value="0"> Yes <br>
                      <input type="radio" name="ans1" value="1"> No <br>
                  <p>2. I tend to fidget with my hands or feet, or I squirm in my seat.</p>
                      <input type="radio" name="ans2" value="0"> Yes <br>
                      <input type="radio" name="ans2" value="1"> No <br>
                  <p>3. I often miss what is being said to me in conversations.</p>
                      <input type="radio" name="ans3" value="0"> Yes <br>
                      <input type="radio" name="ans3" value="1"> No <br>
                  <p>4. I prefer to run about or climb on things, even when I know it doesn’t fit the situation.</p>
                      <input type="radio" name="ans4" value="0"> Yes <br>
                      <input type="radio" name="ans4" value="1"> No <br>
                  <p>5. I find it difficult to organize my tasks and activities.</p>
                      <input type="radio" name="ans5" value="0"> Yes <br>
                      <input type="radio" name="ans5" value="1"> No <br>
                  <p>6. I am often “on the go”.</p>
                      <input type="radio" name="ans6" value="0"> Yes <br>
                      <input type="radio" name="ans6" value="1"> No <br>
                  <p>7. I tend to lose things that I need for school or work.</p>
                      <input type="radio" name="ans7" value="0"> Yes <br>
                      <input type="radio" name="ans7" value="1"> No <br>
                  <p>8. I can’t help but give the answer before someone has finished asking me a question.</p>
                      <input type="radio" name="ans8" value="0"> Yes <br>
                      <input type="radio" name="ans8" value="1"> No <br>
                  <p>9. I am forgetful during my daily activities.</p>
                      <input type="radio" name="ans9" value="0"> Yes <br>
                      <input type="radio" name="ans9" value="1"> No <br>
                  <p>10. I find it hard to follow through on instructions or finish chores or duties, even though I understand what is expected of me.</p>
                      <input type="radio" name="ans10" value="0"> Yes <br>
                      <input type="radio" name="ans10" value="1"> No <br>
                  <p>11. don’t like having to make a sustained mental effort.</p>
                      <input type="radio" name="ans11" value="0"> Yes <br>
                      <input type="radio" name="ans11" value="1"> No <br>
                  <p>12.I tend to talk excessively.</p>
                      <input type="radio" name="ans12" value="0"> Yes <br>
                      <input type="radio" name="ans12" value="1"> No <br>
                  <p>13.I am easily distracted.</p>
                      <input type="radio" name="ans13" value="0"> Yes <br>
                      <input type="radio" name="ans13" value="1"> No <br>
                  <p>14.I have trouble waiting my turn.</p>
                      <input type="radio" name="ans14" value="0"> Yes <br>
                      <input type="radio" name="ans14" value="1"> No <br>
                  <p>15.I often interrupt others.</p>
                      <input type="radio" name="ans15" value="0"> Yes <br>
                      <input type="radio" name="ans15" value="1"> No <br>
              </form>
              <br>

              <div id="answer"></div>
              <button class="relative-button" v-on:click="quizAnswer()">Do I have ADHD?</button>
          </div>



         
      </main>
    </div>
  </div>

<div class="footer-copyright text-center py-3"><p id="footer_text">© ADHD Inc. 2019 Copyright
</p></div>
</div>
  </div>
</template>

<script>
import { all } from 'async';
export default {
  name: 'home',
  components: {
  },
  methods: {
    quizAnswer(){
      // Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

function generateAnswer() {
  //  var allelements = [];
    var allelements = document.getElementsByTagName('input');
    var answer = "";
    for (var i=0; i<allelements.length; i++) { allelements[i] = parseInt(allelements[i], 10); }
    var total = 0;
    for (var i=0; i<allelements.length; i++) { total += allelements[i];}

    console.log(total);
    document.getElementById("answer").innerHTML = answer;
}

generateAnswer();
    }
  }
};
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}
.logo {
  width: 50%;
}

#pic {
  height: 80vh;
  background-image: linear-gradient(rgba(243, 104, 224,0.5), rgba(253, 121, 168,0.5)), url("https://static.psycom.net/wp-content/uploads/2016/12/kids-and-adhd-58545454_M.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding:0;
  margin: 0;
}
.boxy {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 1.5em;
    color: rgba(255, 255, 255, 0);
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    padding: 0.45em 0.95em;
    margin: 0.45em;
    border-style: solid;
    border-width: 1px;
    transition: all 0.2s ease;
    border-image: linear-gradient(155deg, #fd79a8 0%, #fd79a8 100%) 1 round;
    background: linear-gradient(155deg, #fd79a8 0%, #fd79a8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    border-width: 2px;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    justify-content: center;




    &:hover {
      text-decoration: none;
      color: #fd79a8;
    }

}
.media-body {
  position: relative;
  right: 2%;
}
#fuckyeah {
  text-align: center;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  padding-bottom: 30px;
}
#footer_text {
  text-align: center;
  justify-content: center;
}


</style>

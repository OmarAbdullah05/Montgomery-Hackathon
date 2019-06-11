<template>
  <div class="home">
  <div class="header">
    <p id="slogan" class="display-2">ADHD Evaluator</p>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img class="img_grabber" src="https://pngimage.net/wp-content/uploads/2018/06/kids-running-white-background-png.png" alt="kids studying">
      </div>
      <div id="fisrt" class="col-md-6">
        <p id="hjhjhj" class="display-3">Effects of ADHD</p>
        <p class="jfiewj">Every year millions of people get diagnosed with ADHD. This disease can have a multitude of effects, including personality disorders.</p>
        <div id="jawkgl" class="row d-flex">
          <div class="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div class="media block-6 services d-block">
              <div class="icon">
                <i id="adju" class="fa fa-hourglass"></i>
              </div>
              <div class="media-body">
                <h2>Kids</h2>
                <p>ADHD is most common in children, causing several issues with school and learning</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div class="media block-6 services d-block">
              <div class="icon">
                <i id="adjudif" class="fa fa-male"></i>
              </div>
              <div class="media-body">
                <h2>Adults</h2>
                <p>Adults suffer in the real world, combatting with ADHD.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div class="media block-6 services d-block">
              <div class="icon">
                <i id="adjudiff" class="fa fa-users"></i>
              </div>
              <div class="media-body">
                <h2>Families</h2>
                <p>Everyday families struggle with the effects of ADHD.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="num_sec" class="container-fluid">
    <p id="nums" class="display-4">Numbers Help Us Know More</p>
  <div class="fact-area">
    <div id="showit" class="container">
      <div class="fact-box">
        <div class="row align-items-center">
          <div class="col single-fact">
            <h2>6.4M</h2>
            <p>Childeren with ADHD</p>
          </div>
          <div class="col single-fact">
            <h2>42%</h2>
            <p>More in past 8 years</p>
          </div>
          <div class="col single-fact">
            <h2>7Y</h2>
            <p>Average age</p>
          </div>
          <div class="col single-fact">
            <h2>14,576$</h2>
            <p>AVerage cost per person</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3">© ADHD Org 2019 Copyright</div>
  </footer>

    <!-- <b-jumbotron header="ADHD Eye" lead="Test your attention span">
      <button class="md-start" data-modal="modal-12" v-on:click="countdown(), getEyeCoords()">Start</button>
      <button class="md-stop" data-modal="modal-12" v-on:click="stop()" style="visiblity:hidden;">Restart</button>
    </b-jumbotron>


<div class="md-modal md-effect-12">
    <div class="md-content">
        <div>
            <div data-aos-delay="500" class="countdown">
              <span class="countdown__number">6</span>
              <svg class="countdown__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 130 130" overflow="visible" enable-background="new 0 0 130 130">
                <path class="countdown__icon__circle" d="M5,64.8a59.8,59.8 0 1,0 119.6,0a59.8,59.8 0 1,0 -119.6,0"/>
              </svg>
            </div>
        </div>
    </div>
</div> -->



  </div>
</template>

<script>
import $ from 'jquery'
import { TimelineMax } from 'gsap'

export default {
  name: 'home',
  components: {
  },
  mounted() {
  },
  methods: {
    getEyeCoords() {
        var a = 5;
        var arr = [];
        let point = new Point(x, y)
        arr.add(point);
        while (a > 1) {
        Thread.sleep(200);
        point = MouseInfo.getPointerInfo().getLocation();
        console.log(point);
        arr.add(point);
          if (arr.get(1).getX() == arr.get(0).getX()) {
            System.out.println("You looked off the screen");
            x = -5;
          }
        arr.remove(0);
        }
    },
    countdown() {
      $('.md-modal').addClass('md-show');
      $('.md-start').remove();
      var $circleBorder = $('.countdown__icon__circle').get(0);
      var $countdown = $('.countdown');

      var length = $circleBorder.getTotalLength();
      var counter = {
        var: 6
      };

      var tl = new TimelineMax({
        repeat: 1,
      });

      tl.play();

      tl.set($countdown, {
          scale: 0,
        }).to($countdown, 0.4, {
          scale: 1,
          ease: Back.easeOut.config(1.4),
        }).to($circleBorder, 6, {
          strokeDashoffset: length,
          stroke: '#FB7593',
          ease: Power0.easeNone
        }).to(counter, 6, {
          var: 0,
          onUpdate: function() {
            $('.countdown__number').html(Math.ceil(counter.var));
          },
          ease: Power0.easeNone
        }, '-= 6')
        .to($countdown, 0.4, {
          scale: 0,
          ease: Back.easeIn.config(1.4),
          onComplete: function() {
            $('.countdown__number').html('6');
          }
        });

      },
    stop() {
      // $('.md-modal').remove();
      // $('.md-stop').style.visiblity="visible !important";
      window.location.reload();
    },
  }
    }
</script>

<style lang="scss">
$green: #76E19E;
$white: #FFF;
$red: #FB7593;
$yellow: #FFD05C;
$white-broken: #E7E9F2;
$body-bg: $white-broken;

.md-modal {
  margin: auto;
	position: fixed;
	top: 100px;
	left: 0;
  right: 0;
	width: 50%;
	max-width: 630px;
	min-width: 320px;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
}

.md-show {
	visibility: visible;
}

.md-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
  background-color: rgba(0,0,0,.0001) !important;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show ~ .md-overlay {
	opacity: 1;
	visibility: visible;
}

.md-effect-12 .md-content {
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	-ms-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show.md-effect-12 ~ .md-overlay {
	background-color: #e4f0e3;
}

.md-effect-12 .md-content h3,
.md-effect-12 .md-content {
	background: transparent;
}

.md-show.md-effect-12 .md-content {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

/**
 * Demo Styles
 */
%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  box-sizing: border-box;
}



/**
 * Countdown Styles
 */

.countdown {
  @extend %flex-center;
  position: relative;
  width: 174px;
  height: 174px;
  border-radius: 50%;
  background-color: #121B1C;
  background-size: cover;
  background-position: center center;
  border: 3px solid grey;
  transform-origin: center bottom;
}

.countdown__icon {
  position: absolute;
  top: -6px;
  left: -6px;
  width: 180px;
  fill: transparent;
  stroke: $green;
  stroke-width: 10px;
  stroke-linecap: round;
}

.countdown__icon__circle {
  stroke-dasharray: 376.9873229980462;
}

.countdown__number {
  color: $white;
  font-size: 40px;
}

html {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }

.logo {
  width: 50%; }

.container {
  background-image: transparent;
  position: sticky; }

.logo {
  width: 50%; }

body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.logo {
  width: 50%;
}

.container {
  background-image: transparent;
  position: sticky;
}

.header {
  height: 98vh;
  background-image: linear-gradient(rgba(248, 209, 243, 0.5), rgba(121, 174, 253, 0.5)), url("https://www.thenational.ae/image/policy:1.719801:1523202284/lf09-APR-fitness.jpg?f=16x9&w=1200&$p$f$w=5dce02a");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#slogan {
  color: white;
  text-align: center;
  position: relative;
  top: 24%;
  font-weight: 200;
  // font-family: Poppins, sans-serif;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.boxy {
  display: flex;
  justify-content: center;
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
  border-image: linear-gradient(155deg, #fff 0%, #fff 100%) 1 round;
  background: linear-gradient(155deg, #fff 0%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  border-width: 2px;
  position: relative;
  margin-top: 170px !important;

  @media (max-width: 600px) {
    left: 13.6% !important;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
  }
}
#hjhjhj {
    text-align: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    font-weight: bolder;
}
.jfiewj {
    font-weight: 400;
    text-align: center;
    position: relative;
    top: 2%;
    color: #777;
}
#jawkgl {
    padding-right: 50px;
    position: relative;
    bottom: 5%;
    text-align: center;
    justify-content: center;
}
#adju {
    width: 100%;
    font-size: 40px;
    background: -webkit-background-linear-gradient(rgba(248, 209, 243, 0.3), rgba(121, 174, 253, 0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid #fd79a8;
    border-width: 2px;
    border-radius: 100%;
    text-align: center;
    width: 65px;
    height: 64px;
    padding-top: 0.25em;
    padding-bottom: 0.2em;
    color: rgba(121, 174, 253, 1.0);
}
#adjudif {
    width: 100%;
    font-size: 49px;
    background: -webkit-linear-gradient(rgba(224, 86, 253, 0.6), rgba(253, 121, 168, 0.98));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid #fd79a8;
    border-width: 2px;
    border-radius: 100%;
    text-align: center;
    width: 65px;
    height: 64px;
    padding-top: 0.1em;
    padding-bottom: 0.35em;
    color: #fd79a8;
}
#adjudiff {
    width: 100%;
    font-size: 65px;
    background: rgba(121, 174, 253, 0.98);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid #fd79a8;
    border-width: 2px;
    border-radius: 100%;
    width: 65px;
    height: 64px;
    text-align: center;
    justify-content: center;
    color: #fd79a8;
}
.media-body {
    padding-top: 20px;
    text-align: center;
    justify-content: center;
}
.media {
  padding-left: 16px;
  position: relative;
  top: 17%;
}
.img_grabber {
  width: 120%;
  position: relative;
  right: 23%;
  top: 15%;
}

#fisrt {
  padding-top: 60px;
}
.fact-area {
    height: 30vh;
    width: 100%;
    display: inline-block;
    padding: 0 !important;
    margin: 0 !important;
    background-image: url(https://cdn.pixabay.com/photo/2019/05/04/03/52/dalat-4177363_960_720.jpg);
    background-position: center;
    background-size: cover;
    background-respeat: no-repeat;
    background-attachment: fixed;
}
#showit {
    background-color: transparent;
    position: relative;
    top: 10.2%;
}
.fact-box {
    padding: 0 !important;
    margin: 0 !important;
}
.single-fact {
    text-align: center;
    margin: 45px 0;
    padding: 8px 16px;
    border-right: 1px solid #ddd;

    h2 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
    }
    p{
      font-family: Poppins, sans-serif;
      font-weight: 600;
    }
}
#nums {
  text-align: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  padding-bottom: 10px;
  }

#num_sec {
  padding-top: 100px;
}
</style>

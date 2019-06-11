<template>
  <div class="test">
      <!-- <h1>
    X: <span id="x-value"></span>
    </h1>
    <h1>
    Y: <span id="y-value"></span>
    </h1>
    <h1>String Coord:
        <span id="coordinate"></span>
    </h1> -->
      <div id="no" class="alert alert-danger" style="visibility:hidden;">
        You got distracted and started watching the video!
      </div>

<div class="container">
  <div class="row mt-5">
    <div class="mr-2 col-md">
      <h1 data-aos="fade-in" class="display-5">Attempt to Read the Passage Without Getting Distracted</h1>
    <p>Mattie Silver had lived under Ethan’s roof for a year, and from early morning till they met at supper he had frequent chances of seeing her; but no moments in her company were comparable to those when, her arm in his, and her light step flying to keep time with his long stride, they walked back through the night to the farm...As he stood in the darkness outside the church these memories came back with the poignancy of vanished things. Watching Mattie whirl down the floor from hand to hand he wondered how he could ever have thought that his dull talk interested her. 
</p>
    <div class="mt-1">
      <h5> What is the main idea of this passage?</h5>
    </div>
    <form @submit.prevent="getAnswer()">
       <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    >
    </b-form-textarea>
    <input type="submit" value="Submit">
    </form>
     
    </div>
    <div class="ml-2 col-md">
      <!-- <iframe src="https://www.youtube.com/embed/kO5WPKT0690?controls=0&autoplay=1&controls=0&loop=1&showinfo=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kO5WPKT0690?controls=0&autoplay=1&controls=0&showinfo=0&autohide=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      <!-- <iframe data-aos-delay="100" width="560" height="315" src="https://www.youtube-nocookie.com/embed/kO5WPKT0690?controls=0&autoplay=1&controls=0&showinfo=0&autohide=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </div>
  </div>
</div>

    <!-- <div>
      <h1 class="display-3">Gif Generator</h1>

      <form id="query-form" onsubmit="runTimer(query)">
        <label for="query">KEYWORD</label>
        <input name="query" type="text" required>
        <input type="submit" id="button" value="GENERATE">
      </form>
    </div> -->

    <div class="belly"></div>
    <div class="target"></div>

  </div>
</template>

<script>
import $ from 'jquery'



export default {
  name: 'test',
data: function ()  {
  return {
     coordList: [],
  }
},
  mounted() {
    this.pointerPosition();
      this.getVids();
  },
  components: {
  },
  methods: {

      getAnswer() {
        var x = document.getElementById('textarea');
        if (x.includes("mattie" || "sunset")) {
          alert('Howdy');
        } else {
          alert('yeet');
        }
      },
        getVids() {
      var youtube = document.querySelectorAll( ".youtube" );
      for (var i = 0; i < youtube.length; i++) {
        //get thumbnail
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        } (i));

        youtube[i].addEventListener("click", function() {
            var iframe = document.createElement( "iframe" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            //load iframe
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

            this.innerHTML = "";
            this.appendChild( iframe );
        });
      }
        },
    // runTimer = (n) => {
    //   event.preventDefault()
    //   var timeLeft = 3;
    //   var downloadTimer = serInterval(function() {
    //     document.getElementById("belly").src=""
    //     document.getElementById("belly").style.display="none"
    //     document.getElementById("target").style.displau="blow"
    //     document.getElementById("target").innerText= timeleft
    //   })
    // },
    // imgRandPosition() {
    //   var img = document.createElement('img');
    //   img.setAttribute("style", "position:absolute;");
    //   img.setAttribute("src", "assets/some-image.jpg");
    //   document.body.appendChild(img);
    //   var xy = getRandomPosition(img);
    //   img.style.top = xy[0] + 'px';
    //   img.style.left = xy[1] + 'px';
    // },
    // getRandomPosition(element) {
    //   var x = document.body.offsetHeight-element.clientHeight;
    //   var y = document.body.offsetWidth-element.clientWidth;
    //   var randomX = Math.floor(Math.random()*x);
    //   var randomY = Math.floor(Math.random()*y);
    //   return [randomX,randomY];
    // },
    pointerPosition() {
        $(document).ready( function() {
        $(this).on('mousemove', mouse_monitor);
        });
      var mouse_monitor = function(e) {
        var x = e.pageX;
        var y = e.pageY;

        console.log(x, y);
          if (x > 650) {
            document.getElementById('no').setAttribute("style", "visiblility: visible;");
          }
          // if (x < 650) {
          //   document.getElementById('no').setAttribute("style", "visiblility: none;");
          // }
      

        document.getElementById('x-value').innerHTML = x;
        document.getElementById('y-value').innerHTML = y;
        var coord = ("(" + x + "," + y + ")");
        document.getElementById('coordinate').innerHTML = coord;
        var coordList = [];
        coordList.push(coord);

        coordList.pop();
        console.log(coordList);

        if (x > 650) {
          document.getElementById('overlay').addClass('alert alert-success');
        } else if (x < 650) { 
          document.getElementById('overlay').addClass('alert alert-danger');
        }
    }

    },
},

};
</script>


<style lang="scss">
.overlay {
   background-color: rgba(0,0,0,.0001) !important;
     max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
}
  .youtube {
        position: relative;
        height: 280px;
        width: 500px;
        overflow: hidden;
        display: inline-block;
    }
    .youtube img {
        width: 500px;
        top: -16.84%;
    }
    .youtube .play-button {
        width: 90px;
        height: 60px;
        background-color: rgba(255, 88, 88, 0.856);
        z-index: 1;
        border-radius: 6px;
    }
    .youtube .play-button:before {
        content: "";
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #fff;
    }

    .youtube img,
    .youtube, .play-button {
        cursor: pointer;
    }

    .youtube img,
    .youtube iframe,
    .youtube .play-button,
    .youtube .play-button:before {
        position: absolute;
    }
    .youtube .play-button,
    .youtube .play-button:before {
        top: 50%;
        left: 50%;
        transform: translate3d( -50%, -50%, 0 );
    }
    .youtube iframe {
        height: 280px;
        width: 500px;
    }
</style>

<template>
<div class="container">
  <p class="display-3" id="yes">Meet Our Team</p>
    <div class="row">
      <div class="col-md-3 col-sm-5">
        <div class="our-team">
          <img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg">
          <div class="team-content">
            <h3 class="title">Matthew Crooks</h3>
            <span class="post">Web Developer</span>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-5">
        <div class="our-team">
          <img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg">
          <div class="team-content">
            <h3 class="title">Abdullah Ghanima</h3>
            <span class="post">Web Developer</span>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-5">
        <div class="our-team">
          <img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg">
          <div class="team-content">
            <h3 class="title">Omar Abdallah</h3>
            <span class="post">Web Developer</span>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-5">
        <div class="our-team">
          <img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg">
          <div class="team-content">
            <h3 class="title">Mugdhesh Pandkar</h3>
            <span class="post">Web Developer</span>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3">© ADHD Org 2019 Copyright</div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.logo {
  width:50%;
}
#yes {
    color: #222f3e;
    text-align: center;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    position: relative;
    margin: 30px 0 60px;
}
.our-team{
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}
.our-team img{
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: all 1s ease 0s;
}
.our-team:hover img{
    transform: scale(1.2);
}
.our-team .team-content{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#fd79a8, #74b9ff);
    border-radius: 50%;
    padding-top: 35%;
    color: #fff;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-out 0s;
}
.our-team:hover .team-content{
    opacity: 0.8;
}
.our-team .title{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 8px 0;
    opacity: 0;
    transform: rotate(-90deg);
    transition: all 0.3s ease-in-out 0.2s;
}
.our-team:hover .title{
    opacity: 1;
    transform: scale(1);
    transition-delay: 0.1s;
}
.our-team .post{
    display: block;
    font-size: 17px;
    margin-bottom: 15px;
    opacity: 0;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out 0.2s;
}
.our-team:hover .post{
    opacity: 1;
    transform: scale(1);
}
.our-team .icon{
    padding: 0;
    margin: 0;
    list-style: none;
}
.our-team .icon li{
    display: inline-block;
}
.our-team .icon li a{
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 18px;
    color: #fff;
    margin-right: 6px;
    transition: all 0.3s ease 0s;
}
.our-team .icon li a:hover{
    background: #e6af2e;
    border: 1px solid #e6af2e;
}
@media only screen and (max-width: 990px){
    .our-team{ margin-bottom: 30px; }
}
#explain {
  padding-top: 75px;
}
#grabber {
  height: 87vh;
  background-image: url('https://drscdn.500px.org/photo/142651941/q%3D80_m%3D1500_k%3D1/v2?webp=true&sig=e48b36705932f95320a41fa046305cc9f2d0b31d845058386073f6d2595824fe');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#purpose {
  font-weight: 600;
  font-family: Poppins, sans-serif;
  text-align: center;
  position: relative;
  top:21%;
}
#more {
  font-style: italic;
  font-family: Poppins, sans-serif;
  text-align: center;
  justify-content: center;
  position: relative;
  top: 20%;
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
  border-image: linear-gradient(155deg, #74b9ff 0%, #74b9ff 100%) 1 round;
  background: linear-gradient(155deg, #74b9ff 0%, #74b9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  border-width: 2px;
  margin-top: 150px;
  margin-left: 277px;

  &:hover {
    text-decoration: none;
    color: #00cec9;
  }
}

</style>

const card = `<body id="body" class="theme--dark">
  <input id="menu" type="checkbox">
  <input id="night" type="checkbox">
  <div id="container">
    <div class="header">
      <div class="logo"></div>
      <label class="night-mode" for="night" onclick="enableNight()">
        <i class="fa fa-moon-o"></i>
      </label>
    </div>
    <section class="left-section">
      <img class="profile-pic" src="https://avatars.githubusercontent.com/u/49487927?v=4" />
      <div class="profile-detail">
        <span class="profile-maps">
        <i class="fa fa-map-marker"></i>Rajasthan, India </span>
        <p class="profile-name">Pradeep Suthar</p>
        <span class="profile-summary">Developer, Algorithm Enthusiast and Artist</span>
        <a class="profile-cv" href="#">Download CV</a>
      </div>
      <div class="profile-pils">
        <span class="pils">
          <a href="https://twitter.com/pradeep_thar" target="_blank">
            <i class="fa fa-twitter"></i> Twitter </a>
        </span>
        <span class="pils">
          <a href="https://github.com/sutharp777/" target="_blank">
            <i class="fa fa-github"></i> Github </a>
        </span>
        <span class="pils">
          <a href="https://dribbble.com/pradeep" target="_blank">
            <i class="fa fa-dribbble"></i> Dribble </a>
        </span>
        <span class="pils">
          <a href="https://www.linkedin.com/in/pradeep-swe/" target="_blank">
            <i class="fa fa-linkedin"></i> Linkedin </a>
        </span>
      </div>
    </section>
    <div class="front-smooth"></div>
  </div>
  <script src="welcome.js"></script>
  <script src="card.js"></script>
</body>`

let enableNight = () => {
    var body = document.getElementById("body");
  
    if (body.classList.contains('theme--light')){
        body.classList.remove('theme--light');
        body.classList.add('theme--dark');
    }else{
        body.classList.remove('theme--dark');
        body.classList.add('theme--light');
    }
}

setTimeout(function(){
    document.querySelector("body").outerHTML = card
    enableNight()
},7500)

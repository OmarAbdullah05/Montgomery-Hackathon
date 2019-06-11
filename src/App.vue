<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img class="logo" src="https://image.flaticon.com/icons/png/128/478/478533.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/test">Test</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/training">Training</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/about">About</a>
        </li>
      </ul>
    </div>
  </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.logo {
  width: 50%;
}
nav {
  background-image: transparent;
}
.header {
  height: 90vh;
  background-image: linear-gradient( rgba(243, 104, 224,0.5), rgba(253, 121, 168,0.5)), url('');
}

</style>

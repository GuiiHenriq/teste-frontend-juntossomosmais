<template>
  <div id="app">
    <header class="header">
      <div class="header__logo">
        <router-link :to="{ path: '/'}">
          <img src="./assets/logo.svg" alt="Juntos Somos Mais" />
        </router-link>
      </div>

      <UserSearch />
    </header>
    
    <transition mode="out-in">
      <router-view/>
    </transition>

    <footer class="footer">
      <img class="footer__logo" src="./assets/logo.svg" alt="Juntos Somos Mais">
      <h2>Juntos Somos Mais Fidelização S.A.</h2>
      <p>Siga-nos em nossas redes sociais:</p>
      <div class="footer__social">
        <a href="#">
          <img src="./assets/ico-facebook.svg" alt="Facebook">
        </a>

        <a href="#">
          <img src="./assets/ico-linkedin.svg" alt="Linkedin">
        </a>

        <a href="#">
          <img src="./assets/ico-whatsapp.svg" alt="WhatsApp">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import UserSearch from "./components/UserSearch";

export default {
  name: 'App',
  components: {
    UserSearch
  },
  data() {
    return {
      querySearch: '',
    };
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap');

body {font-family: "Nunito", Helvetica, Arial, sans-serif;color: #345;background: url("./assets/pattern.svg") repeat top;}

/* ================= Reset ================= */
* {box-sizing: border-box;}

body,
ul,
li,
h1,
h2,
p {padding: 0px;margin: 0px;}

ul {list-style: none;}

input, textarea, button {border: none;background: none;}

a {color: #345;text-decoration: none;}


#app {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  width: 100%;
  margin: 50px 0 80px 0;

  &__logo {
    width: 30%;
    display: flex;
    justify-content: center;

    a {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    img {
      max-width: 160px;
    }
  }
}

.footer {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  background: #FFFFFF;
  box-shadow: 0 -21px 36px -27px rgba(30, 60, 90, 0.2);

  &__logo {
    max-width: 160px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 15px;
    font-size: 20px;
  }
  
  &__social {
    margin-top: 15px;
    display: flex;

    a {
      background-color: #4E71A7;
      width: 44px;
      height: 44px;
      display: flex;
      border-radius: 50%;
      margin: 0 10px;
      justify-content: center;
      align-items: center;
    }
  }
}


/* ================= Responsive ================= */
@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;

    &__logo {
      width: 100%;
      margin-bottom: 15px;
    }
  }
}


/* ============ Keyframes Loading ============ */
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

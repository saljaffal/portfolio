const App = {};

App.switch = document.querySelector(".theme");

App.darkmode = () => {

  App.switch.addEventListener("click", function() {

    document.querySelector( "body" ).classList.toggle( "dark" );
    localStorage.setItem('dark',document.querySelector("body").classList.contains('dark'));    
});
}

App.init = () => {

  if (localStorage.getItem('dark') === 'true') {
    document.querySelector( "body" ).classList.add( "dark" );
  }

  App.darkmode();
  
}

window.addEventListener('load', (event) => {
  AOS.init();
  App.init();
});

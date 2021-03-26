const App = {};

App.switch = document.querySelector('.theme');
App.bodyClass = document.querySelector( 'body' ).classList; 

App.darkMode = () => {

  // const illustration = document.querySelector('.illustration');

  App.switch.addEventListener('click', function() {

    App.bodyClass.toggle( 'dark' );
    localStorage.setItem('dark',App.bodyClass.contains('dark'));    
});
}


App.scrollUp = () => {
  let scrollToTopBtn = document.querySelector('.scrollToTopBtn')
  let rootElement = document.documentElement
  let TOGGLE_RATIO = 0.80

  function handleScroll() {
    // do something on scroll
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
      //show button
      scrollToTopBtn.classList.add('showBtn')
    } else {
      //hide button
      scrollToTopBtn.classList.remove('showBtn')
    }
  }

  function scrollToTop() {
    //scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  scrollToTopBtn.addEventListener('click', scrollToTop)
  document.addEventListener('scroll', handleScroll)
}

App.smoothScroll = () => {
  const links = document.querySelectorAll('nav ul a');
 
  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }
   
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

App.init = () => {

  if (localStorage.getItem('dark') === 'true') {
    App.bodyClass.add( 'dark' );
  }

  App.darkMode();
  // App.typeEffect();
  App.scrollUp();
  App.smoothScroll();
  console.log(`My Resume https://cutt.ly/LxGt5SG`);
  
}

window.addEventListener('load', (event) => {
  AOS.init();
  App.init();
});

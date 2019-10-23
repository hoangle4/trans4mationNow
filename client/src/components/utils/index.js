export default {
  NavBarAnimation: () => {
    window.addEventListener('scroll', e => {
      const landing = document.querySelector('#root');
      const navbar = document.querySelector('.Navbar');
      const navbarLogo = document.querySelector('.Navbar_logo');
      if (landing) {
        if (landing.getBoundingClientRect().y !== 0) {
          navbar.style.background = 'rgba(7, 163, 178, 1)';
          navbarLogo.style.width = '75px';
          navbarLogo.style.transform = 'translateX(25px)';
        } else {
          navbar.style.background = 'rgba(7, 163, 178, 0.5)';
          navbarLogo.style.width = '50px';
          navbarLogo.style.transform = 'translateX(0)';
        }
      }
    });
  }
};

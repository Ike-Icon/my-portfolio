const images = [
    // '/assets/images/header/programming-g.jpg',
    '/assets/images/header/portfolio-back-2.jpg',
    '/assets/images/header/header-back.png',
    '../assets/images/header/header-back-2.jpg',
    '../assets/images/header/header-back-1.jpg',
    '../assets/images/header-back-1.jpg'
    
  ];
  
  let i = 0;
  const slideshowImg = document.querySelector('.slideshow-img');
  slideshowImg.style.backgroundImage = `url(${images[i]})`;
  
  function changeImage() {
    i = (i + 1) % images.length;
    slideshowImg.style.opacity = '0';
    setTimeout(() => {
      slideshowImg.style.backgroundColor = "#333";
      slideshowImg.style.backgroundImage = `url(${images[i]})`;
      slideshowImg.style.opacity = '1';
    }, 3000);
  }
  
  setInterval(() => {
    changeImage();
  }, 7000);
  

const originalImageSrc = "images/pagetop.png";
const clickedImageSrc = "images/pagetop2.png";


window.onscroll = function() {
  const button = document.getElementById("backToTopButton");
  const buttonImage = document.getElementById("topButtonImage");

  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    button.classList.add("visible");  
  } else {
    button.classList.remove("visible"); 
    buttonImage.src = originalImageSrc; 
  }
};


document.getElementById("backToTopButton").onclick = function(event) {
  event.preventDefault(); 

  const buttonImage = document.getElementById("topButtonImage");
  buttonImage.src = clickedImageSrc; 

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


  window.setTimeout(function() {
    buttonImage.src = originalImageSrc;
  }, 1000); 
};

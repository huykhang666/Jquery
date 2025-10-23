$(document).ready(function(){
  const $container = $(".carousel__container");
  const $items = $(".carousel__item");
  const total = $items.length;
  const angle = 360 / total;
  let current = 0;

  
  $items.each(function(i){
    const rotation = i * angle;
    $(this).css("transform", `rotateY(${rotation}deg) translateZ(300px)`);
  });

  // Hàm xoay carousel
  function rotateCarousel() {
    const rotationY = current * -angle;
    $container.css("transform", `rotateY(${rotationY}deg)`);
  }


  $(".right").click(function(){
    current++;
    rotateCarousel();
  });

  $(".left").click(function(){
    current--;
    rotateCarousel();
  });

//   // Tự động xoay
//   setInterval(function(){
//     current++;
//     rotateCarousel();
//   }, 3000);
});

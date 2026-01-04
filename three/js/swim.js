let amplitude = 150;
let frequency = 1.3 * Math.PI / 1300;
let xPos;
let direction = -1;
let speed = 4;

function hama() {
  let $hamaruka = $('#hamaruka_swim');
  let containerWidth = $('.swim').width();

  xPos = containerWidth - $hamaruka.width();

  function move() {
    xPos += speed * direction;

    let yPos = amplitude * Math.sin(frequency * xPos) + 100;

    $hamaruka.css({
      left: xPos + 'px',
      top: yPos + 'px',
      transform: `scaleX(${-direction})` // 逆方向の制御
    });

    if (xPos > containerWidth - $hamaruka.width() || xPos < 0) {
      direction *= -1;
    }

    requestAnimationFrame(move);
  }

  move();
}

$(function () {
  hama();
});

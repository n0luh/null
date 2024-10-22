const mainSprite = document.getElementById('main-sprite');
const spriteContainer = document.getElementById('sprite-container');

// Parallax effect based on mouse movement
document.addEventListener('mousemove', (event) => {
  const x = (event.clientX - window.innerWidth / 2) / 100;
  const y = (event.clientY - window.innerHeight / 2) / 100;
  mainSprite.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// Function to create invisible sprites that move up and fade out
function spawnInvisibleSprite() {
  const sprite = document.createElement('div');
  sprite.classList.add('sprite-invisible');
  
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  
  sprite.style.left = `${randomX}px`;
  sprite.style.top = `${randomY}px`;
  
  spriteContainer.appendChild(sprite);
  
  // Remove the sprite after the animation ends
  sprite.addEventListener('animationend', () => {
    sprite.remove();
  });
}

// Spawn invisible sprites at random intervals
setInterval(spawnInvisibleSprite, 1000);

'use strict';

{
  const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drower-nav");
  nav.classList.toggle('in');
});

}
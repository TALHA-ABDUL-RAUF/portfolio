export function scrollReveal() {
  const reveals = document.querySelectorAll('.group');
  function animate() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('opacity-100', 'translate-y-0');
        reveals[i].classList.remove('opacity-0', 'translate-y-10');
      }
    }
  }
  window.addEventListener('scroll', animate);
  animate(); // trigger on load
}
reveals[i].classList.add('opacity-100', 'translate-y-0');
reveals[i].classList.remove('opacity-0', 'translate-y-10');

// Roles for typing animation
const roles = [
    "Full Stack Developer",
    "CSM Graduate",
    "Self Learner",
    "Enthusiastic Developer"
  ];
  
  let roleIndex = 0;
  let charIndex = 50;
  const typeSpeed  = 120;
  const eraseSpeed = 0;
  const delay      = 50;
  const roleEl     = document.getElementById("role");
  
  // Typewriter
  function typeRole(){
    if(charIndex < roles[roleIndex].length){
      roleEl.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeRole, typeSpeed);
    } else {
      setTimeout(eraseRole, delay);
    }
  }
  function eraseRole(){
    if(charIndex > 0){
      roleEl.textContent = roles[roleIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(eraseRole, eraseSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typeSpeed);
    }
  }
  
  // Section switcher (with fade transition)
  function showSection(sectionId){
     document.querySelectorAll('.section').forEach(sec=>{
       sec.style.display='none';
       sec.style.opacity = 0;
     });
     const active = document.getElementById(sectionId);
     active.style.display='block';
     setTimeout(()=> active.style.opacity = 1, 30);
  }
  
  // Initialize portfolio (default page = home)
  function initPortfolio(){
    //showSection('home');
    typeRole();
  }
  window.onload = initPortfolio;

  
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});


// Select the sphere container
const sphere = document.querySelector('.dot-sphere');

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", () => {
    const aboutCard = document.getElementById("about-card");
  
    aboutCard.addEventListener("click", () => {
      if (!aboutCard.classList.contains("expanded")) {
        aboutCard.classList.add("expanded");
        aboutCard.innerHTML = `
          <span class="about-text">
            I am a highly skilled developer with extensive experience, I worked with a number of companies, I have completed more than 50 web projects individually. I pride myself on my problem-solving mindset and my attention to detail. My career goals include continuing to grow as a Full-Stack expert while exploring new areas in web development.
          </span>
        `;
      }
    });
  });


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function showContactDetails() {
    if (confirm("Are you sure you want to view the contact information?")) {
      window.open('https://wa.me/9719070084?text=Hi,%20I%20would%20like%20to%20discuss%20a%20Project%20with%20you.', '_blank');
    }
}

function scrollToExperience() {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToContacts() {
  const contactsSection = document.getElementById('contact');
  if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

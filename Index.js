const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-Ul');

hamburger.addEventListener('click' , () => {
  navUl.classList.toggle('show');
});

const resumeButton = document.getElementById('resume-button');
resumeButton.addEventListener('click', function(event) {
    event.preventDefault();
    const resumeFilePath = 'Images/VASANTH R.pdf';
    window.open(resumeFilePath, '_blank');
});

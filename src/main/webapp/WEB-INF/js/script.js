function showSection(sectionId,buttonElement) {
  // First Hide all sections
  var sections = document.getElementsByClassName('content-section');
  
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Remove active class from all buttons
  var buttons = document.getElementsByClassName('nav-link');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';

  // Add active class to the clicked button
  buttonElement.classList.add('active');
}



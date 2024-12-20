function showSection(sectionId) {
    const sections = document.querySelectorAll('.app-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Ensure the first section is displayed initially
document.addEventListener("DOMContentLoaded", function() {
    showSection('instructor'); 
});

document.getElementById('instructor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionFeedback = document.getElementById('sessionFeedback').value;

    // Display an alert with the form data
    alert(`Feedback for ${customerName} on ${sessionDate}:\n\n${sessionFeedback}`);

    this.reset();
});

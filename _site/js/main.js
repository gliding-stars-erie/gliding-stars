// =========================
// NAV TOGGLE
// =========================
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
        toggle.classList.toggle("active");
    });
}


// =========================
// NAV SCROLL BEHAVIOR
// =========================
// On the home page, the logo and navbar background fade in as the user scrolls
// past the hero video. The trigger points differ slightly on mobile vs. desktop.
const body = document.body;
const hero = document.querySelector(".hero");

if (hero) {
    const updateNavState = () => {
        const heroHeight = hero.offsetHeight;
        const isMobile = window.innerWidth <= 767;

        const logoTrigger = isMobile
            ? heroHeight * 0.5
            : heroHeight * 0.68;

        const bgTrigger = heroHeight - 80;

        body.classList.toggle("scrolled", window.scrollY > logoTrigger);
        body.classList.toggle("nav-solid", window.scrollY > bgTrigger);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState);
    window.addEventListener("resize", updateNavState);
}


// =========================
// REDIRECT MEMORY
// =========================
// Stores the current path in sessionStorage so the 404 page can offer
// a "go back" link if the user lands on a broken URL.
if (location.pathname !== "/" && !location.pathname.endsWith(".html")) {
    sessionStorage.setItem("redirect", location.pathname);
}


// =========================
// GALLERY (CAROUSEL + LIGHTBOX)
// =========================
const carousels = document.querySelectorAll(".gallery-carousel");

if (carousels.length) {

    // Carousel scroll buttons
    carousels.forEach(carousel => {
        const track = carousel.querySelector(".gallery-track");
        const nextBtn = carousel.querySelector(".next");
        const prevBtn = carousel.querySelector(".prev");

        if (!track || !nextBtn || !prevBtn) return;

        const items = Array.from(track.querySelectorAll(".gallery-item"));
        if (!items.length) return;

        let currentIndex = 0;

        const updateArrows = () => {
            prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
            nextBtn.style.visibility = currentIndex === items.length - 1 ? "hidden" : "visible";
        };

        // Scroll the track to a specific item. Uses getBoundingClientRect so
        // the target position is always exact — no accumulated rounding drift.
        const goTo = (index) => {
            currentIndex = Math.max(0, Math.min(index, items.length - 1));
            const itemLeft = items[currentIndex].getBoundingClientRect().left;
            const trackLeft = track.getBoundingClientRect().left;
            track.scrollTo({ left: track.scrollLeft + (itemLeft - trackLeft), behavior: "smooth" });
            updateArrows();
        };

        // Keep index in sync after user swipes manually.
        track.addEventListener("scrollend", () => {
            const trackLeft = track.getBoundingClientRect().left;
            let nearest = 0;
            let minDist = Infinity;
            items.forEach((item, i) => {
                const dist = Math.abs(item.getBoundingClientRect().left - trackLeft);
                if (dist < minDist) { minDist = dist; nearest = i; }
            });
            currentIndex = nearest;
            updateArrows();
        });

        nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
        prevBtn.addEventListener("click", () => goTo(currentIndex - 1));

        updateArrows();
    });

    // Lightbox: click a gallery image to open it full-screen
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");

    if (lightbox && lightboxImg && lightboxCaption && closeBtn) {

        document.querySelectorAll(".gallery-item img").forEach(img => {
            img.addEventListener("click", () => {
                lightbox.classList.add("active");
                lightboxImg.src = img.dataset.full;
                lightboxImg.alt = img.alt;
                lightboxCaption.innerHTML = img.dataset.credit || "";
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });

        // Clicking the dark backdrop also closes the lightbox
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }
}

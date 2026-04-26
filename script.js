/* =============================================
   CLASSIC CELEBRATION — Premium Interaction Logic
   ============================================= */

// ── GLOBAL STATE ──
let particles = [];
let celebrationData = [
    { 
        title: "Golden Radiance",
        img: 'IMG-20260422-WA0004%20-%20Abinaya.jpg', 
        wish: "HAPPY 18TH BIRTHDAY, DIVYA! ✨", 
        note: "Watching you grow into this amazing, confident 18-year-old has been one of the greatest privileges of our lives. You carry a light within you that brightens even the darkest rooms." 
    },
    { 
        title: "A Dreamer's Journey",
        img: 'IMG-20260422-WA0005%20-%20Abinaya.jpg', 
        wish: "Level 18 Unlocked: New adventures! 🚀", 
        note: "Adulthood looks absolutely stunning on you! As you step into this new chapter, remember that you possess the strength and wisdom to conquer every challenge." 
    },
    { 
        title: "Laughter & Love",
        img: 'IMG-20260422-WA0006%20-%20Abinaya.jpg', 
        wish: "A year full of love and laughter. 💖", 
        note: "In every photograph, your pure joy shines through and reminds us of why we cherish you so much. May your heart always find reasons to sing." 
    },
    { 
        title: "Eternal Brilliance",
        img: 'IMG-20260422-WA0007%20-%20Abinaya.jpg', 
        wish: "The best is yet to come! 🌟", 
        note: "The journey you've traveled so far has been beautiful, but the best parts are just beginning. Your 18th birthday is a launchpad for your dreams." 
    },
    { 
        title: "Pure Gold Spirit",
        img: 'IMG-20260422-WA0008%20-%20Abinaya.jpg', 
        wish: "Keep shining like gold. 💎", 
        note: "True gold doesn't tarnish, and neither does your magnificent spirit. Stay as brilliant and bold as you are today." 
    }
];

let specialNotesData = [
    { title: "Golden Radiance", img: 'IMG-20260422-WA0010%20-%20Abinaya.jpg', wish: "HAPPY 18TH BIRTHDAY, DIVYA! ✨", note: "Watching you grow into this amazing, confident 18-year-old has been one of the greatest privileges of our lives." },
    { title: "A Dreamer's Journey", img: 'IMG-20260422-WA0013%20-%20Abinaya.jpg', wish: "Level 18 Unlocked: New adventures! 🚀", note: "Adulthood looks absolutely stunning on you! The world is finally within your reach." },
    { title: "Laughter & Love", img: 'IMG-20260422-WA0003%20-%20Abinaya.jpg', wish: "A year full of love and laughter. 💖", note: "In every photograph, your pure joy shines through. Cheers to 18 years of being sunshine." },
    { title: "Eternal Brilliance", img: 'IMG-20260422-WA0007%20-%20Abinaya.jpg', wish: "The best is yet to come! 🌟", note: "Your 18th birthday is a launchpad for all the incredible things you've always achieved in your heart." },
    { title: "Pure Gold Spirit", img: 'IMG-20260422-WA0014%20-%20Abinaya.jpg', wish: "Keep shining like gold. 💎", note: "You are a rare gem in a world of stones, and your integrity is what makes you truly beautiful." },
    { title: "Success & Courage", img: 'IMG-20260422-WA0004%20-%20Abinaya.jpg', wish: "Success in every step. 🕊️", note: "Never be afraid to take the path less traveled, for that is often where the most beautiful treasures are hidden." },
    { title: "Heart of Wonder", img: 'IMG-20260422-WA0005%20-%20Abinaya.jpg', wish: "A beautiful soul. 🎂", note: "You have lived your first 18 years with so much heart, passion, and wonder. Stay as magical as you are." },
    { title: "Skyward Aspirations", img: 'IMG-20260422-WA0006%20-%20Abinaya.jpg', wish: "Fly high, explore the world. 🗺️", note: "Don't let anything hold you back, for you were born to soar high above the clouds." },
    { title: "Whispers of Dreams", img: 'IMG-20260422-WA0008%20-%20Abinaya.jpg', wish: "May your dreams come true. 🌙", note: "Every late-night wish and secret ambition... we hope they all find their way to you this year." },
    { title: "Legendary Milestones", img: 'IMG-20260422-WA0007%20-%20Abinaya.jpg', wish: "Raising a glass to you! 🥂", note: "You are a legend in the making, and we are just lucky enough to be part of your story." },
    { title: "Endless Affection", img: 'IMG-20260422-WA0009%20-%20Abinaya.jpg', wish: "You are deeply loved. ❤️", note: "If there is one truth you should carry with you into adulthood, it is this: you are profoundly loved." }
];

let homeCelebrationData = [
    { title: "Wisdom of Age", img: 'IMG-20260422-WA0010%20-%20Abinaya.jpg', wish: "Intelligence without ambition is a bird without wings.", note: "As you step into 18, remember that your mind is your greatest asset. Cultivate your curiosity as much as your courage." },
    { title: "The Path Ahead", img: 'IMG-20260422-WA0013%20-%20Abinaya.jpg', wish: "Your time is limited, so don't waste it living someone else's life.", note: "This year, start building the life YOU want. You have the steering wheel now, Divya." },
    { title: "Inner Strength", img: 'IMG-20260422-WA0003%20-%20Abinaya.jpg', wish: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", note: "Never forget the strength you've shown to get here. You are more powerful than you know." },
    { title: "Bold Beginnings", img: 'IMG-20260422-WA0007%20-%20Abinaya.jpg', wish: "Fortune favors the bold.", note: "Take risks this year. Try things that scare you. Growth lives just outside your comfort zone." }
];

let currentMode = 'grand'; // 'grand' or 'home'

window.openHomeCelebration = () => {
    currentMode = 'home';
    const slideshow = document.getElementById('slideshow');
    if (slideshow) {
        slideshow.innerHTML = '';
        homeCelebrationData.forEach((data, index) => {
            const slide = document.createElement('div');
            slide.className = `celebration-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <div class="slide-img-wrap">
                    <img src="${data.img}">
                </div>
                <div class="slide-content-wrap">
                    <div class="milestone-badge">Inspiration</div>
                    <h3 class="slide-wish">${data.wish}</h3>
                    <p class="slide-note">${data.note}</p>
                </div>
            `;
            slideshow.appendChild(slide);
        });
    }
    window.celebrate();
};

// ── PARTICLE ENGINE ──
class Particle {
    constructor(isSparkle = true) {
        const canvas = document.getElementById('canvas');
        this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
        this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.5 ? '#B8860B' : '#D4AF37';
        this.opacity = Math.random();
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.isSparkle = isSparkle;
    }
    update(mouse) {
        if (this.isSparkle && mouse && mouse.x) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
                let force = (150 - distance) / 150;
                this.x -= (dx / distance) * force * this.density;
                this.y -= (dy / distance) * force * this.density;
            } else {
                if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
                if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
            }
        } else {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.01;
        }
    }
    draw(ctx) {
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.createConfetti = (x, y, count = 30) => {
    for (let i = 0; i < count; i++) {
        const p = new Particle(false);
        p.x = x; p.y = y;
        p.speedX = (Math.random() - 0.5) * 15;
        p.speedY = (Math.random() - 0.5) * 15;
        p.size = Math.random() * 5 + 2;
        p.opacity = 1;
        particles.push(p);
    }
};

// ── INTERACTION HANDLERS ──
window.unlockMagic = () => {
    const countdownElem = document.getElementById('countdown');
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');
    const zoomText = document.getElementById('zoom-text');
    const music = document.getElementById('bg-music');

    if (enterBtn) enterBtn.style.display = 'none';
    if (countdownElem) countdownElem.style.display = 'none';

    if (zoomText) {
        zoomText.classList.add('active');
    }

    if (music) {
        music.volume = 0.6;
        music.play().catch(e => console.error("Audio error:", e));
        const icon = document.getElementById('music-icon');
        if (icon) icon.textContent = '🎵';
    }

    window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 400);

    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('hidden');
            splashScreen.style.display = 'none';
        }
        window.celebrate();
    }, 3000); // Wait for zoom-out-fade animation (3s)
};

window.celebrate = () => {
    const overlay = document.getElementById('celebration-overlay');
    const grandWish = document.getElementById('grand-wish');
    const heartfeltWish = document.getElementById('heartfelt-wish');
    const slideshow = document.getElementById('slideshow');
    const nav = document.getElementById('slideshow-nav');

    if (overlay) {
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex';
        
        if (currentMode === 'home') {
            if (grandWish) grandWish.style.display = 'none';
            if (heartfeltWish) heartfeltWish.style.display = 'none';
            if (slideshow) {
                slideshow.classList.remove('hidden');
                slideshow.style.display = 'flex';
            }
            if (nav) {
                nav.classList.remove('hidden');
                nav.style.display = 'flex';
            }
            window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 200);
            return;
        }

        // Hide slideshow and nav initially for grand mode
        if (slideshow) {
            slideshow.classList.add('hidden');
            slideshow.style.display = 'none';
        }
        if (nav) {
            nav.classList.add('hidden');
            nav.style.display = 'none';
        }

        // Phase 1: Grand Wish (5 Seconds)
        if (grandWish) {
            grandWish.classList.remove('fade-out', 'hidden');
            grandWish.style.display = 'flex';
        }

        window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 200);

        setTimeout(() => {
            // Fade out Grand Wish
            if (grandWish) grandWish.classList.add('fade-out');
            
            setTimeout(() => {
                if (grandWish) grandWish.style.display = 'none';
                
                // Phase 2: Heartfelt Wish (5 Seconds)
                if (heartfeltWish) {
                    heartfeltWish.classList.remove('hidden');
                    heartfeltWish.style.display = 'flex';
                    window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 150);
                }

                setTimeout(() => {
                    // Fade out Heartfelt Wish
                    if (heartfeltWish) heartfeltWish.classList.add('fade-out');

                    setTimeout(() => {
                        if (heartfeltWish) heartfeltWish.style.display = 'none';
                        
                        // Phase 3: Slideshow
                        if (slideshow) {
                            slideshow.classList.remove('hidden');
                            slideshow.style.display = 'flex';
                        }
                        if (nav) {
                            nav.classList.remove('hidden');
                            nav.style.display = 'flex';
                        }
                        window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 100);
                    }, 800);
                }, 30000); // 30 seconds for Heartfelt Wish

            }, 800); // Wait for Grand Wish fade-out
        }, 5000); // 5 seconds for Grand Wish
    }
};

window.finishCelebration = () => {
    const overlay = document.getElementById('celebration-overlay');
    const appContainer = document.querySelector('.app-container');
    if (overlay) overlay.style.display = 'none';
    if (appContainer) {
        appContainer.classList.remove('hidden');
        appContainer.style.display = 'block';
        window.startScrollReveals();
        window.scrollTo(0, 0);
    }
    window.createConfetti(window.innerWidth / 2, window.innerHeight / 2, 150);
};

window.closeCelebration = () => window.finishCelebration();

window.changeSlide = (dir) => {
    const slides = document.querySelectorAll('.celebration-slide');
    if (!slides.length) return;
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    
    // If on last slide and clicking next, finish
    if (dir === 1 && current === slides.length - 1) {
        window.finishCelebration();
        return;
    }

    slides[current].classList.remove('active');
    let next = (current + dir + slides.length) % slides.length;
    slides[next].classList.add('active');
};

window.toggleMusic = () => {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (!music) return;
    if (music.paused) { music.play(); if (icon) icon.textContent = '🎵'; }
    else { music.pause(); if (icon) icon.textContent = '🔇'; }
};

window.openPhotoNotes = () => {
    const overlay = document.getElementById('photo-notes-overlay');
    if (overlay) { overlay.classList.remove('hidden'); overlay.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
};

window.closePhotoNotes = () => {
    const overlay = document.getElementById('photo-notes-overlay');
    if (overlay) { overlay.classList.add('hidden'); overlay.style.display = 'none'; document.body.style.overflow = 'auto'; }
};

const heroImages = [
    'IMG-20260422-WA0010%20-%20Abinaya.jpg',
    'IMG-20260422-WA0013%20-%20Abinaya.jpg',
    'IMG-20260422-WA0003%20-%20Abinaya.jpg',
    'IMG-20260422-WA0007%20-%20Abinaya.jpg',
    'IMG-20260422-WA0014%20-%20Abinaya.jpg'
];
let currentHeroIndex = 0;

window.changeHeroImage = () => {
    const heroImg = document.getElementById('hero-img');
    if (!heroImg) return;
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    heroImg.style.opacity = 0;
    setTimeout(() => {
        heroImg.src = heroImages[currentHeroIndex];
        heroImg.style.opacity = 1;
    }, 300);
};

// ── INITIALIZATION ──
const init = () => {
    const canvas = document.getElementById('canvas');
    const countdownElem = document.getElementById('countdown');
    const music = document.getElementById('bg-music');

    // Start loading music early
    if (music) music.load();

    if (canvas) {
        const ctx = canvas.getContext('2d');
        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
        function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        window.addEventListener('resize', resize);
        resize();
        for (let i = 0; i < 100; i++) particles.push(new Particle(true));
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = particles.filter(p => p.opacity > 0 || p.isSparkle);
            particles.forEach(p => { p.update(mouse); p.draw(ctx); });
            requestAnimationFrame(animate);
        }
        animate();
    }

    let splashCount = 5;
    const splashInterval = setInterval(() => {
        splashCount--;
        if (splashCount >= 0) {
            if (countdownElem) countdownElem.textContent = splashCount === 0 ? "✨" : splashCount;
            if (splashCount === 0) {
                clearInterval(splashInterval);
                const btn = document.getElementById('enter-btn');
                if (countdownElem) {
                    countdownElem.classList.add('ready');
                    countdownElem.textContent = "THE STORY BEGINS...";
                }
                if (btn) btn.classList.remove('hidden');
            }
        }
    }, 1000);

    const slideshow = document.getElementById('slideshow');
    if (slideshow) {
        celebrationData.forEach((data, index) => {
            const slide = document.createElement('div');
            slide.className = `celebration-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <div class="slide-img-wrap">
                    <img src="${data.img}">
                </div>
                <div class="slide-content-wrap">
                    <div class="milestone-badge">Memory ${index + 1}</div>
                    <h3 class="slide-wish">${data.wish}</h3>
                    <p class="slide-note">${data.note}</p>
                </div>
            `;
            slideshow.appendChild(slide);
        });
    }

    const notesGrid = document.getElementById('notes-grid');
    if (notesGrid) {
        // Add the Golden Note first
        const goldenNote = document.createElement('div');
        goldenNote.className = 'note-card reveal glass-card golden-note-special';
        goldenNote.innerHTML = `
            <div class="note-text-wrap" style="text-align: center; width: 100%; padding: 60px;">
                <h4 class="note-title" style="color: var(--gold); font-size: 2.2rem; margin-bottom: 30px;">✨ SPECIAL MESSAGE ✨</h4>
                <p class="note-content" style="font-size: 2rem; line-height: 1.6; color: #fff;">"Happy Birthday Divya! Step into this New chapter with Confidence and Joy. May your Life be filled with success, laughter and beautiful memories."</p>
                <div class="signature" style="text-align: center; margin-top: 40px; font-family: 'Cinzel', serif; color: var(--gold); font-size: 1.2rem;">— FROM ALL OF US</div>
            </div>
        `;
        notesGrid.appendChild(goldenNote);

        specialNotesData.forEach((data, index) => {
            const card = document.createElement('div');
            card.className = 'note-card reveal glass-card';
            card.innerHTML = `
                <div class="note-grid">
                    <div class="note-image">
                        <img src="${data.img}">
                    </div>
                    <div class="note-text-wrap">
                        <h4 class="note-title">${data.title}</h4>
                        <p class="note-content">"${data.note}"</p>
                    </div>
                </div>
            `;
            notesGrid.appendChild(card);
        });
    }

    window.startScrollReveals = () => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.15 });
        reveals.forEach(r => observer.observe(r));
    };

    const container = document.createElement('div');
    container.className = 'balloon-container';
    document.body.appendChild(container);
    const colors = ['#D4AF37', '#B8860B', '#C0C0C0', '#FDF8E8'];
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 15 + 's';
        container.appendChild(balloon);
    }
};

// Start initialization as soon as the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/* ============================================
   DATA - Abdelrahman Osama's Portfolio
   ============================================ */

const aboutStats = [
  { number: '3+', label: 'Years Experience' },
  { number: '6+', label: 'Projects Delivered' },
  { number: '2', label: 'Companies' }
];

const aboutHighlights = [
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    desc: 'Building scalable apps with MVVM, MVP, and Clean Architecture patterns'
  },
  {
    icon: '⚡',
    title: 'Performance Focus',
    desc: 'Optimizing apps for smooth 60fps animations and fast load times'
  },
  {
    icon: '🔧',
    title: 'Full Lifecycle',
    desc: 'From requirements analysis to deployment and ongoing maintenance'
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    desc: 'Delivering seamless experiences across both iOS and Android'
  },
  {
    icon: '🔥',
    title: 'Firebase Expert',
    desc: 'Authentication, Cloud Firestore, Push Notifications, and Analytics'
  },
  {
    icon: '🔗',
    title: 'API Integration',
    desc: 'RESTful API design, Dio/Retrofit integration, and real-time data sync'
  }
];

const experiences = [
  {
    role: 'Flutter Developer',
    company: 'CodeWFekra',
    date: 'Mar 2024 – Present',
    description: [
      'Developed and maintained multiple Flutter applications for a Saudi company, including HR Management, Ride-Hailing (Uber-like), Food Delivery, Recruitment, Real Estate, and Car Marketplace platforms.',
      'Contributed to the full mobile development lifecycle, from requirements analysis and implementation to deployment and maintenance.'
    ]
  },
  {
    role: 'Flutter Developer',
    company: 'Crystal Consulting Services',
    date: 'Sep 2023 – Oct 2024',
    description: [
      'Developed enterprise HR solutions, including Time Attendance and Payroll systems, with features for employee tracking, attendance management, and payroll workflow automation.',
      'Built robust enterprise-grade solutions that streamlined HR operations for multiple organizations.'
    ]
  }
];

const projects = [
  {
    icon: '👔',
    title: 'HR Management & Workforce Tracking',
    description: 'Enterprise HR solution automating employee self-service processes, approval workflows, and workforce management operations. Features real-time visibility into workforce activities, attendance, and field operations through location tracking and monitoring.',
    tech: ['Flutter', 'BLoC', 'REST API', 'Firebase', 'Google Maps'],
    color: '#6366f1',
    driveLink: 'https://drive.google.com/drive/folders/17PyUfRu9XeHmgnFXPlcUymqu1GvEj2Bj?usp=sharing'
  },
  {
    icon: '🚗',
    title: 'HalaCar Application',
    description: 'A car dealership application featuring vehicle listings, service packages, customer requests, and order status tracking. Implemented responsive UI and scalable architecture for seamless experience across iOS and Android.',
    tech: ['Flutter', 'REST API', 'Clean Architecture', 'Dio'],
    color: '#8b5cf6',
    driveLink: 'https://drive.google.com/drive/folders/1RHK69eBywTqIU_-O4EoqnJ5MY6BK3N6P?usp=sharing'
  },
  {
    icon: '💼',
    title: 'Job Portal Application',
    description: 'A job portal enabling employers to post vacancies and candidates to browse and apply for jobs. Features job search, application tracking, and employer-candidate interaction for efficient talent acquisition.',
    tech: ['Flutter', 'BLoC', 'REST API', 'Firebase'],
    color: '#ec4899',
    driveLink: 'https://drive.google.com/drive/folders/1ra9jETGLvX65UCYVnvwNZ4CD_jW8Q5ga?usp=sharing'
  },
  {
    icon: '🚕',
    title: 'Tawsela – Ride-Hailing App',
    description: 'An Uber-like transportation platform enabling users to request rides, track drivers in real time, and manage trips from booking to completion. Features accurate fare estimation, trip history, and real-time ride status monitoring.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API', 'BLoC'],
    color: '#f59e0b',
    driveLink: '#'
  },
  {
    icon: '🚛',
    title: 'NAJDA – Vehicle Carrier',
    description: 'A vehicle transportation platform enabling users to book emergency or scheduled car carrier trucks with ease. Provides real-time truck tracking, route navigation, ETA calculation, fare estimation, trip history, and live order status for a seamless roadside assistance experience.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API', 'BLoC', 'Geolocator'],
    color: '#ef4444',
    driveLink: 'https://drive.google.com/drive/folders/1P0MtD20vamDWRuIMOjNs77qfk8lXjatQ?usp=sharing'
  }
];

const skillCategories = [
  {
    icon: '💻',
    title: 'Languages',
    skills: ['Dart', 'C++', 'Python', 'Kotlin']
  },
  {
    icon: '📱',
    title: 'Framework & Architecture',
    skills: ['Flutter', 'MVVM', 'MVP', 'Clean Architecture', 'BLoC', 'Mobile Security']
  },
  {
    icon: '📚',
    title: 'Libraries & Services',
    skills: ['Dio', 'Http', 'Retrofit', 'Firebase', 'Google Maps']
  },
  {
    icon: '🛠️',
    title: 'Dev Tools',
    skills: ['Android Studio', 'XCode', 'Git', 'GitHub']
  },
  {
    icon: '🧠',
    title: 'Personal Skills',
    skills: ['Problem Solving', 'Code Quality & Refactoring', 'Communication', 'Continuous Learning', 'Attention to Detail', 'Performance Optimization']
  }
];

const education = [
  {
    degree: "Bachelor's in Software Development",
    school: 'New Cairo Technological University',
    date: '2019 – 2023',
    icon: '🎓'
  }
];

const typedTexts = [
  'Flutter Developer',
  'Mobile App Engineer',
  'Clean Architecture Advocate',
  'Cross-Platform Expert',
  'UI/UX Enthusiast'
];

/* ============================================
   TYPED TEXT ANIMATION
   ============================================ */
class TypeWriter {
  constructor(element, texts, speed = 80, deleteSpeed = 40, pauseTime = 2000) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.deleteSpeed = deleteSpeed;
    this.pauseTime = pauseTime;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.element.textContent = currentText.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.element.textContent = currentText.substring(0, this.charIndex);
    }

    let timeout = this.isDeleting ? this.deleteSpeed : this.speed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      timeout = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      timeout = 500;
    }

    setTimeout(() => this.type(), timeout);
  }
}

/* ============================================
   PARTICLE SYSTEM
   ============================================ */
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = p.x - this.particles[j].x;
        const dy = p.y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function animateCounter(element, target, duration = 2000) {
  const isPlus = target.includes('+');
  const num = parseInt(target);
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * num);

    element.textContent = current + (isPlus ? '+' : '');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   RENDER FUNCTIONS
   ============================================ */

function renderAboutStats() {
  const container = document.getElementById('aboutStatsContainer');
  if (!container) return;
  container.innerHTML = aboutStats.map(stat => `
    <div class="stat-card">
      <span class="stat-number" data-target="${stat.number}">0</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

function renderAboutHighlights() {
  const container = document.getElementById('aboutHighlightsContainer');
  if (!container) return;
  container.innerHTML = aboutHighlights.map(h => `
    <div class="highlight-card">
      <div class="highlight-icon">${h.icon}</div>
      <div>
        <h4 class="highlight-title">${h.title}</h4>
        <p class="highlight-desc">${h.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;
  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <p class="timeline-company">${exp.company}</p>
          </div>
          <span class="timeline-date">${exp.date}</span>
        </div>
        <div class="timeline-desc">
          <ul>
            ${exp.description.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = projects.map((proj, i) => `
    <div class="project-card reveal" style="--stagger-index: ${i}">
      <div class="project-header">
        <div class="project-icon">${proj.icon}</div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${proj.driveLink ? `
        <div style="margin-top: 24px;">
          <a href="${proj.driveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; border-radius: 8px;">
            
            View Project
          </a>
        </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;
  container.innerHTML = skillCategories.map((cat, i) => `
    <div class="skill-category reveal" style="--stagger-index: ${i}">
      <div class="skill-category-header">
        <div class="skill-category-icon">${cat.icon}</div>
        <h3 class="skill-category-title">${cat.title}</h3>
      </div>
      <div class="skill-list">
        ${cat.skills.map(s => `
          <span class="skill-item">
            <span class="skill-dot"></span>
            ${s}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('educationContainer');
  if (!container) return;
  container.innerHTML = education.map(edu => `
    <div class="education-card reveal">
      <div class="education-icon">${edu.icon}</div>
      <div class="education-info">
        <h3>${edu.degree}</h3>
        <p class="education-school">${edu.school}</p>
        <span class="education-date">${edu.date}</span>
      </div>
    </div>
  `).join('');
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Animate stat counters
        const statNumbers = entry.target.querySelectorAll('.stat-number[data-target]');
        statNumbers.forEach(el => {
          if (!el.dataset.animated) {
            el.dataset.animated = 'true';
            animateCounter(el, el.dataset.target);
          }
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      navOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      navOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   CONTACT FORM (Web3Forms)
   Get your free access key at https://web3forms.com
   ============================================ */
const WEB3FORMS_ACCESS_KEY = 'cbc20a81-d998-4d63-a795-50fa9b542e83';

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const accessKey = WEB3FORMS_ACCESS_KEY.trim();
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      showToast(
        'Contact form not configured. Get a free key at web3forms.com',
        'error'
      );
      return;
    }

    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;

    const formData = new FormData(form);
    const payload = {
      access_key: accessKey,
      subject: `Portfolio Contact: ${formData.get('subject')}`,
      name: formData.get('from_name'),
      email: formData.get('from_email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      const message = error instanceof Error ? error.message : 'Failed to send message';
      showToast(
        message.includes('Access Key')
          ? 'Invalid access key. Create a new one at web3forms.com'
          : 'Failed to send. Please email abdelrahmanosama.eng9@gmail.com directly',
        'error'
      );
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  });
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   INITIALIZE EVERYTHING
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Contact form first so it always initializes
  initContactForm();

  // Render all sections
  renderAboutStats();
  renderAboutHighlights();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();

  // Initialize features
  initNavigation();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();

  // Typed text
  const typedElement = document.getElementById('typedText');
  if (typedElement) {
    new TypeWriter(typedElement, typedTexts);
  }

  // Particles
  const particleCanvas = document.getElementById('particleCanvas');
  if (particleCanvas) {
    new ParticleSystem(particleCanvas);
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

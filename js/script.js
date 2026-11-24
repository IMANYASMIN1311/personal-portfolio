// 1. Automatic Copyright Year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 2. Dynamic Greeting Based on Time of Day
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    greetingEl.textContent = "Good Morning! Welcome to my portfolio.";
  } else if (currentHour < 18) {
    greetingEl.textContent = "Good Afternoon! Welcome to my portfolio.";
  } else {
    greetingEl.textContent = "Good Evening! Welcome to my portfolio.";
  }
}

// 3. Typing Effect on Home Page
const typingEl = document.getElementById("typingText");
if (typingEl) {
  const titles = [
    "Industrial Electronic Automation Student",
    "Electronic & Logic Systems Enthusiast",
    "Front-End Web Developer"
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function runTypingEffect() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
      typingEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(runTypingEffect, 1500);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(runTypingEffect, isDeleting ? 50 : 90);
  }
  runTypingEffect();
}

// 4. Responsive Hamburger Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// 5. Dark / Light Theme Switcher
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  if (localStorage.getItem("portfolioTheme") === "light") {
    document.body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
  });
}

// 6. About Me "Read More" Show/Hide Toggle
const readMoreBtn = document.getElementById("readMoreBtn");
const moreBio = document.getElementById("moreBio");
if (readMoreBtn && moreBio) {
  readMoreBtn.addEventListener("click", () => {
    if (moreBio.style.display === "none") {
      moreBio.style.display = "block";
      readMoreBtn.textContent = "Read Less";
    } else {
      moreBio.style.display = "none";
      readMoreBtn.textContent = "Read More";
    }
  });
}

// 7. Project Category Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
if (filterButtons.length > 0) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");

      const filterValue = btn.getAttribute("data-filter");
      projectCards.forEach((card) => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 8. Compulsory Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formSuccess").style.display = "none";

    let valid = true;

    if (name === "") {
      document.getElementById("nameError").textContent = "Full name is required.";
      valid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (subject.length < 3) {
      document.getElementById("subjectError").textContent = "Subject must be at least 3 characters.";
      valid = false;
    }

    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      document.getElementById("formSuccess").style.display = "block";
      contactForm.reset();
    }
  });
}
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let isScrolled = false;

  function handleScroll() {
    if (!navbar) return;
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      isScrolled = scrolled;
      if (isScrolled) {
        navbar.classList.remove('bg-transparent', 'py-5');
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
        navbar.classList.add('bg-transparent', 'py-5');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenuFunc() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenuFunc);
  }

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenuFunc);
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMobileMenuFunc();
    }
  });

  // Pricing toggle
  const pricingToggle = document.getElementById('pricingToggle');
  const pricingToggleDot = document.getElementById('pricingToggleDot');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const yearlyLabel = document.getElementById('yearlyLabel');
  const proPrice = document.getElementById('proPrice');
  const enterprisePrice = document.getElementById('enterprisePrice');

  let isAnnual = false;

  if (pricingToggle) {
    pricingToggle.addEventListener('click', () => {
      isAnnual = !isAnnual;

      // Update ARIA state
      pricingToggle.setAttribute('aria-checked', isAnnual.toString());

      if (isAnnual) {
        if (pricingToggleDot) {
          pricingToggleDot.classList.remove('translate-x-0');
          pricingToggleDot.classList.add('translate-x-8');
        }
        if (monthlyLabel) {
          monthlyLabel.classList.remove('text-black');
          monthlyLabel.classList.add('text-gray-400');
        }
        if (yearlyLabel) {
          yearlyLabel.classList.remove('text-gray-400');
          yearlyLabel.classList.add('text-black');
        }
        if (proPrice) proPrice.textContent = '79';
        if (enterprisePrice) enterprisePrice.textContent = '899';
      } else {
        if (pricingToggleDot) {
          pricingToggleDot.classList.remove('translate-x-8');
          pricingToggleDot.classList.add('translate-x-0');
        }
        if (monthlyLabel) {
          monthlyLabel.classList.remove('text-gray-400');
          monthlyLabel.classList.add('text-black');
        }
        if (yearlyLabel) {
          yearlyLabel.classList.remove('text-black');
          yearlyLabel.classList.add('text-gray-400');
        }
        if (proPrice) proPrice.textContent = '99';
        if (enterprisePrice) enterprisePrice.textContent = '999';
      }
    });
  }

  // Testimonials carousel
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      text: "Ophira completely transformed how we handle our internal workflows. The UI is stunning and the performance is unmatched.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      text: "I've used many tools before, but nothing comes close to the simplicity and power of Ophira. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Ross",
      role: "Freelancer",
      text: "The pricing is unbeatable for the value you get. The customer support team is also incredibly responsive.",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  let activeTestimonial = 0;

  const testimonialText = document.getElementById('testimonialText');
  const testimonialImage = document.getElementById('testimonialImage');
  const testimonialName = document.getElementById('testimonialName');
  const testimonialRole = document.getElementById('testimonialRole');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');

  function updateTestimonial(index) {
    if (!testimonials[index]) return;

    activeTestimonial = index;
    const testimonial = testimonials[index];

    if (testimonialText) testimonialText.textContent = `"${testimonial.text}"`;
    if (testimonialImage) {
      testimonialImage.src = testimonial.image;
      testimonialImage.alt = `Photo of ${testimonial.name}`;
    }
    if (testimonialName) testimonialName.textContent = testimonial.name;
    if (testimonialRole) testimonialRole.textContent = testimonial.role;

    testimonialDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove('w-3', 'bg-gray-200');
        dot.classList.add('w-6', 'bg-[#ccf32f]');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('w-6', 'bg-[#ccf32f]');
        dot.classList.add('w-3', 'bg-gray-200');
        dot.removeAttribute('aria-current');
      }
    });
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateTestimonial(index));
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.getAttribute('data-index'));
      const content = item.nextElementSibling;
      const icon = item.querySelector('i');

      if (!content || !icon) return;

      // Close all other FAQs
      faqItems.forEach((otherItem, otherIndex) => {
        if (otherIndex !== index) {
          const otherContent = otherItem.nextElementSibling;
          const otherIcon = otherItem.querySelector('i');
          if (otherContent && otherIcon) {
            otherContent.classList.add('hidden');
            otherIcon.classList.remove('fa-minus', 'text-[#ccf32f]');
            otherIcon.classList.add('fa-plus', 'text-gray-400');
            otherItem.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current FAQ
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.remove('fa-plus', 'text-gray-400');
        icon.classList.add('fa-minus', 'text-[#ccf32f]');
        item.setAttribute('aria-expanded', 'true');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('fa-minus', 'text-[#ccf32f]');
        icon.classList.add('fa-plus', 'text-gray-400');
        item.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

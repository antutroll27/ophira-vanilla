// Navbar scroll effect
const navbar = document.getElementById('navbar');
let isScrolled = false;

function handleScroll() {
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
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function openMobileMenu() {
  mobileMenu.classList.remove('hidden');
}

function closeMobileMenuFunc() {
  mobileMenu.classList.add('hidden');
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMobileMenu.addEventListener('click', closeMobileMenuFunc);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenuFunc);
});

// Pricing toggle
const pricingToggle = document.getElementById('pricingToggle');
const pricingToggleDot = document.getElementById('pricingToggleDot');
const monthlyLabel = document.getElementById('monthlyLabel');
const yearlyLabel = document.getElementById('yearlyLabel');
const proPrice = document.getElementById('proPrice');
const enterprisePrice = document.getElementById('enterprisePrice');

let isAnnual = false;

pricingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  
  if (isAnnual) {
    pricingToggleDot.classList.remove('translate-x-0');
    pricingToggleDot.classList.add('translate-x-8');
    monthlyLabel.classList.remove('text-black');
    monthlyLabel.classList.add('text-gray-400');
    yearlyLabel.classList.remove('text-gray-400');
    yearlyLabel.classList.add('text-black');
    proPrice.textContent = '79';
    enterprisePrice.textContent = '899';
  } else {
    pricingToggleDot.classList.remove('translate-x-8');
    pricingToggleDot.classList.add('translate-x-0');
    monthlyLabel.classList.remove('text-gray-400');
    monthlyLabel.classList.add('text-black');
    yearlyLabel.classList.remove('text-black');
    yearlyLabel.classList.add('text-gray-400');
    proPrice.textContent = '99';
    enterprisePrice.textContent = '999';
  }
});

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
  activeTestimonial = index;
  const testimonial = testimonials[index];
  
  testimonialText.textContent = `"${testimonial.text}"`;
  testimonialImage.src = testimonial.image;
  testimonialName.textContent = testimonial.name;
  testimonialRole.textContent = testimonial.role;
  
  testimonialDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('w-3', 'bg-gray-200');
      dot.classList.add('w-6', 'bg-[#ccf32f]');
    } else {
      dot.classList.remove('w-6', 'bg-[#ccf32f]');
      dot.classList.add('w-3', 'bg-gray-200');
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
    
    // Close all other FAQs
    faqItems.forEach((otherItem, otherIndex) => {
      if (otherIndex !== index) {
        const otherContent = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('i');
        otherContent.classList.add('hidden');
        otherIcon.classList.remove('fa-minus', 'text-[#ccf32f]');
        otherIcon.classList.add('fa-plus', 'text-gray-400');
      }
    });
    
    // Toggle current FAQ
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.classList.remove('fa-plus', 'text-gray-400');
      icon.classList.add('fa-minus', 'text-[#ccf32f]');
    } else {
      content.classList.add('hidden');
      icon.classList.remove('fa-minus', 'text-[#ccf32f]');
      icon.classList.add('fa-plus', 'text-gray-400');
    }
  });
});


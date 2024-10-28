// Mendapatkan elemen menu
const mobileMenu = document.getElementById('mobile-menu');
// Cek status menu dari localStorage saat halaman dimuat
if (localStorage.getItem('menuOpen') === 'true') {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.classList.add('menu-enter-active'); // Menambahkan kelas animasi setelah sedikit delay
    }, 10); // Delay singkat untuk memastikan animasi bekerja
}
// Event listener untuk tombol hamburger
document.getElementById('menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    // Simpan status menu terbuka
    const isMenuOpen = !mobileMenu.classList.contains('hidden');
    if (isMenuOpen) {
        setTimeout(() => {
            mobileMenu.classList.add('menu-enter-active'); // Menambahkan kelas animasi setelah sedikit delay
        }, 10); // Delay singkat untuk animasi
    } else {
        mobileMenu.classList.remove('menu-enter-active'); // Hapus kelas animasi saat menutup
    }
    localStorage.setItem('menuOpen', isMenuOpen);
});
// Event listener untuk tombol close
document.getElementById('close-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('menu-enter-active'); // Hapus kelas animasi saat menutup
    // Simpan status menu tertutup
    localStorage.setItem('menuOpen', 'false');
});
// Mendapatkan semua tautan di dalam mobile menu
const menuLinks = document.querySelectorAll('#mobile-menu a');
// Event listener untuk menutup menu ketika tautan diklik
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden'); // Menutup menu setelah tautan diklik
        mobileMenu.classList.remove('menu-enter-active'); // Hapus kelas animasi saat menutup
        // Simpan status menu tertutup
        localStorage.setItem('menuOpen', 'false');
    });
});
const blogDropdownBtn = document.getElementById('blog-dropdown-btn');
const blogDropdown = document.getElementById('blog-dropdown');
blogDropdownBtn.onclick = (event) => {
  event.stopPropagation(); // Mencegah event klik propagasi ke window
  blogDropdown.classList.toggle('active'); // Menampilkan atau menyembunyikan dropdown
};
// Menutup dropdown saat klik di luar
window.onclick = (event) => {
  if (!event.target.matches('#blog-dropdown-btn') && !event.target.closest('#blog-dropdown')) {
    blogDropdown.classList.remove('active');
  }
};
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-testimonial');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  // Smooth scroll on button click
  document.querySelector('.about-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#divisi').scrollIntoView({
      behavior: 'smooth'
    });
  });
  // GSAP and ScrollTrigger animations
  gsap.registerPlugin(ScrollTrigger);
  // Zoom-in effect on scrolling to images
  gsap.from('.zoom-effect', {
    scrollTrigger: {
      trigger: '.zoom-effect',
      start: 'top 80%',  // Start animating when the element is 80% visible
      toggleActions: 'play none none none'
    },
    scale: 0.8,  // Zoom out at the beginning
    opacity: 0,  // Start with invisible
    duration: 1.5,  // Duration of the animation
    ease: 'power4.out'
  });
// Function to add smooth scroll with easing
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get target section id
    const targetElement = document.querySelector(targetId);
    // Scroll behavior with custom easing effect
    window.scrollTo({
      top: targetElement.offsetTop - 100, // Adjust offset to account for fixed header
      behavior: 'smooth' // Smooth scrolling
    });
  });
});
// Easing function for smoother scroll effect
function smoothScroll(target, duration) {
  let targetPosition = target.getBoundingClientRect().top - 100; // Adjust for fixed header
  let startPosition = window.pageYOffset;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  // Ease function: easeInOutCubic for smoother feel
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
  requestAnimationFrame(animation);
}














  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const fullName = document.getElementById('fullName').value;
    const classValue = document.getElementById('class').value;
    const phone = document.getElementById('phone').value; // User's phone number
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // WhatsApp number to send the message
    const whatsappNumber = '6281365786012';

    // Construct the message
    const textMessage = `Nama: ${fullName}\nKelas: ${classValue}\nNomor WhatsApp: ${phone}\nEmail: ${email}\nPesan: ${message}`;

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  });

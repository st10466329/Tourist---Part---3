// 🌍 3D Rotating Globe using Three.js
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("globe-container");
  if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(80, 80);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
});

// ---------------- Existing Code Below ----------------

// script.js - validation and lightbox
document.addEventListener('DOMContentLoaded', function() {

  // Enquiry form validation
  var enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      var valid = true;
      clearErrors(enquiryForm);
      var name = enquiryForm.querySelector('[name="name"]');
      var email = enquiryForm.querySelector('[name="email"]');
      var msg = enquiryForm.querySelector('[name="message"]');
      if (!name.value.trim()) { showError(name, 'Please enter your name.'); valid=false; }
      if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email.'); valid=false; }
      if (!msg.value.trim()) { showError(msg, 'Please enter your enquiry.'); valid=false; }
      if (!valid) e.preventDefault();
    });
  }

  // Contact form validation
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      var valid = true;
      clearErrors(contactForm);
      var name = contactForm.querySelector('[name="name"]');
      var email = contactForm.querySelector('[name="email"]');
      var msg = contactForm.querySelector('[name="message"]');
      if (!name.value.trim()) { showError(name, 'Please enter your name.'); valid=false; }
      if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email.'); valid=false; }
      if (!msg.value.trim()) { showError(msg, 'Please enter your message.'); valid=false; }
      if (!valid) e.preventDefault();
    });
  }

  function showError(el, message) {
    el.classList.add('input-error');
    var err = document.createElement('div');
    err.className = 'error-message';
    err.textContent = message;
    el.parentNode.insertBefore(err, el.nextSibling);
  }

  function clearErrors(form) {
    var errors = form.querySelectorAll('.error-message');
    errors.forEach(function(e){ e.remove(); });
    var inputs = form.querySelectorAll('.input-error');
    inputs.forEach(function(i){ i.classList.remove('input-error'); });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Lightbox
  var lightbox = document.getElementById('lightboxModal');
  var lightboxImg = document.getElementById('lightboxImg');
  if (lightbox) {
    document.querySelectorAll('.gallery-thumb').forEach(function(img){
      img.addEventListener('click', function(){
        lightboxImg.src = this.dataset.full;
        lightbox.style.display = 'flex';
      });
    });
    document.getElementById('lightboxClose').addEventListener('click', function(){
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });
    lightbox.addEventListener('click', function(e){
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
      }
    });
  }

});


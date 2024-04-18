
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".product-navigate img");

    function clickme(smallImg) {
      var fullImg = document.getElementById("imagebox");
      fullImg.src = smallImg.src;
      currentImageIndex = Array.from(images).indexOf(smallImg);
      images.forEach((img) => img.classList.remove("active-image"));

      // Add border to the current active image
      images[currentImageIndex].classList.add("active-image");
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
    }

    function previousImage() {
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
    }

    function updateImage() {
      const fullImg = document.getElementById("imagebox");
      fullImg.src = images[currentImageIndex].src;

      // Remove border from all images
      images.forEach((img) => img.classList.remove("active-image"));

      // Add border to the current active image
      images[currentImageIndex].classList.add("active-image");
    }





    //------ counter-------

    function increment() {
      event.preventDefault();
      var counterValue = document.getElementById("counterValue");
      counterValue.value++;
    }

    function decrement() {
      event.preventDefault();
      var counterValue = document.getElementById("counterValue");
      if (counterValue.value > 0) {
        counterValue.value--;
      }
    }

    // ---------------------
    document.addEventListener("DOMContentLoaded", function () {
      const productContainer = document.getElementById('productContainer');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const cardWidth = 300; // Width of each product card, adjust as needed
      let scrollPosition = 0;

      // Event listeners for navigation buttons
      prevBtn.addEventListener('click', () => {
        scrollPosition -= cardWidth;
        scrollPosition = Math.max(scrollPosition, 0);
        productContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth' // Use smooth scrolling behavior
        });
        console.log(scrollPosition)
        updateButtonStyles();

      });

      nextBtn.addEventListener('click', () => {

        scrollPosition += cardWidth;


        productContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth' // Use smooth scrolling behavior
        });
        updateButtonStyles();
        console.log(scrollPosition);

      });

      // Disable default drag behavior on images and links
      productContainer.querySelectorAll('img, a').forEach(item => {
        item.draggable = false;
      });

      // Function to update button styles
      function updateButtonStyles() {
        const maxScroll = productContainer.scrollWidth - productContainer.clientWidth;
        if (scrollPosition === 0) {
          prevBtn.classList.remove('active');
          nextBtn.classList.add('active');

        } else if (scrollPosition >= maxScroll) {
          nextBtn.classList.remove('active');
          prevBtn.classList.add('active');
        } else {
          nextBtn.classList.add('active');
          prevBtn.classList.add('active');

        }
      }
    });





    document.addEventListener("DOMContentLoaded", function () {
      const productContainer = document.getElementById("productContainer");
      let isDragging = false;
      let startX;
      let scrollLeft;

      productContainer.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - productContainer.offsetLeft;
        scrollLeft = productContainer.scrollLeft;
      });

      productContainer.addEventListener("touchend", () => {
        isDragging = false;
      });

      productContainer.addEventListener("touchcancel", () => {
        isDragging = false;
      });

      productContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - productContainer.offsetLeft;
        const walk = (x - startX) * 2;
        productContainer.scrollLeft = scrollLeft - walk;
      });
    });


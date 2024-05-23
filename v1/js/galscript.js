document.addEventListener("DOMContentLoaded", function() {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const modal = document.getElementById("myModal");
    const closeModal = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const galleryImg = document.getElementById("galleryImg");

    let currentGallery = [];
    let currentImageIndex = 0;

    galleryLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            currentGallery = this.getAttribute("data-images").split(',');
            currentImageIndex = 0;
            modal.style.display = "block";
            showImage(currentImageIndex);
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    prevButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentGallery.length - 1;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex < currentGallery.length - 1) ? currentImageIndex + 1 : 0;
        showImage(currentImageIndex);
    });

    function showImage(index) {
        galleryImg.src = currentGallery[index];
    }

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

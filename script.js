$(document).ready(function() {
    // Define an array of image URLs
    var images = [
        "img1.jpg",
        "Lionfish_2.jpg",
        "img3.jpg"
    ];

    var currentIndex = 0;

    // Function to change the image
    function changeImage() {
        $(".gallery-section img").attr("src", images[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial call to changeImage function
    changeImage();

    // Set interval to change image every 3 seconds (adjust as needed)
    setInterval(changeImage, 3000);
});
$(document).ready(function() {
    // Function to close the slideshow
    function closeSlideshow() {
        $(".gallery-section").hide(); // Hide the slideshow
    }

    // Event listener to close slideshow when clicking anywhere outside
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".gallery-section").length) {
            closeSlideshow();
        }
    });

    // Event listener to close slideshow when clicking the close button
    $(".close-btn").on("click", function() {
        closeSlideshow();
    });
});


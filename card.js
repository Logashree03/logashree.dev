
// $(".custom-carousel").owlCarousel({
//   autoWidth: true,
//   loop: true
// });
// $(document).ready(function () {
//   $(".custom-carousel .item").click(function () {
//     $(".custom-carousel .item").not($(this)).removeClass("active");
//     $(this).toggleClass("active");
//   });
// });
function openImage(imgSrc) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImg").src = imgSrc;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

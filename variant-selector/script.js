// Function to select single variant from the variants list
function selectVariants(htmlElement) {
  const variants = document.querySelectorAll(htmlElement);
  let activeVariant = null;

  variants.forEach(function (variant) {
    variant.addEventListener("click", function (event) {
      if (activeVariant && activeVariant !== variant) {
        activeVariant.classList.remove("active");
      }
      variant.classList.toggle("active");
      activeVariant = variant;
    });
  });
}
// Call the selector
selectVariants("ul li a");

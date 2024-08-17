const $scrollContainer = document.querySelector(".gallery");
const $backBtn = document.getElementById("backBtn");
const $nextBtn = document.getElementById("nextBtn");

// $scrollContainer.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     $scrollContainer.scrollLeft += event.deltaY;
//     $scrollContainer.style.scrollBehavior = "auto";
// });

$backBtn.addEventListener("click", () => {
    $scrollContainer.style.scrollBehavior = "smooth";
    $scrollContainer.scrollLeft -= 600;
})

$nextBtn.addEventListener("click", () => {
    $scrollContainer.style.scrollBehavior = "smooth";
    $scrollContainer.scrollLeft += 600;
})
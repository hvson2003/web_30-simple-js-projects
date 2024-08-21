const $lists = document.getElementsByClassName("list");
const $rightBox = document.getElementById("right");
const $leftBox = document.getElementById("left");

let selected = null;

for (const $list of $lists) {
    $list.addEventListener("dragstart", function(e) {
        selected = e.target;
    });
}

$rightBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});

$rightBox.addEventListener("drop", function(e) {
    if (selected) {
        $rightBox.appendChild(selected);
        selected = null;
    }
});

$leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});

$leftBox.addEventListener("drop", function(e) {
    if (selected) {
        $leftBox.appendChild(selected);
        selected = null;
    }
});

const $toastBox = document.getElementById('toastBox');
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submited !';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error !';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again !';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    $toastBox.appendChild(toast);

    if (msg === successMsg) {
        toast.classList.add('success');
    } else if (msg === errorMsg) {
        toast.classList.add('error');
    } else if (msg === invalidMsg) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    },3000);
}
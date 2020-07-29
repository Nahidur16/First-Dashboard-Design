/***
 * const btn = document.querySelector('toggle');
const wrapper = document.querySelector('main');
if (btn) {
    btn.addEventListener('click', () => {
        wrapper.classList.toggle(".collapse");
    });
}
 */

$(document).ready(function () {
    $(".toggle").click(function () {
        $(".main").toggleClass("collapse");
    });
});
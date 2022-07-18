const themeController = document.getElementsByClassName("theme-controller");
console.log(themeController)
const container1 =document.getElementsByClassName("container1")[0];
themeController.addEventListener('click', () => {
    container1.style.background.value = "var(--primary)";
})

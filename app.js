const shareBtn = document.querySelector(".share--btn")
const links = document.querySelector(".visibility")
const icon = document.querySelector(".fa-solid")

shareBtn.addEventListener("click", () => {
  links.classList.toggle("social--links")
  shareBtn.classList.toggle("dark--blue")
  icon.classList.toggle("white--icon")
})

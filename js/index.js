const btnClean = document.querySelector("#btnClean");
const botaoFecharModal = document.querySelector("#fechar-modal");
const video = document.getElementById("#video");
const modal = document.querySelector("#modal");

btnClean.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo);
});


btnCleanFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});
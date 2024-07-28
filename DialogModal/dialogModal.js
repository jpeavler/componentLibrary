function createDialogElement ({
    parentElement,
    clickToOpenElement,
    dialogContent,
}) {
    const dialog = document.createElement("dialog");
    parentElement.appendChild(dialog);
    
    const closeDialogButton = document.createElement("button");
    closeDialogButton.innerText = "X"
    closeDialogButton.classList.add("dialog-close-button");
    dialog.appendChild(closeDialogButton);

    dialog.appendChild(dialogContent);

    closeDialogButton.addEventListener("click", () => {
        dialog.close();
    });


    clickToOpenElement.addEventListener("click", () =>{
        dialog.showModal();
    });
    

    return dialog;
}
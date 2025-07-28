function createForm({
    parentElement,
    formClassList,
    headingText,
    fields,
    submitFormButtonText,
    submitFormFunction
}) {
    const form = document.createElement("form");
    form.classList.add(formClassList);
    parentElement.appendChild(form);

    const formHeading = document.createElement("h3");
    formHeading.innerText = headingText;
    formHeading.classList.add("form-heading");
    form.appendChild(formHeading);

    fields.forEach(field => {
        const fieldLabel = document.createElement("label");
        fieldLabel.htmlFor = field.fieldName;
        fieldLabel.innerText = field.fieldLabel;
        form.appendChild(fieldLabel);

        const fieldElement = document.createElement("input");
        fieldElement.name = field.fieldName;
        fieldElement.type = field.fieldType;
        form.appendChild(fieldElement);
    });

    const submitFormButton = document.createElement("button");
    submitFormButton.type = "button";
    submitFormButton.innerText = submitFormButtonText;
    submitFormButton.addEventListener("click", (event) => {
        event.preventDefault();
        submitFormFunction();
    });
    form.appendChild(submitFormButton);

    return form;
}
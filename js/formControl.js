function validateForm()
{
    const emailRE = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

    let errorCount = 0;

    let contactForm = document.forms["contactForm"];
    let email = contactForm["contactEmail"].value.trim();
    let subject = contactForm["contactSubject"].value.trim();
    let checkbox = contactForm["contactCheckboxEmail"];

    if(email == "" || email == null || email == undefined)
    {
        alert("Porfavor ingrese un email para contactarnos.");
        errorCount++;
    }
    else if(email.match(emailRE) == null)
    {
        alert("El email no es válido, porfavor ingrese un email válido para contactarnos.");
        errorCount++;
    }
    else if(subject == "" || subject == null || subject == undefined)
    {
        alert("Debe ingresar un asunto con respecto a la intención del contacto.");
        errorCount++;
    }

    //Do here 3rd API email sending in case of wanting to.
    if(checkbox.checked)
    {
        //Send email
        alert("Email de confirmación enviado.");
    }

    return errorCount <= 0;
}
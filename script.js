function mostrarSenha() {

    var tipo = document.getElementById("password");
    var icon = document.getElementById("icon");

    if (tipo.type === "password") {
        tipo.setAttribute("type", "text");
        icon.setAttribute("src", "closed.png");
    } 
    else {
        tipo.setAttribute("type", "password");
        icon.setAttribute("src", "open.png");       
    }
}

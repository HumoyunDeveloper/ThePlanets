function genLan(){
    if (localStorage.getItem("lang") == "en") {
        return "en";
    }
    else if (localStorage.getItem("lang") == "ru") {
        return "ru";
    }
    else {
        return "uz";
    }
}

function changeLan(){
    var sinp = document.querySelector("#lang_input").value;
    localStorage.setItem("lang", sinp);
}
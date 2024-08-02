function darkmode() {
    var darktoggle = document.querySelector('.read-area');
    darktoggle.classList.toggle("dark-mode");
}

function dyslexia_font() {
    var dystoggle = document.querySelector('.read-area');
    dystoggle.classList.toggle("dyslex")
    if (dystoggle.classList.contains("comic-sans")) {
        dystoggle.classList.toggle("comic-sans");
    }
}

function comic_font() {
    var comic = document.querySelector('.read-area');
    comic.classList.toggle("comic-sans")
    if (comic.classList.contains("dyslex")) {
        comic.classList.toggle("dyslex");
    }
}

function p_space() {
    var pspc = document.querySelector('.read-area');
    pspc.classList.toggle("moar-space");
}

function bgr_txt() {
    var bgrtxt = document.querySelector('.read-area');
    bgrtxt.classList.toggle("bigger-text");
    if (bgrtxt.classList.contains("smaller-text")) {
        bgrtxt.classList.toggle("smaller-text");
    }
}

function sml_txt() {
    var smltxt = document.querySelector('.read-area');
    smltxt.classList.toggle("smaller-text");
    if (smltxt.classList.contains("bigger-text")) {
        smltxt.classList.toggle("bigger-text");
    }
}

function nml_txt() {
    var nmltxt = document.querySelector('.read-area');
    nmltxt.classList.toggle("nml-text");
    if (nmltxt.classList.contains("bigger-text")) {
        nmltxt.classList.toggle("bigger-text");
    }
    if (nmltxt.classList.contains("smaller-text")) {
        nmltxt.classList.toggle("smaller-text");
    }
}

function wd_scrn() {
    var wdscrn = document.querySelector('.main-container-example');
    wdscrn.classList.toggle("wide-screen");
}

function ln_space() {
    var lnspc = document.querySelector('.read-area');
    lnspc.classList.toggle("line-spacing");
}

function showtoolbar() {
    document.getElementById("gear-drop").classList.toggle("show")
}
/*Closes dropdown if the user clicks outside */
window.onclick = function(event) {
    if (!event.target.matches('.gear-btn')) {
        var dropdowns = document.getElementsByClassName("toolbar-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
"use strict";
{
    /*
   highlight link of current page.
   
   it just adds attribute
   aria-current="page"
   to some links.
   
   use separate css to control the looks, e.g.
   
   a[aria-current="page"] { background-color: lime; }
   
   2021-09-26
   2026-08-27
    */
    const xcurpath = window.location.pathname;
    if (xcurpath.length >= 5 && (xcurpath !== "/index.html")) {
        const xalllinks = document.querySelectorAll(".lpanelxl a, .topicxl a, .rltd a");
        for (let xlink of xalllinks)
            if (xlink.href.includes(xcurpath))
                xlink.setAttribute("aria-current", "page");
    }
}
{
    /*
   2025-01-04
   2026-08-27
   add a button to all pre tags.
   Clicking the button copies the pre tag text.
    */
    if (window.location.protocol === "https:" || window.location.protocol === "file:") {
        /* const xpreTagList = document.getElementsByTagName("pre"); */
        const xpreTagList = document.querySelectorAll("pre[class]");
        Array.from(xpreTagList, (elpre) => {
            if ((elpre.classList.contains("poem")) || (elpre.classList.contains("lyrics"))) {
                return;
            }
            const elbox = document.createElement("div");
            elbox.setAttribute("style", "position:relative; ");
            const elbuton = document.createElement("button");
            elbuton.setAttribute("type", "button");
            elbuton.setAttribute("class", "xhjtg");
            elbuton.setAttribute("style", "position:absolute; top: 0; right: 0;");
            elbuton.innerText = "copy";
            elbox.appendChild(elbuton);
            elpre.insertAdjacentElement("afterbegin", elbox);
        });
        const f_do_copy = (xevent) => {
            navigator.clipboard.writeText(xevent.target.parentElement.parentElement.innerText.replace("copy", ""));
        };
        const xbutons = document.getElementsByClassName("xhjtg");
        Array.from(xbutons, (x) => {
            x.addEventListener("click", f_do_copy);
        });
    }
}

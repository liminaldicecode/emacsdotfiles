"use strict";
// -*- coding: utf-8 -*-
// © 2013, 2023 Xah Lee, http://xahlee.info/
// 2023-08-16
const xboxID = "tooltip75523";
// xbox is the popup box to display info
const xbox = document.createElement("div");
xbox.id = xboxID;
xbox.style.visibility = "hidden";
xbox.style.position = "fixed";
// xbox.style.fontFamily = "Consolas, Menlo, monospace";
// xbox.style.fontSize = "16px";
xbox.style.color = "black";
xbox.style.fontWeight = "normal";
xbox.style.top = "5px";
xbox.style.left = "5px";
// xbox.style.bottom = "5px";
// xbox.style.height = "250px";
// xbox.style.overflow = "auto";
xbox.style.overflow = "visible";
xbox.style.padding = "4px";
xbox.style.textAlign = "left";
xbox.style.border = "solid 2px silver";
xbox.style.borderRadius = "8px";
xbox.style.backgroundColor = "silver";
xbox.style.boxShadow = "3px 3px 20px grey";
xbox.style.zIndex = "341";
xbox.appendChild(document.createTextNode("nothing"));
document.body.insertBefore(xbox, document.body.firstChild);
const f_tbOn = ((evt) => {
    let langWord = evt.target.firstChild.nodeValue;
    let xhasDocStr = ElispData[langWord];
    if (xhasDocStr) {
        let xdocStr = xhasDocStr;
        xdocStr = xdocStr.replace(/^(\(.*\))$/m, `<span style="font-weight:bold;">$1</span>`);
        xbox.innerHTML =
            `<button id="closeBox4225" type="button" style="position: absolute;
top:2px;
right:-20px;
border:none;
background-color:transparent;
font-size:22px;">❎</button>` + xdocStr.replace(/\n/g, "<br>");
        document.getElementById("closeBox4225").addEventListener("click", f_tbOff, false);
        xbox.style.left = "10px";
        xbox.style.top = (evt.target.getBoundingClientRect().top + 40).toString() +
            "px";
        xbox.style.visibility = "visible";
        // evt.target.insertAdjacentElement( 'beforeend' , xbox )
    }
});
const f_tbOff = (() => {
    xbox.style.visibility = "hidden";
});
xbox.addEventListener("click", f_tbOff, false);
const fInit = (() => {
    let hotspots = document.querySelectorAll(" code.elisp_f, span.keyword, span.function-name, .elisp-special-form, .elisp-user-option, .elisp-variable, .elisp-prefix-command, .elisp-macro, .elisp-function, .elisp-constant, .elisp-command, .xah-elisp-command ");
    // assign handler to hot hoover elements
    if (hotspots.length > 0) {
        for (let ii = 0; ii < hotspots.length; ii++) {
            let nodeX = hotspots[ii];
            nodeX.style.cursor = "pointer";
            nodeX.addEventListener("click", f_tbOn, false);
            document.body.addEventListener("click", f_tbOff, true);
            nodeX.addEventListener("mouseover", f_tbOn, false);
            nodeX.addEventListener("mouseout", f_tbOff, false);
        }
    } // 2017-07-14 on ipad, it needs click to close it
    document.getElementById(xboxID).addEventListener("click", f_tbOff, false);
});
fInit();

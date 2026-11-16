"use strict";
// 2026-09-21
const layout_bar_jtWRC = document.getElementById("layout_bar_jtWRC");
if (!layout_bar_jtWRC)
    throw new Error("id unicode_font_bar_208 not found");
layout_bar_jtWRC.innerHTML = `
<label><input id="toggle_float_xx9kj" type="checkbox" name="toggle_float_xx9kj" value="toggle_float_xx9kj">Float Me</label>
<label><input type="radio" name="layout_Vt9XS" value="qwerty" checked>QWERTY</label>
<label><input type="radio" name="layout_Vt9XS" value="dvorak">Dvorak</label>
<label><input type="radio" name="layout_Vt9XS" value="colemak">Colemak</label>
<label><input type="radio" name="layout_Vt9XS" value="colemak_dh">Colemak DH</label>
<label><input type="radio" name="layout_Vt9XS" value="workman">Workman</label>
`;
const toggle_float_xx9kj = document.getElementById("toggle_float_xx9kj");
const add_layout_bar_style = () => {
    if (document.getElementById("layout_bar_style_brWMv"))
        return; // prevent duplicates
    const xstyle = document.createElement("style");
    xstyle.id = "layout_bar_style_brWMv";
    xstyle.textContent = `
#layout_bar_jtWRC {
 background-color: silver;
 border-radius: 16px;
 line-height: 1.5;
 margin: 8px;
 padding: 8px;
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 gap: 4px;
}
#layout_bar_jtWRC label {
 white-space: nowrap;
 margin-right: 8px;
 display: inline-flex;
 align-items: center;
}
#layout_bar_jtWRC input[type="checkbox"],
#layout_bar_jtWRC input[type="radio"] {
 margin-right: 4px;
}
    `;
    document.head.appendChild(xstyle);
};
add_layout_bar_style();
{
    const qwerty_to_maps = {
        "qwerty": new Map(),
        "dvorak": new Map([
            ['"', "|"],
            ["'", "-"],
            /* ["+", "}"], */
            [",", "w"],
            ["-", "["],
            [".", "v"],
            ["/", "z"],
            [":", "S"],
            [";", "s"],
            /* ["<", "W"], */
            ["=", "]"],
            /* [">", "V"], */
            ["?", "Z"],
            ["B", "X"],
            ["C", "J"],
            ["D", "E"],
            ["E", ">"],
            ["F", "U"],
            ["G", "I"],
            ["H", "D"],
            ["I", "C"],
            ["J", "H"],
            ["K", "T"],
            ["L", "N"],
            ["N", "B"],
            ["O", "R"],
            ["P", "L"],
            ["Q", '"'],
            ["R", "P"],
            ["S", "O"],
            ["T", "Y"],
            ["U", "G"],
            ["V", "K"],
            ["W", "<"],
            ["X", "Q"],
            ["Y", "F"],
            ["Z", ":"],
            ["[", "/"],
            ["]", "="],
            ["_", "{"],
            ["b", "x"],
            ["c", "j"],
            ["d", "e"],
            ["e", "."],
            ["f", "u"],
            ["g", "i"],
            ["h", "d"],
            ["i", "c"],
            ["j", "h"],
            ["k", "t"],
            ["l", "n"],
            ["n", "b"],
            ["o", "r"],
            ["p", "l"],
            ["q", "'"],
            ["r", "p"],
            ["s", "o"],
            ["t", "y"],
            ["u", "g"],
            ["v", "k"],
            ["w", ","],
            ["x", "q"],
            ["y", "f"],
            ["z", ";"],
            ["|", "?"],
        ]),
        "colemak": new Map([
            [":", "O"],
            [";", "o"],
            ["D", "S"],
            ["E", "F"],
            ["F", "T"],
            ["G", "D"],
            ["I", "U"],
            ["J", "N"],
            ["K", "E"],
            ["L", "I"],
            ["N", "K"],
            ["O", "Y"],
            ["P", ":"],
            ["R", "P"],
            ["S", "R"],
            ["T", "G"],
            ["U", "L"],
            ["Y", "J"],
            ["d", "s"],
            ["e", "f"],
            ["f", "t"],
            ["g", "d"],
            ["i", "u"],
            ["j", "n"],
            ["k", "e"],
            ["l", "i"],
            ["n", "k"],
            ["o", "y"],
            ["p", ";"],
            ["r", "p"],
            ["s", "r"],
            ["t", "g"],
            ["u", "l"],
            ["y", "j"],
        ]),
        "colemak_dh": new Map([
            [":", "O"],
            [";", "o"],
            ["B", "V"],
            ["D", "S"],
            ["E", "F"],
            ["F", "T"],
            ["H", "M"],
            ["I", "U"],
            ["J", "N"],
            ["K", "E"],
            ["L", "I"],
            ["M", "H"],
            ["N", "K"],
            ["O", "Y"],
            ["P", ":"],
            ["R", "P"],
            ["S", "R"],
            ["T", "B"],
            ["U", "L"],
            ["V", "D"],
            ["Y", "J"],
            ["b", "v"],
            ["d", "s"],
            ["e", "f"],
            ["f", "t"],
            ["h", "m"],
            ["i", "u"],
            ["j", "n"],
            ["k", "e"],
            ["l", "i"],
            ["m", "h"],
            ["n", "k"],
            ["o", "y"],
            ["p", ";"],
            ["r", "p"],
            ["s", "r"],
            ["t", "b"],
            ["u", "l"],
            ["v", "d"],
            ["y", "j"],
        ]),
        "workman": new Map([
            [";", "i"],
            ["B", "V"],
            ["C", "M"],
            ["D", "H"],
            ["E", "R"],
            ["F", "T"],
            ["H", "Y"],
            ["I", "U"],
            ["J", "N"],
            ["K", "E"],
            ["L", "O"],
            ["M", "L"],
            ["N", "K"],
            ["O", "P"],
            ["P", ";"],
            ["R", "W"],
            ["T", "B"],
            ["U", "F"],
            ["V", "C"],
            ["W", "D"],
            ["Y", "J"],
            ["b", "v"],
            ["c", "m"],
            ["d", "h"],
            ["e", "r"],
            ["f", "t"],
            ["h", "y"],
            ["i", "u"],
            ["j", "n"],
            ["k", "e"],
            ["l", "o"],
            ["m", "l"],
            ["n", "k"],
            ["o", "p"],
            ["p", ";"],
            ["r", "w"],
            ["t", "b"],
            ["u", "f"],
            ["v", "c"],
            ["w", "d"],
            ["y", "j"],
        ]),
        "asset": new Map([
            [";", "r"],
            ["D", "E"],
            ["E", "J"],
            ["F", "T"],
            ["G", "D"],
            ["I", "U"],
            ["J", "N"],
            ["K", "I"],
            ["L", "O"],
            ["N", "K"],
            ["O", "L"],
            ["P", ";"],
            ["R", "F"],
            ["T", "G"],
            ["U", "P"],
            ["d", "e"],
            ["e", "j"],
            ["f", "t"],
            ["g", "d"],
            ["i", "u"],
            ["j", "n"],
            ["k", "i"],
            ["l", "o"],
            ["n", "k"],
            ["o", "l"],
            ["p", ";"],
            ["r", "f"],
            ["t", "g"],
            ["u", "p"],
        ]),
        "neo2": new Map([
            ["q", "x"],
            ["w", "v"],
            ["e", "l"],
            ["r", "c"],
            ["t", "w"],
            ["y", "k"],
            ["u", "h"],
            ["i", "g"],
            ["o", "f"],
            ["p", "q"],
            ["[", "ß"],
            ["a", "u"],
            ["s", "i"],
            ["d", "a"],
            ["f", "e"],
            ["g", "o"],
            ["h", "s"],
            ["j", "n"],
            ["k", "r"],
            ["l", "t"],
            [";", "d"],
            ["'", "y"],
            ["z", "ü"],
            ["x", "ö"],
            ["c", "ä"],
            ["v", "p"],
            ["b", "z"],
            ["n", "b"],
            ["/", "j"],
            ["`", "^"],
        ]),
    };
    /*
   xah_inverse_map(map_obj)
   return a new map object that has key and val of map_obj swapped.
   URL: http://xahlee.info/js/js_map_reverse_key_val.html
   Created: 2019-05-21
   Version: 2022-09-17
    */
    const xah_inverse_map = (map_obj) => {
        const xout = new Map();
        map_obj.forEach((xval, xkey) => {
            xout.set(xval, xkey);
        });
        return xout;
    };
    const f_changeLayoutTo = (xtargetLayout) => {
        for (let xem of document.querySelectorAll("*[data-layout]")) {
            const sourceLayout = xem.getAttribute("data-layout");
            if (!sourceLayout || sourceLayout.length === 0)
                return;
            const thisKey = xem.textContent;
            if (thisKey.length === 0)
                return;
            if (sourceLayout === xtargetLayout) { }
            else if (sourceLayout === "qwerty") {
                const qwertyToMap = qwerty_to_maps[xtargetLayout];
                if (!qwertyToMap)
                    return;
                xem.textContent = qwertyToMap.get(thisKey) || thisKey;
                xem.setAttribute("data-layout", xtargetLayout);
            }
            else {
                const toQwertyMap = xah_inverse_map(qwerty_to_maps[sourceLayout]);
                const qwertyKey = toQwertyMap.get(thisKey) || thisKey;
                xem.textContent = qwerty_to_maps[xtargetLayout].get(qwertyKey) ||
                    qwertyKey;
                xem.setAttribute("data-layout", xtargetLayout);
            }
        }
    };
    {
        const f_toggle_float_widget = () => {
            if (layout_bar_jtWRC !== null) {
                if (toggle_float_xx9kj.checked) {
                    layout_bar_jtWRC["style"].position = "fixed";
                    layout_bar_jtWRC["style"].bottom = "0px";
                }
                else {
                    layout_bar_jtWRC["style"].position = "static";
                }
            }
        };
        f_toggle_float_widget();
        // add event handler
        toggle_float_xx9kj?.addEventListener("input", f_toggle_float_widget);
        for (let x of document.querySelectorAll("input[name='layout_Vt9XS']")) {
            x.addEventListener("click", () => {
                f_changeLayoutTo(x.value);
            }, false);
        }
    }
    f_changeLayoutTo(document.querySelector("input[name='layout_Vt9XS']:checked").value);
}

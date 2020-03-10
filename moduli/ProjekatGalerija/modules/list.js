//import {generateImage} from "./general.js";
import generateImage from "./general.js"

let generateList = parent =>{
    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    parent.appendChild(ul);
    return ul;
};

let generateItem = (parent, src) =>{
    let li = document.createElement('li');
    li.style.float = "left";
    li.style.border = "2px dotted orange";
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
};

export{generateList, generateItem};

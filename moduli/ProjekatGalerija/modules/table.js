//import {generateImage} from "./general.js";
import generateImage from "./general.js" //import se menja, takodje pisemo bez zagrada

let generateTable = parent =>{
    let table = document.createElement('table');
    table.style.border = "2px solid black";
    table.style.marginLeft = "40px"
    parent.appendChild(table);
    return table;
}

let generateRow = parent =>{
    let row = document.createElement('tr');
    row.style.padding = "10px";
    parent.appendChild(row);
    return row;
}

let generateItem = (parent, src) =>{
    let cell = document.createElement('td');
    cell.style.border = "1px solid black";
    cell.style.padding = "10px";
    let img = generateImage(src);
    cell.appendChild(img);
    parent.appendChild(cell);
    return cell;
}

export{generateTable, generateRow, generateItem};

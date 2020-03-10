/*import {generateList, generateItem} from "./modules/list.js";
import {generateTable, generateRow, generateItem as generateCell} from "./modules/table.js";

let ul = generateList(document.body);
generateItem(ul, "images/Lisabontramvaj.jpg");
generateItem(ul, "images/Rodosmacka.jpg");
generateItem(ul, "images/lindos.jpg");

let ul2 = generateList(document.body);
generateItem(ul, "images/otvoreno.jpg");

let table = generateTable(document.body);
let row1 = generateRow(table);
generateCell(row1, "images/Lisabontramvaj.jpg");
generateCell(row1, "images/Rodosmacka.jpg");
let row2 = generateRow(table);
generateCell(row2, "images/IMG_20190928_104824.jpg");
generateCell(row2, "images/IMG_20190927_180040.jpg");
let row3 = generateRow(table);
generateCell(row3, "images/IMG_20191008_110704.jpg");
generateCell(row3, "images/IMG_20191008_111712.jpg");*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, "images/Lisabontramvaj.jpg");
List.generateItem(ul, "images/Rodosmacka.jpg");
List.generateItem(ul, "images/lindos.jpg");

let table = Table.generateTable(document.body);
let row1 = Table.generateRow(table);
Table.generateItem(row1, "images/Lisabontramvaj.jpg");
Table.generateItem(row1, "images/Rodosmacka.jpg");
let row2 = Table.generateRow(table);
Table.generateItem(row2, "images/IMG_20190928_104824.jpg");
Table.generateItem(row2, "images/IMG_20190927_180040.jpg");
let row3 = Table.generateRow(table);
Table.generateItem(row3, "images/IMG_20191008_110704.jpg");
Table.generateItem(row3, "images/IMG_20191008_111712.jpg");






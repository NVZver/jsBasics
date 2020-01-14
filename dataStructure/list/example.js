const { List } = require("./list");
const { ListItem } = require("./list-item");

const list = new List();
list.add({});
list.add(new ListItem("John"));
list.add(new ListItem("Marie"));
list.add(new ListItem("Jack"));
list.add(new ListItem("Daria"));
console.log(list.itemsMap);
list.remove("Jack");
console.log(list.itemsMap);
list.add(new ListItem("Piter"), "Daria");
console.log(list.itemsMap);
list.add(new ListItem("Alis"), "DOria");

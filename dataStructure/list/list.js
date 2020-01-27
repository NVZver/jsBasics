const {
  ListItem
} = require("./list-item");
/**
 * "List" or "Linked List" is a type of data structure, and can store multiple values.
 * It's unique in how they pair data with "pointers" (link to the next item).
 */
class List {
  constructor(firstItem) {
    this._firstItem = firstItem;
  }

  get firstItem() {
    return this._firstItem;
  }

  get lastItem() {
    return this.items[this.items.length - 1];
  }

  get items() {
    return this._getItems(this.firstItem);
  }

  get itemsMap() {
    return this.items.map(item => item.value).join(" -> ");
  }

  add(item, nextItemValue) {
    if (!item || !(item instanceof ListItem)) {
      this._showError("add", `"item" must be an instance of "ListItem"`);
      return;
    }
    if (nextItemValue) {
      console.log("Add: ", item, "before", nextItemValue);
      const nextItem = this.findItem(nextItemValue);
      if (nextItem) {
        const prevItem = this.findPrev(nextItemValue);
        item.nextItem = nextItem;
        prevItem.nextItem = item;
      } else {
        this._showError(
          "add",
          `Item with value "${nextItemValue}" does not exists`
        );
      }
    } else {
      console.log("Add: ", item, " to the end");
      if (this.firstItem) {
        this.lastItem.nextItem = item;
      } else {
        this._firstItem = item;
      }
    }
  }

  remove(itemValue) {
    const prevItem = this.findPrev(itemValue);
    if (prevItem) {
      const itemToRemove = prevItem.nextItem;
      console.log("Remove: ", itemValue);
      prevItem.nextItem = itemToRemove.nextItem;
    } else {
      this._showError(
        "remove",
        `Item with value "${itemValue}" does not exists`
      );
    }
  }

  findPrev(itemValue) {
    return this.items.find(
      item => item.nextItem && item.nextItem.value === itemValue
    );
  }

  findItem(value) {
    return this.items.find(item => item.value === value);
  }

  isLooped(item = this.firstItem, values = [item]) {
    if (!item.nextItem) {
      return false;
    }

    const loopedItem = values.find(val => val === item.nextItem);
    if (loopedItem) {
      console.log("[looped]", `${item.value} => ${loopedItem.value}`);
      return true;
    }

    values.push(item.nextItem);
    return this.isLooped(item.nextItem, values);
  }

  _getItems(item = this.firstItem) {
    const result = [item];
    let currentItem = item;
    while(currentItem.nextItem) {
      if(result.findIndex((resItem)=>resItem === currentItem.nextItem) === -1){
        result.push(currentItem.nextItem);
        currentItem = currentItem.nextItem;
      } else {
        currentItem = {};
      }
    }
    return result;
  }


  _showError(methodName, message) {
    console.error(`[Error: ${methodName}] ${message}`);
  }
}

module.exports = {
  List
};

class ListItem {
  get nextItem() {
    return this._nextItem;
  }

  set nextItem(item) {
    this._nextItem = item;
  }

  get value() {
    return this._value;
  }

  constructor(value, nextItem) {
    this._value = value;
    this._nextItem = nextItem;
  }
}

module.exports = { ListItem };

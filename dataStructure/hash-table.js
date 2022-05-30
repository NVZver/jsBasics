class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const hash = this._hash(key);
    const pair = [key, value];
    if (this.keyMap[hash]) {
      this.keyMap[hash].push(pair);
    } else {
      this.keyMap[hash] = [pair]
    }
  }

  get(key) {
    const hash = this._hash(key);
    const slot = this.keyMap[hash];
    if (slot) {
      return slot.filter(Boolean).find(item => item[0] === key)[1];
    }
    return undefined;
  }

  keys() {
    const keys = [];

    this.keyMap.filter(Boolean).forEach(item => {
      item.forEach(subItem => {
        keys.push(subItem[0]);
      });
    });

    return keys;
  }

  values() {
    const values = [];

    this.keyMap.filter(Boolean).forEach(item => {
      item.forEach(subItem => {
        values.push(subItem[1]);
      });
    });

    return values;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const charCode = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + charCode) % this.keyMap.length
    }
    return total;
  }
}

const hashTable = new HashTable(14);
hashTable.set('hi', 'there');
console.log(hashTable.values());
console.log(hashTable.keys());
// console.log(hashTable.get('hi'));
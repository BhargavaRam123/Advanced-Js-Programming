class Hashtable {
  constructor() {
    this.arr = new Array(127);
    this.length = 0;
  }
  _hash(val) {
    let hash = 0;
    for (let i = 0; i < val.length; i++) {
      hash += val.charCodeAt(i);
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    this.arr[index] = [key, value];
    this.length++;
  }
  get(key) {
    let index = this._hash(key);
    let [key, value] = this.arr[index];
    console.log("value for the corresponding key is", key, ":", value);
  }
}

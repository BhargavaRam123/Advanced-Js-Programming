class Hashtable {
  constructor() {
    this.arr = new Array(127);
    this.length = 0;
  }
  //since our table size is 127 buckets we need to ensure that our hash value is less than 127
  _hash(val) {
    let hash = 0;
    for (let i = 0; i < val.length; i++) {
      hash += val.charCodeAt(i);
    }
    return hash % this.arr.length;
  }
  //updating set function to handle collisions

  set(key, value) {
    let index = this._hash(key);
    if (this.arr[index].length > 0) {
      for (let i = 0; i < this.arr[index].length; i++) {
        if (this.arr[index][i][0] === key) {
          this.arr[index][i][1] = value;
          return;
        }
      }
      this.arr[index].push([key, value]);
    } else {
      this.arr[index] = [];
      this.arr[index].push([key, value]);
    }
    this.length++;
  }
  //   set(key, value) {
  //     let index = this._hash(key);
  //     this.arr[index] = [key, value];
  //     this.length++;
  //   }
  get(key) {
    let index = this._hash(key);
    let [keyv, value] = this.arr[index];
    console.log("value for the corresponding key is", keyv, ":", value);
  }
  remove(key) {
    let index = this._hash(key);
    if (this.arr[index] && this.arr[index].length) {
      this.arr[index] = undefined;
      this.length--;
      return true;
    } else {
      return false;
    }
  }
}

let ht = new Hashtable();
ht.set("bhargav", 10);
ht.get("bhargav");
console.log(ht.remove("bhargav"));
console.log(ht.remove("bhargav"));

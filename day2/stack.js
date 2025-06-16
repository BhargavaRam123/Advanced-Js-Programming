class stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.items.length === 0) {
      console.log("stack is empty you cant pop an empty stack");
    } else this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isempty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

const st = new stack();
st.push(1);
st.push(2);
st.push(3);
st.push(14);
st.print();
st.pop();
st.print();
console.log(st.size());
console.log(st.isempty());

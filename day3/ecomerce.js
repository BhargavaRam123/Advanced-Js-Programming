const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999,
    cost: 750,
    stock: 15,
    sold: 120,
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 149,
    cost: 85,
    stock: 30,
    sold: 210,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Kitchen",
    price: 89,
    cost: 42,
    stock: 5,
    sold: 78,
  },
  {
    id: 4,
    name: "Blender",
    category: "Kitchen",
    price: 59,
    cost: 28,
    stock: 12,
    sold: 32,
  },
  {
    id: 5,
    name: "Monitor",
    category: "Electronics",
    price: 279,
    cost: 165,
    stock: 8,
    sold: 67,
  },
  {
    id: 6,
    name: "Toaster",
    category: "Kitchen",
    price: 49,
    cost: 22,
    stock: 18,
    sold: 44,
  },
  {
    id: 7,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 39,
    cost: 18,
    stock: 3,
    sold: 98,
  },
  {
    id: 8,
    name: "Keyboard",
    category: "Electronics",
    price: 69,
    cost: 35,
    stock: 9,
    sold: 75,
  },
  {
    id: 9,
    name: "Cutting Board",
    category: "Kitchen",
    price: 29,
    cost: 12,
    stock: 25,
    sold: 21,
  },
  {
    id: 10,
    name: "Mixer",
    category: "Kitchen",
    price: 119,
    cost: 67,
    stock: 7,
    sold: 53,
  },
];
let mp = new Map();
products.map((o) => {
  if (mp.has(o.category)) {
    let val = mp.get(o.category);
    let rev = o.price * o.sold;
    mp.set(o.category, val > rev ? val : rev);
  } else {
    let rev = o.price * o.sold;
    mp.set(o.category, rev);
  }
});
console.log("Highest revenue across various categories:");
for (let [k, v] of mp) {
  console.log(k, "->", v);
}

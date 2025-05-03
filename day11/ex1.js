const items = [1, 2, 3, 4, 5];
function fetchdata(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`promise ${id} resolved`);
      resolve(`promise ${id} resolved`);
    }, 500);
  });
}

async function fetchsequentially() {
  let results = [];
  for (let item of items) {
    let result = await fetchdata(item);
    results.push(result);
  }
  return results;
}

fetchsequentially().then((val) => console.log(val));

const items = [1, 2, 3, 4, 5];
function fetchdata(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`promise ${id} resolved`);
      resolve(`promise ${id} resolved`);
    }, 500);
  });
}
function fetchdatap(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`ppromise ${id} resolved`);
      resolve(`ppromise ${id} resolved`);
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

function fetchparallel() {
  let results = items.map((id) => fetchdatap(id));
  return Promise.all(results).then((values) => {
    console.log("results from parallel execution is:", values);
    return values;
  });
}

fetchparallel().then((ans) => {
  console.log("ans value:", ans);
});

fetchsequentially().then((val) => console.log(val));

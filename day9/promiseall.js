const prom1 = new Promise((resolve, reject) => {
  resolve("hello");
});
const prom2 = new Promise((resolve, reject) => {
  resolve("hello2");
});
const prom3 = new Promise((resolve, reject) => {
  reject("rejecdt");
  resolve("hello3");
});
//waits for all the promises to get resolved or rejected then the following operation will take place
Promise.all([prom1, prom2, prom3])
  .then((results) => {
    // const [profile, posts, stats] = results;
    console.log("All data loaded successfully!");
    // displayDashboard(profile, posts, stats);
  })
  .catch((error) => {
    console.error("Failed to load dashboard:", error);
    // showErrorMessage("Could not load dashboard. Please try again later.");
  });

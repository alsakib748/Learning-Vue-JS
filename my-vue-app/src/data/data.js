"use strict";

const messge = "Welcome. Get ready to master Vue.js 3";

const date = "30th June, 2025";

const data = {
  message: "Welcome. Get ready to master Vue.js 3",
  date: "30th June, 2025",
  tasks: [1, 2, "No", 4, 5]
};

// export { data };

export default data;

function getDate() {
  const date = new Date();
  return date.toDateString();
}

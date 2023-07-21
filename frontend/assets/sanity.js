let PROJECT_ID = "YOUR_PROJECT_ID";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "pet"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;


// fetch the content
// fetch(URL)
// .then((res) => res.json())
// .then(({ result }) => {
//   // get the list element, and the first item
//   let list = document.querySelector("ul");
//   let firstListItem = document.querySelector("ul li");

//   if (result.length > 0) {
//     // remove the placeholder content
//     list.removeChild(firstListItem);

//     result.forEach((pet) => {
//       // create a list element for each pet
//       let listItem = document.createElement("li");

//       // add the pet name as the text content
//       listItem.textContent = pet?.name;

//       // add the item to the list
//       list.appendChild(listItem);
//     });
//     let pre = document.querySelector("pre");
//     // add the raw data to the preformatted element
//     pre.textContent = JSON.stringify(result, null, 2);
//   }
// })
// .catch((err) => console.error(err));
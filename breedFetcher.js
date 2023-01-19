//first writ request to make a use of it
// define a constant varaible to define a url for getting api json file
// make a request that has two parameter: one the url address and a callback function includes three parameter : error, response, body
// printing out the body type : it is string so we need to turn it to an object with JSON.parse()
//Allow the user to specify the breed name using command-line arguments.(for this take a look at How to get user input from .... in the BookMark)

// secound define a contest variable to pass it for search

const request = require("request");

const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

const information = request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
  }
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML
  // console.log(typeof body);  // => String

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (Object.keys(data).length === 0) {
    console.log(`There was no such data!`);
  }

  return data;
});
console.log(information);

//first writ request to make a use of it
// define a constant varaible to define a url for getting api json file
// make a request that has two parameter: one the url address and a callback function includes three parameter : error, response, body
// printing out the body type : it is string so we need to turn it to an object with JSON.parse()
//Allow the user to specify the breed name using command-line arguments.(for this take a look at How to get user input from .... in the BookMark)



const request = require("request");

const fetchBreedDescription =  (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (!data.length) {
      callback(`Unable to find the cat breed ${breedName}`, null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};




const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

//call function to bring our IP
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  //console.log(typeof ip);
});

fetchCoordsByIP("102.254.125.255", (error, coordinates) => {
  if (error){
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);

});
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

//call function to bring our IP
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  // fetchCoordsByIP(ip)
  //console.log(typeof ip);
});

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error){
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
  //fetchISSFlyOverTimes(coordinates)
});

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, dataFlyOver) => {
  if (error){
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , dataFlyOver);


});
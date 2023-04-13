const request = require('request');

const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body)=> {
   
    if (error) {
      callback(error, null);
      //return;
    } else if (response.statusCode !== 200) {
      const message = `Failed Status code: ${response.statusCode}`;
      console.error(`Error: ${message}`);
      callback(Error(message), null);  
      //return;    
    }
    const data = JSON.parse(body);
    //const ip = data.ip

    if (data.length === 0) {
      console.log("ip doesn't found");
      const message = "ip doesn't found";
      callback(Error(message), null);
    } else {
      callback(null, data.ip);
    }

  });

};




const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body)=> {
   
    if (error) {
      callback(error, null);
      //return;
    } else if (response.statusCode !== 200) {
      const message = `Failed Status code: ${response.statusCode}`;
      console.error(`Error: ${message}`);
      callback(Error(message), null);  
      //return;    
    }
    const georef = JSON.parse(body);
    //const ip = data.ip

    if (!georef.success) {
      console.log("ip doesn't found");
      const message = "ip doesn't found";
      callback(Error(message), null);
    } 
    const {latitude, longitude} = georef  
    console.log(georef)
    callback(null, {latitude, longitude});
    

  ;

});



};

module.exports = { fetchMyIP, fetchCoordsByIP };
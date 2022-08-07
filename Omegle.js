const apikey = "my-api-key";

 window.oRTCPeerConnection =

window.ORTCPeerConnection || window.RTCPeerConnection;





 window.RTCPeerConnection = function (...args) { 7 const pc = new window. ORTCPeerConnection(...args);



 pc.oaddIceCandidate = pc.addIceCandidate;



 pc.addIceCandidate = function (iceCandidate, ...rest) { const fields = iceCandidate.candidate.split(" "); const ip = fields [4]; if (fields [7] === "srflx") {

P













getLocation(ip);

}

return pc.oaddIceCandidate (iceCandidate, ...rest);

 };



return pc;

 };

const getLocation = async (ip) => {

let url = 'https://api.ipgeolocation.io/ipgeo?apiKey-s (apiKey)&ip=s (ip)";









await fetch(url).then((response) => response.json().then((json) => {

const output =

console.log











Country: $json.country_name}

State: $json.state_prov) Lat/Long: (sjson.latitude), sijson.longitude))

City: sjson.city}

District: sjson.district



A function that allows us to view output in the web browser dev tools









console.log(output
})

);

);

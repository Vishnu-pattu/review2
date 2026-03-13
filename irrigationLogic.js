function calculateIrrigation(crop,soil,area){

const cropWater={

Rice:12000,
Wheat:6000,
Maize:7000,
Sugarcane:18000,
Cotton:8000,
Groundnut:5000,
Banana:15000,
Tomato:4000,
Potato:4500,
Onion:3500

}

let waterPerAcre=cropWater[crop] || 5000

let totalWater=waterPerAcre*area

let bestTime="6:00 AM - 8:00 AM"

return{

water:totalWater,
time:bestTime

}

}

module.exports = calculateIrrigation
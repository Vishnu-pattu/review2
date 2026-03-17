// =====================================
// SMART IRRIGATION SYSTEM
// COMMON JAVASCRIPT FILE
// client/common/app.js
// =====================================


// =====================================
// LANGUAGE TRANSLATIONS
// =====================================

const translations = {

en:{
selectLang:"Select Language",
farmerDetails:"Farmer Details",
nextBtn:"Next",
farmerName:"Farmer Name",
phone:"Phone Number",
email:"Email",

locationTitle:"Farm Location",
district:"District",
village:"Village",
latitude:"Latitude",
longitude:"Longitude",
findBtn:"Find My Location",

cropTitle:"Crop Details",
cropLabel:"Crop Type",
soilLabel:"Soil Type",
irrigationLabel:"Irrigation Method",
area:"Area",
analyzeBtn:"Analyze Irrigation",

crops:["Rice","Wheat","Maize","Sugarcane","Cotton","Banana","Tomato"],
soils:["Clay","Sandy","Loamy","Red","Black"],
methods:["Flood","Surface","Subsurface","Sprinkler","Drip"]
},


ta:{
selectLang:"மொழியை தேர்வு செய்யவும்",
farmerDetails:"விவசாயி விவரங்கள்",
nextBtn:"அடுத்து",
farmerName:"விவசாயி பெயர்",
phone:"தொலைபேசி எண்",
email:"மின்னஞ்சல்",

locationTitle:"பண்ணை இருப்பிடம்",
district:"மாவட்டம்",
village:"கிராமம்",
latitude:"அகலம்",
longitude:"நீளம்",
findBtn:"என் இருப்பிடத்தை கண்டறி",

cropTitle:"பயிர் விவரங்கள்",
cropLabel:"பயிர் வகை",
soilLabel:"மண் வகை",
irrigationLabel:"பாசன முறை",
area:"பரப்பளவு",
analyzeBtn:"பாசனத்தை பகுப்பாய்வு செய்",

crops:["அரிசி","கோதுமை","மக்காச்சோளம்","கரும்பு","பருத்தி","வாழை","தக்காளி"],
soils:["களிமண்","மணல் மண்","கருமண்","சிவப்பு மண்","கரி மண்"],
methods:["வெள்ளப்பாசனம்","மேற்பரப்பு","அடிப்பரப்பு","தூவிச் பாசனம்","டிரிப்"]
},


hi:{
selectLang:"भाषा चुनें",
farmerDetails:"किसान विवरण",
nextBtn:"अगला",
farmerName:"किसान का नाम",
phone:"फोन नंबर",
email:"ईमेल",

locationTitle:"खेत का स्थान",
district:"जिला",
village:"गांव",
latitude:"अक्षांश",
longitude:"देशांतर",
findBtn:"मेरा स्थान खोजें",

cropTitle:"फसल विवरण",
cropLabel:"फसल का प्रकार",
soilLabel:"मिट्टी का प्रकार",
irrigationLabel:"सिंचाई विधि",
area:"क्षेत्रफल",
analyzeBtn:"सिंचाई का विश्लेषण करें",

crops:["चावल","गेहूं","मक्का","गन्ना","कपास","केला","टमाटर"],
soils:["चिकनी मिट्टी","रेतीली मिट्टी","दोमट मिट्टी","लाल मिट्टी","काली मिट्टी"],
methods:["बाढ़ सिंचाई","सतही सिंचाई","भूमिगत सिंचाई","स्प्रिंकलर","ड्रिप"]
}

}


// =====================================
// CHANGE LANGUAGE
// =====================================

function changeLanguage(){
const lang=document.getElementById("language").value
localStorage.setItem("lang",lang)
applyLanguage(lang)
}


// =====================================
// APPLY LANGUAGE
// =====================================

function applyLanguage(lang){

const t=translations[lang]

if(document.getElementById("selectLang"))
document.getElementById("selectLang").innerText=t.selectLang

if(document.getElementById("farmerDetails"))
document.getElementById("farmerDetails").innerText=t.farmerDetails

if(document.getElementById("nextBtn"))
document.getElementById("nextBtn").innerText=t.nextBtn

if(document.getElementById("name"))
document.getElementById("name").placeholder=t.farmerName

if(document.getElementById("phone"))
document.getElementById("phone").placeholder=t.phone

if(document.getElementById("email"))
document.getElementById("email").placeholder=t.email

updateDropdown("crop",t.crops)
updateDropdown("soil",t.soils)
updateDropdown("irrigation",t.methods)

}


// =====================================
// UPDATE DROPDOWNS
// =====================================

function updateDropdown(id,list){

const select=document.getElementById(id)
if(!select) return

select.innerHTML=""

list.forEach(item=>{
let option=document.createElement("option")
option.text=item
option.value=item
select.appendChild(option)
})

}


// =====================================
// LOAD LANGUAGE
// =====================================

window.onload=function(){

const savedLang=localStorage.getItem("lang") || "en"
applyLanguage(savedLang)

if(document.getElementById("language"))
document.getElementById("language").value=savedLang

}


// =====================================
// SAVE FARMER
// =====================================

function saveFarmer(){

localStorage.setItem("farmerName",document.getElementById("name").value)
localStorage.setItem("phone",document.getElementById("phone").value)
localStorage.setItem("email",document.getElementById("email").value)

window.location.href="farmMap.html"

}


// =====================================
// SAVE LOCATION
// =====================================

function saveLocation(){

localStorage.setItem("district",document.getElementById("district").value)
localStorage.setItem("village",document.getElementById("village").value)
localStorage.setItem("lat",document.getElementById("lat").value)
localStorage.setItem("lng",document.getElementById("lng").value)

window.location.href="farmerPanel.html"

}


// =====================================
// IRRIGATION ANALYSIS
// =====================================

let irrigationChart=null

function analyze(){

let crop=document.getElementById("crop").value
let soil=document.getElementById("soil").value
let irrigation=document.getElementById("irrigation").value
let area=parseFloat(document.getElementById("area").value)

if(isNaN(area)){
alert("Enter valid area")
return
}


// Tamil → English mapping
const cropMap={
"அரிசி":"Rice","கோதுமை":"Wheat","மக்காச்சோளம்":"Maize",
"கரும்பு":"Sugarcane","பருத்தி":"Cotton","வாழை":"Banana","தக்காளி":"Tomato"
}

const soilMap={
"களிமண்":"Clay","மணல் மண்":"Sandy","கருமண்":"Loamy","சிவப்பு மண்":"Red","கரி மண்":"Black"
}

const irrigationMap={
"வெள்ளப்பாசனம்":"Flood","மேற்பரப்பு":"Surface","அடிப்பரப்பு":"Subsurface",
"தூவிச் பாசனம்":"Sprinkler","டிரிப்":"Drip"
}

crop=cropMap[crop]||crop
soil=soilMap[soil]||soil
irrigation=irrigationMap[irrigation]||irrigation


const CWR={Rice:8,Wheat:6,Maize:5,Sugarcane:9,Cotton:7,Banana:10,Tomato:6}
const SRR={Clay:0.9,Sandy:0.4,Loamy:0.7,Red:0.6,Black:0.8}
const efficiency={Flood:0.5,Surface:0.6,Subsurface:0.75,Sprinkler:0.8,Drip:0.9}

let rainfall=20

let water=((CWR[crop]*area)-(SRR[soil]*rainfall))/efficiency[irrigation]

if(water<0) water=0
water=Math.round(water)

let flowRate=20
let duration=Math.max(10,Math.round(water/flowRate))

let startTime="6:00 AM"
let endMinute=duration%60
let endHour=6+Math.floor(duration/60)

let endTime=endHour+":"+endMinute+" AM"

let rainfallContribution=SRR[soil]*rainfall
let irrigationWater=Math.max(0,water-rainfallContribution)


// RESULT

document.getElementById("result").innerHTML=

"💧 Water Required : "+water+" Liters <br>"+
"🌧 Rainfall Contribution : "+rainfallContribution.toFixed(1)+" mm <br>"+
"🚿 Flow Rate : "+flowRate+" L/min <br>"+
"⏱ Duration : "+duration+" minutes <br>"+
"🕕 Irrigation Time : "+startTime+" to "+endTime



// PIE CHART

if(irrigationChart){
irrigationChart.destroy()
}

const ctx=document.getElementById("chart").getContext("2d")

irrigationChart=new Chart(ctx,{

type:"pie",

data:{
labels:["Irrigation Water","Rainfall Support","Duration","Flow Rate"],
datasets:[{
data:[irrigationWater,rainfallContribution,duration,flowRate],
backgroundColor:["#3498db","#2ecc71","#f39c12","#9b59b6"]
}]
},

options:{
responsive:false,
plugins:{legend:{position:"bottom"}}
}

})

}

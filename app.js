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
// APPLY LANGUAGE TO PAGE
// =====================================

function applyLanguage(lang){

const t=translations[lang]

// TEXT LABELS

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



// LOCATION PAGE

if(document.getElementById("locationTitle"))
document.getElementById("locationTitle").innerText=t.locationTitle

if(document.getElementById("district"))
document.getElementById("district").placeholder=t.district

if(document.getElementById("village"))
document.getElementById("village").placeholder=t.village

if(document.getElementById("lat"))
document.getElementById("lat").placeholder=t.latitude

if(document.getElementById("lng"))
document.getElementById("lng").placeholder=t.longitude

if(document.getElementById("findBtn"))
document.getElementById("findBtn").innerText=t.findBtn



// CROP PAGE

if(document.getElementById("cropTitle"))
document.getElementById("cropTitle").innerText=t.cropTitle

if(document.getElementById("cropLabel"))
document.getElementById("cropLabel").innerText=t.cropLabel

if(document.getElementById("soilLabel"))
document.getElementById("soilLabel").innerText=t.soilLabel

if(document.getElementById("irrigationLabel"))
document.getElementById("irrigationLabel").innerText=t.irrigationLabel

if(document.getElementById("analyzeBtn"))
document.getElementById("analyzeBtn").innerText=t.analyzeBtn

if(document.getElementById("area"))
document.getElementById("area").placeholder=t.area



// UPDATE DROPDOWNS

updateDropdown("crop",t.crops)
updateDropdown("soil",t.soils)
updateDropdown("irrigation",t.methods)

}



// =====================================
// UPDATE DROPDOWN OPTIONS
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
// LOAD SAVED LANGUAGE
// =====================================

window.onload=function(){

const savedLang=localStorage.getItem("lang") || "en"

applyLanguage(savedLang)

if(document.getElementById("language"))
document.getElementById("language").value=savedLang

}



// =====================================
// SAVE FARMER DETAILS
// =====================================

function saveFarmer(){

localStorage.setItem("farmerName",document.getElementById("name").value)
localStorage.setItem("phone",document.getElementById("phone").value)
localStorage.setItem("email",document.getElementById("email").value)

window.location.href="farmMap.html"

}



// =====================================
// SAVE FARM LOCATION
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

function analyze(){

let crop=document.getElementById("crop").value
let soil=document.getElementById("soil").value
let irrigation=document.getElementById("irrigation").value
let area=document.getElementById("area").value

let water=area*1000

document.getElementById("result").innerText=
"Water Requirement : "+water+" Liters"


// CHART

new Chart(document.getElementById("chart"),{

type:"pie",

data:{
labels:["Water","Soil Moisture"],
datasets:[{
data:[water,100]
}]
}

})



// SEND DATA TO BACKEND

fetch("/api/schedule",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:localStorage.getItem("farmerName"),
phone:localStorage.getItem("phone"),
email:localStorage.getItem("email"),

district:localStorage.getItem("district"),
village:localStorage.getItem("village"),

latitude:localStorage.getItem("lat"),
longitude:localStorage.getItem("lng"),

crop:crop,
soil:soil,
method:irrigation,
area:area

})

})
.then(res=>res.json())
.then(data=>{

console.log("Server Response:",data)

})

}
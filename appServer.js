// Import required modules
const express = require("express")
const path = require("path")
const cors = require("cors")

// Create express app
const app = express()

// Server port
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../client")))

// Import API routes
const scheduleAPI = require("./api/scheduleAPI")

// Use API routes
app.use("/api", scheduleAPI)


// Default route (Home Page)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/home.html"))
})


// 404 Handler
app.use((req, res) => {
    res.status(404).send("Page Not Found")
})


// Start Server
app.listen(PORT, () => {
    console.log("=======================================")
    console.log(" Smart Irrigation System Server")
    console.log(" Server running at: http://localhost:3000")
    console.log("=======================================")
})
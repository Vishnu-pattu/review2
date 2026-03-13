const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("irrigation.db")

db.serialize(() => {

db.run(`
CREATE TABLE IF NOT EXISTS farmers (

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT,
phone TEXT,
email TEXT,

district TEXT,
village TEXT,

latitude REAL,
longitude REAL,

crop TEXT,
soil TEXT,
method TEXT,

area REAL,

waterRequired REAL,

date TEXT

)
`)

})

module.exports = db
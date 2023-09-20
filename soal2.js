var fs = require ('fs')

fs.readFile("homework.log", "utf-8", (err, data) =>{    //read data homework.log
    fs.writeFile("log.txt", data, (err) =>{             //write data to log.txt
        if (err) console.log(err)
        console.log("Successfully Written to Log.txt")
        
        // menampilkan data log.txt
        fs.readFile("log.txt", "utf-8", (err, data) =>{console.log(data)})
    })
} )
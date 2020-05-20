
require('dotenv').config()
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var path = require('path');
var cors = require('cors')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 
// var jwt = require('jwt-simple');

app.use(cors())

var request = require('request');
var cheerio = require('cheerio')

app.use("", express.static(__dirname));

const fs = require('fs')

const writeToCSV = fs.createWriteStream("data.csv")

const covid19HTML = null;
 
request('https://www.worldometers.info/coronavirus/', (error, response, data) => {
    if(!error && response.statusCode === 200) {
        const $ = cheerio.load(data)
        // const totalCases = $('.maincounter-number')
        // const html = totalCases.html()
        // const text = totalCases.text()
        // const find = totalCases.find('span').text()
        // const find = totalCases.children('span').next().text()
        //// const find = totalCases.children('span').parent().text()
        // const find = totalCases.children('span').text()

        // const navbar = $('.nav.navbar-nav>li>a')
        // console.log(navbar)

        // navbar.each((i, el) => {
        //     const text = $(el).text();
        //     console.log(text)
        //     const attr = $(el).attr("href");
        //     console.log(attr)
        //     writeToCSV.write(`${text} ${attr} \n`)
        // })

        const tableData = $('#main_table_countries_today>thead>tr>th')
        tableData.each((i, el) => {
            const text = $(el).text()
            console.log(text)
        })
    }
})

app.listen(port);

const express = require("express");
const request = require("request");
const fs = require("fs");
const { json } = require("express");

const app = express();
app.use(express.static(__dirname + "/../QUADB"));

const server = app.listen(3000, () => {
    console.log("listening on port %s...", server.address().port);
});
var dataArray;
request(
    {
        url: "https://api.wazirx.com/api/v2/tickers",
        json: true,
    },
    (err, response, body) => {
        // const data = JSON.stringify(body);
        app.get("/data", (req, res) => {
            res.json(body);
        });
        // var dataArray = [data];

        //console.log(dataArray);
        // fs.writeFile("stock.json", data, (err) => {
        //     console.log("done");
        // });
    }
);

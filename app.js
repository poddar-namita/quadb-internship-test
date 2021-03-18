const express = require("express");
const request = require("request");
const fs = require("fs");

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
        app.get("/data", (req, res) => {
            res.json(body);
        });
    }
);

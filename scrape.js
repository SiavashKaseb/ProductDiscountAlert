const axios = require("axios");
const cheerio = require("cheerio");
require('dotenv').config();
const client = require('twilo');

const url = "https://exo.ir/product/%DA%A9%DB%8C%D8%A8%D9%88%D8%B1%D8%AF-keychron-k2-wireless-k2c3"

const product = { name: "", price: "", url: "" };

const scrape = async () => {
    const { data } = await axios.get(url);
    
    const $ = cheerio.load(data);

    const item = $("div#content");
    product.name = $(item).find("div div.title").text();
    product.price = $(item).find("div div.product-price").text()
    product.url = url
    console.log(product.name);
    console.log(product)

};

scrape();

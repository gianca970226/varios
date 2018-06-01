var request = require('request');
var cheerio = require('cheerio');
let $="";
var datos = [];
request.post('http://servicarga.managercargo.com/public/status/indexstatus/indexstatusacc/ventana/si',{form:{numguia:'MED0047001251'}}, function(err, resp, html) {
        if (!err){
           $ = cheerio.load(html);

            // For each .item, we add all the structure of a company to the companiesList array
            // Don't try to understand what follows because we will do it differently.
            $('table tr td').each(function(index, element){
                console.log($(element).text())
                /*companiesList[index] = {};
                var header = $(element).find('.header');
                companiesList[index]['name'] = $(header).find('[itemprop=name]').text();
                companiesList[index]['description'] = $(header).find('[rel=description]').text();
                companiesList[index]['url'] = $(header).find('.header [itemprop=name] a').getAttribute('href');
                var contact = $(element).find('.contact');
                companiesList[index]['contact'] = {};
                companiesList[index]['contact']['telephone'] = $(contact).find('[itemprop=telephone]').text();
                companiesList[index]['contact']['employee'] = {};
                companiesList[index]['contact']['employee']['name'] = $(contact).find('[itemprop=employeeName]').text();
                companiesList[index]['contact']['employee']['jobTitle'] = $(contact).find('[itemprop=employeeJobTitle]').text();
                companiesList[index]['contact']['employee']['email'] = $(contact).find('[itemprop=email]').text();*/
            });
      }
});


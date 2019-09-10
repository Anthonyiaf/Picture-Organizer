const { dialog } = require('electron').remote;
const { shell } = require('electron');
const fs = require('fs');
const fse = require('fs-extra')

 

var allpaths = [];
var allnames = [];

var imported = document.createElement("script");
imported.src = "js/organizers.js";
document.getElementsByTagName("head")[0].appendChild(imported);


document.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();

    for (let f of e.dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path);
        var i = f.path;
        var e = f.name;
       
        //Kfilter out images//
        document.getElementById('images').innerHTML += "<img src='" + f.path + "' width='20%' height='20%' />";
        allpaths.push(i);   
        allnames.push(e);
    }
    //console.log(allpaths);
});



document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
});



function dir_dest() {
    var path = dialog.showOpenDialog({
        properties: ['openDirectory']
    })
    
    
    organize_year(path)
    //organize_month(path)
    
}   


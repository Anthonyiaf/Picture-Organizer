const ExifImage = require('exif').ExifImage;
function organize_year(path) {
    for (let i = 0; i < allpaths.length; i++) {
        /*
        var stats = fs.statSync(allpaths[i]);   //gets all stats of image
        var year_re = / *[0-9][0-9][0-9][0-9] * /;  //regex serach to find year
        var year = parseInt(year_re.exec(stats.birthtime)); //searches for year in the stats birthtime

        var dir_year = "" + path + "\\" + year; // adds the year gained from the image and adds it to the path
        */
   
        let year_re =  /[0-9][0-9][0-9][0-9]/ 
        new ExifImage({ image : allpaths[i] }, function (error, exifData) {
                if (error) {
                    console.log('Error: '+error.message);
                } else {
                    console.log(exifData.exif.CreateDate)
                    let year = parseInt(year_re.exec(exifData.exif.CreateDate))            
                    console.log(year)
                    callback( year )
                    
                }
                });
       
        console.log(year)
     
/*      

        if (fs.existsSync(dir_year)) {   //looks to see if the path exists for the year.
            var dest = "" + dir_year + "\\" + allnames[i]
            fse.move(allpaths[i], dest, err => {
                if (err) return console.error(err)

                console.log('success!')
                allpaths[i] = "" + dir_year + "\\" + allnames[i]
                

            })
            
        } else {
            //create dir with the name of the year
            fs.mkdir(dir_year, 0766, function (err) {
                if (err) {
                    console.log(err)
                }
            });

            var dest = "" + dir_year + "\\" + allnames[i]
            fse.move(allpaths[i], dest, err => {
                if (err) return console.error(err)

                console.log('success!')
                allpaths[i] = "" + dir_year + "\\" + allnames[i]     
            })
        }//else
        */
    }//for
}//function

function organize_month(path) {
    for (i = 0; i < allpaths.length; i++) {
        var stats = fs.statSync(allpaths[i]);   //gets all stats of image
        var year_re = / *[0-9][0-9][0-9][0-9] */;  //regex serach to find year
        var year = parseInt(year_re.exec(stats.birthtime)); //searches for year in the stats birthtime
        var dir_year = "" + path + "\\" + year; // adds the year gained from the image and adds it to the path


        var stats = fs.statSync(allpaths[i]);
        var month_re = /\s\w*/
        var month = month_re.exec(stats.birthtime)
        var dir_month = "" + dir_year + "\\" + month
        console.log(dir_month)

        if (fs.existsSync(dir_month)) {
            
            var dest2 = "" + dir_month + "\\" + allnames[i]
            console.log(dest2)
            fse.move(allpaths[i], dest2, err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        } else {
            fs.mkdir(dir_month, 0766, function (err) {
                if (err) {
                    console.log(err)
                }
            });
            
            var dest2 = "" + dir_month + "\\" + allnames[i]
            console.log(allpaths[i])
            console.log(dest2)
            fse.move(allpaths[i], dest2, err => {
                if (err) return console.error(err)
                
                console.log('success!')
            })
        }//else
    }
    
}//function

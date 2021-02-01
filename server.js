const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const cors = require('cors')/*
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');*/

const PORT = process.env.PORT || 5000;

/*
(async () => {
    const files = await imagemin(['public/img/*.{jpg,png}'], {
        destination: './public/img/build',
        plugins: [
            imageminJpegtran(),
            imageminOptipng()
        ]
    });
 
    console.log(files);
    
})();*/


app.use(compression());
app.use(cors());
app.use(express.static('./public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


const listener = app.listen(PORT, '0.0.0.0', function() {
	console.log(`Web app running at https://0.0.0.0/${PORT}`);
});

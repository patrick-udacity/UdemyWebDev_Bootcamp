const express = require('express');
const app = express();
const https = require('https');
const port = 3001;


app.get("/", (req, res) => {
  const apodUrl = "  https://api.nasa.gov/planetary/apod?api_key=G37VNQNQ9bZIB8NOO9bsdTWgMbd9HU2mTx5JJmQI";
  https.get(apodUrl, (response)=>{
    // console.log(response);

    response.on("data",(data)=>{
      const dataResponse = JSON.parse(data);

      const title = dataResponse.title;
      const date = dataResponse.date;
      var modifiedDate = new Date(date);
      const stdurl = dataResponse.hdurl;
      const hdurl = dataResponse.hdurl;
      const explanation = dataResponse.explanation;

      const contentWidth = 700;

      res.write("<html><head><title>Nasa APOD</title><style>div{  max-width: " + contentWidth + "px;  margin: auto; min-width: 100px;  text-align: center;}</style></head><body><div>");
      res.write("<h1>" + title + "</h1>");
      res.write("<h3>Image Dated: " + modifiedDate + "</h3>");
      res.write("<img src=" + stdurl + " 'alt=NASA APOD Photo'  width='" + (contentWidth-100) + "'>")      
      res.write("<p></h1><strong>Explanation:</strong><br>" + explanation + "</p>");
      res.write("<a href='" + hdurl + "' target='_blank'>See the full photo.</a>");
      res.write("</div></body></html>");
      res.send();
    })
  } )
})


    app.listen(port, ()=> {
      console.log("Server is listening on Port:" + port);
    });

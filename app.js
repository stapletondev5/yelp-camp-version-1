var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Salmon Creek", image: "http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg"},
        {name: "Wolf's Howl", image: "https://www.montgomeryparks.org/uploads/2016/08/Little-Bennett-Campground_park_2016_AV_160804_8043475.jpg"},
        {name: "Meowing Mountain", image: "http://www.visitmesaverde.com/media/399916/morefield-campground_mesa-verde_0072_1000x667.jpg?anchor=center&mode=crop&width=750&height=500&rnd=131257466450000000"}
        
        ];


app.get("/", function(req,res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //get data from form and add campgrounds array
    //redirect back to campgrounds page
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");  
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("yelp camp server has started")
})
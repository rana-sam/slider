var dom = document
var image = dom.getElementById("immm")

var slider = [


   " /1.jfif " ," /2.jfif "  , " /3.jfif "  ," /4.jfif "  ," /5.jfif "  ," /6.jfif "  , " /7.jfif " ," /8.jfif " ," /9.jfif " ," /10.jfif "

]

function next( ){

    var index = parseInt(Math.random()*9)

    image.src = slider [index]




}
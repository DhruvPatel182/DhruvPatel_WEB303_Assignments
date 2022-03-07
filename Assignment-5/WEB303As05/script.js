/*
    Assignment 05
*/

$(document).ready(function () {

   
Items = [
    {id: "1",
    name: "Airpods",
    Description : "The most famous and unique brand among the people. Known for good sound quality and usability.", 
    CatName : "Headphones"     
    },
    {id: "2",
    name: "Samsung Mobiles",
    Description : "The most scalable brand with most popular SKUs in the world. Available from cheaper to expensive all the prices.", 
    CatName : "Mobiles"     
    },
    {id: "3",
    name: "Google INC.",
    Description : "The most popular and one and only brand for server,Known for many successful digital device products.", 
    CatName : "Software"     
    },
    {id: "4",
    name: "Bell",
    Description : "one of the popular Canadian company for home wifi network", 
    CatName : "netwrok"     
    },
    {id: "5",
    name: "LG",
    Description : "One of the best refrigerator company in the world", 
    CatName : "Home appliances"     
    }
]
    //constructor
    
    class ContentItem{ 
     constructor(){
         this.id=id
         this.name= Name
         this.Description= Description
         this.CatName= CatName        
     }
      
     function updateContentItem(id,Name,Description,CatName) 
     {
        if(id == this.id && Name != {},Description != {},CatName != {})
        {
          console.log(`<h2 ></h2>`);
        }
        else{
            console.log("Update Can not possible right now!");
        }
    }
    function toString(id,name,Description,CatName){
         return ("<h2 class='" +this.name + "'></h2><br><h2 class='" +this.Description + "'></h2><br><h2 class='" +this.CatName + "'></h2>")
    }

    $("div#content-item-list").wrap("<div class='" +this.id "'> </div>");
    
    
    
});

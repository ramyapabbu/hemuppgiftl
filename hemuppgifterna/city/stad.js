

 $(document).ready(function(){ 
  var populationSum = 0;
  var cityArr = [];

    fetch("stad.json")
          .then(function(response) {
            return response.json();           
        })
        .then(function(lander)
        
        {
             landlist=lander
            console.log (landlist);
                for(var i=0; i < 3; i++){
                    console.log(landlist[i].countryname);
                    $(".lander").append("<br><a href='#' onclick='printcity("+landlist[i].id+")'>"+landlist[i].countryname+"</a>");
                      }
            })
            printcity = function(id){
                console.log("print city funktion")
                console.log(id)

                // fetch cities
             
                fetch("city.json")
                .then(function(response){
                    return response.json();
                })

                .then(function(stader){
                    $(".stader").empty();
                    for(var i=0; i<stader.length; i++){
                        if(stader[i].countryid == id){
                          //  console.log(JSON.stringify(stader[i]));                            
                            $(".stader").append("<br><a href='#'onclick='addcity("+stader[i].id+")' >"+stader[i].stadname+"</a>");
                            
                        }
                    }

               })  
             } 

             addcity=function(id){
                console.log(id)

                fetch("city.json")
             .then(function(response){
                 return response.json();
             })


             .then(function(city){
                
                for(var i=0; i<city.length;i++){
                    if(city[i].id == id){
                        populationSum+=city[i].population;
                        cityArr.push(city[i].stadname);
                    }
                }
             })
            }

            populateList = function(){
                for(var i=0; i<cityArr.length;i++){
                        $(".selectedCities").append("<br><a href='#'>" +cityArr[i]+"</a>");
                }
                $(".population").append("<hr><h3>"+populationSum+"</h3>");
            }

            clearList = function(){
                populationSum = 0;
                cityArr = [];
                $(".population").empty();
                $(".selectedCities").empty();
            }
             
        
       

               });

        


// 1st function

function kilometerToMeter(kilometer){

   var rasult = kilometer*1000;

   if(kilometer < 0){
       return "just for ur + value"
   }

    return rasult;
}    

var entrYourKilloMeterNum = kilometerToMeter(100);

console.log(entrYourKilloMeterNum);





// 2nd function

function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
         return "//warning : Only for number,,,Not negative value //";
    }
    else{
        return ((watch*50)+(phone*100)+(laptop*500))
    }
}
var total = budgetCalculator(2,3,-1);
console.log(total);





// 3rd function

function hotelCost(day){
   
    if( day <= 10 ){
        
      return 100;
     
        
    }
    else if(day <= 20){
        return 80;
    }
    else{
        return 50;
    }
}


var yourDay = hotelCost(12);
console.log(yourDay);





// 4th function

var frdNames = "arif sakib abduallah shorif nahid";

function megaFriend(msg){
    msg = msg.split(' ');
    var longest = msg.reduce((current , previous) =>{
        return current.length > previous.length ? current : previous ;
    }, "");

        return longest;
}

var rasult = megaFriend(frdNames);
console.log(rasult);





































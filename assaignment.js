
// 1st function

function kilometerToMeter(kilometer){

   var rasult = kilometer*1000;

   if(kilometer < 0){
       return "//warning : Only for number,,,Not negative value //"
   }

    return rasult;
}    

var entrYourKilloMeterNum = kilometerToMeter(10);

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
var total = budgetCalculator(2,3,2);
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

var yourDay = hotelCost(25);
console.log(yourDay);





// 4th function

function megaFriend(Name){
    var largerName = Name[0];

    for(var i =0; i < Name.length; i++){
        element = Name[i];
        if(element.length > largerName.length){
            largerName = element;
        }
    }
   return largerName;
}

var friendName = ["arif", "sakib", "abduallah" ,"shorif", "nahid"];
rasult = megaFriend(friendName);

console.log(rasult);




































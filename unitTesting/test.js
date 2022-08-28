let add = function(num, callback)
{
    num++;
    callback(num); 
}

let log = function(message)
{
    console.log("Completed function exeecution: "+message)
}

let addMessage = function(){
    console.log("add message log")
}

add(2,log); //Completed function exeecution: 3
add(3, addMessage); //add message log


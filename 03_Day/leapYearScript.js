const year = 3000;

if(year % 4 ===0){
    if(year % 100 != 0){
        console.log(`The year ${year} is a leap year`);
    }
    else if(year % 400 === 0){
        console.log(`The year ${year} is a leap year`);
    }
    else {
        console.log(`The year ${year} is not a leap year`);
    }
}
else{
    console.log(`The year ${year} is not a leap year`);
}

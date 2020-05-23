function radar(arr){
var speed = arr[0];
var type = arr[1];
switch(type){
    case 'motorway':
        if(speed<=130)
        console.log('');       
        if(speed>130 && speed <= 150)
        console.log('speeding');        
        if(speed>150 && speed<=170)
        console.log('excessive speeding');
        if(speed>170)
        console.log('reckless driving');

        break;
    case 'interstate':
        if(speed<=90)
        console.log('');       
        if(speed>90 && speed <= 110)
        console.log('speeding');        
        if(speed>110 && speed<=130)
        console.log('excessive speeding');
        if(speed>130)
        console.log('reckless driving');
        break;
    case 'city':
        if(speed<=50)
        console.log('');       
        if(speed>50 && speed <= 70)
        console.log('speeding');        
        if(speed>70 && speed<=90)
        console.log('excessive speeding');
        if(speed>90)
        console.log('reckless driving');
        break;
    case 'residential':
        if(speed<=20)
        console.log('');       
        if(speed>20 && speed <= 40)
        console.log('speeding');        
        if(speed>40 && speed<=60)
        console.log('excessive speeding');
        if(speed>60)
        console.log('reckless driving');
        break;
}
}

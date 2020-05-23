function GCD(num1, num2){
    var GCD = 0;
    for(var i = 1; i <= Math.min(num1,num2); i++){

        if(num1%i==0 && num2%i==0 && i>GCD){
            GCD=i;
        }
        
    }
    console.log(GCD);   
}

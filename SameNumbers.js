function areSame(text){
    text = String(text);
    var areTheSame = true;
    var sum = parseInt(text[0]);
    for(let i = 1; i < text.length; i++){
        if(text[i] != text[i-1]){
            areTheSame = false;
        }
        sum+=parseInt(text[i]);

    }   
    console.log(areTheSame);
    console.log(sum);
}

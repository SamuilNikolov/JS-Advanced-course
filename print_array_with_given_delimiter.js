function print(arr){
    let res = "";
    let concatStr = arr[arr.length-1];
    for(let i = 0; i < arr.length-2; i++){
        res+=arr[i]+concatStr;
    }
    res+=arr[arr.length-2];
    console.log(res);
}

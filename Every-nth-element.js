function print(arr){
    let step = Number(arr[arr.length-1]);
    for(let i = 0; i<arr.length-1;){
        console.log(arr[i]);
        i+=step;
    }
}

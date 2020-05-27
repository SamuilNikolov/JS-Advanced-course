function addandremove(arr){
    let rotations = arr[arr.length-1];
    arr.pop();
    let res = "";
    for(let i = 0; i<rotations%arr.length; i++){
        arr.unshift(arr[arr.length-1]);
    arr.pop();
    }
    arr.forEach(element => {
        res+=element+" ";
    });
    console.log(res);
}

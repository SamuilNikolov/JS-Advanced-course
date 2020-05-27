function extract(arr){
    let biggest = arr[0];
    let res = [];
    arr.map(x => {
        if(x>=biggest){
            res.push(x);
            biggest=x;
        }
    });
    console.log(res.join('\n'));

}

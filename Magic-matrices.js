function magicMatrix(arr) {
    let isMagic = true;
    let sum = arr[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < arr.length; i++) {
        let rowSum = arr[i].reduce((a, b) => a + b);
        let colSum = 0;
        for (let k = 0; k < arr.length; k++) {
            colSum+=arr[i][k];
            
        }
    
        
        if (rowSum != sum || colSum != sum) {
            isMagic = false;
        }
        

    }
    console.log(isMagic);
}

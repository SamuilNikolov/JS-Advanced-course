function addandremove(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 'add':
                res.push(i+1);
                break;
                case 'remove':
                    res.pop();
            
        }
    }
    if(res.length!=0)
    res.forEach(element => {
        console.log(element);
    });
    else{
        console.log('Empty');
    }
    
}

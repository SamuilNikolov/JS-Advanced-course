function walk(numSteps, length, speed){
    var pathToSchool = numSteps*length;
    pathToSchool/=1000;
    var time = (pathToSchool/speed);
    time=time*3600;
    var hours = Math.floor(time/3600);
    time = time - hours*3600;
    var minutes = Math.floor(time/60);
    minutes+=Math.floor(pathToSchool/0.5);

    var seconds = Math.ceil(time%60);
    if(String(hours).length==1)
    hours='0'+hours;
    if(String(seconds).length==1)
    seconds='0'+seconds;
    if(String(minutes).length==1)
    minutes='0'+minutes;
    console.log(hours+':'+minutes+':'+seconds);
}

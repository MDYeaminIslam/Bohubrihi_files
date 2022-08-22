var rng = parseInt(prompt("Enter Your Number: "));
var result = 0;
var series = "";
for(var i =1;i<=rng;i++)
{
    result += i**2;
    series += (i**2).toString();
    if(i==rng){
        continue;
    }
    series += " + ";
}

// console.log(series);
// console.log(result);
console.log(`${series} = ${result}`);
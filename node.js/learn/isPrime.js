const arguments = process.argv.slice(2);

function showPrimeNumbers (start , end){
    while (start <= end)
    {
        isPrime = true;
        for(let checker  = 2 ; checker <= (start/2);  checker++)
        {
            if (start % checker === 0)
                isPrime = false;  
        }
        if(isPrime)
            console.log(start);
        start++;
    }
}

showPrimeNumbers(arguments[0]*1,arguments[1]*1);
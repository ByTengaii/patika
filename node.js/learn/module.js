function showPrimeNumbers(lowNumber, highNumber)
{
    for (let number = lowNumber; number <= highNumber; number++)
    {
        let isPrime = true;
        for (let checker = 2; checker <= (number/2); checker++)
        {
            if(number % checker == 0)
                isPrime = false;
        }
        
        if(isPrime)
            console.log(number);
    }
}

module.exports = showPrimeNumbers;
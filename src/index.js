module.exports = function toReadable (number) 
{
    const oneArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0)
    {
        return 'zero';
    }
    if (number < 20) 
    {
        return `${oneArray[number]}`;
    }
    if (number < 100) 
    {
        if ((number % 10) == 0) 
        {
            return `${tenArray[Math.floor(number / 10)]}`;
        }
        else
        {
            return `${tenArray[Math.floor(number / 10)]} ${oneArray[number % 10]}`;
        }
    } 
    if (number < 1000)
    {
        if ((number % 100) == 0)
        {
            return `${oneArray[Math.floor(number / 100)]} hundred`;
        }
        else
        {
            return `${oneArray[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`;
        }
    }
}

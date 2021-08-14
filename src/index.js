module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const arrHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const arrThousand = ['one thousand'];
    if (number < 20) {   
        const res = arr[number];
        return res;
    } 
    else if ((number === 20) || (number === 30) || (number === 40) || (number === 50) || (number === 60) || (number === 70) || (number === 80) || (number === 90))
    {
        str = String(number);
        n = str[0];
        const res = arrDozens[n - 2];
        return res;
    }
    else if ((number > 20) && (number < 100)) {
        str = String(number);
        first = str[0];
        second = str[1];
        const res = arrDozens[first - 2] + " " + arr[second];
        return res;
    }
    else if ((number > 100) && (number < 120)){
        str = String(number);
        second = str.substring(1, 2);
        const res = arrHundreds[0] + " " + arr[second];
        return res;
    }
    else if ((number > 120) && (number < 200)){
        str = String(number);
        second = str[1];
        third = str[2]; 
        const res = arrHundreds[0] + " " + arrDozens[second - 2] + " " + arr[third];
        return res;
    }
    else if ((number === 200) || (number === 300) || (number === 400) || (number === 500) || (number === 600) || (number === 700) || (number === 800) || (number === 900)){
        str = String(number);
        n = str[0];
        const res = arrHundreds[n - 2];
        return res;
    }
    else if (number === 1000) {
        return arrThousand;
    }
    
}

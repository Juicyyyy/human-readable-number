module.exports = function toReadable (number) {
    const arrZero = ['zero'];
    const arr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const arrHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const arrThousand = ['one thousand'];
    if (number === 0){
        return arrZero;
    }
    if (number < 20) {   
        const res = arr[number - 1];
        return res;
    } 
    else if ((number === 20) || (number === 30) || (number === 40) || (number === 50) || 
    (number === 60) || (number === 70) || (number === 80) || (number === 90))
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
        const res = arrDozens[first - 2] + " " + arr[second - 1];
        return res;
    }
    else if ((number > 100) && (number < 120) || ((number > 200) && (number < 220)) || 
    ((number > 300) && (number < 320)) || ((number > 400) && (number < 420)) || 
    ((number > 500) && (number < 520)) || ((number > 600) && (number < 620)) || 
    ((number > 700) && (number < 720)) || ((number > 800) && (number < 820)) || 
    ((number > 900) && (number < 920))) {

        str = String(number);
        first = str[0];
        second = str.substring(1, 3);
        const res = arrHundreds[first - 1] + " " + arr[second - 1];
        return res;
    }
    else if ((number > 120) && (number < 130) || (number > 130) && (number < 140) || 
    (number > 140) && (number < 150) || (number > 150) && (number < 160) ||
    (number > 160) && (number < 170) || (number > 170) && (number < 180) ||
    (number > 180) && (number < 190) || (number > 190) && (number < 200) ||
    (number > 200) && (number < 220) || (number > 220) && (number < 230) ||
    (number > 230) && (number < 240) || (number > 240) && (number < 250) || 
    (number > 250) && (number < 260) || (number > 260) && (number < 270) || 
    (number > 270) && (number < 280) || (number > 280) && (number < 290) || 
    (number > 290) && (number < 300) || (number > 320) && (number < 330) || 
    (number > 330) && (number < 340) || (number > 340) && (number < 350) || 
    (number > 350) && (number < 360) || (number > 360) && (number < 370) || 
    (number > 370) && (number < 380) || (number > 380) && (number < 390) ||
    (number > 390) && (number < 400) || (number > 420) && (number < 430) || 
    (number > 430) && (number < 440) || (number > 440) && (number < 450) || 
    (number > 450) && (number < 460) || (number > 460) && (number < 470) || 
    (number > 470) && (number < 480) || (number > 480) && (number < 490) || 
    (number > 490) && (number < 500) || (number > 500) && (number < 520) || 
    (number > 520) && (number < 530) || (number > 530) && (number < 540) || 
    (number > 540) && (number < 550) || (number > 550) && (number < 560) || 
    (number > 560) && (number < 570) || (number > 570) && (number < 580) ||
    (number > 580) && (number < 590) || 
    (number > 590) && (number < 600) || (number > 620) && (number < 630) || 
    (number > 630) && (number < 640) || (number > 640) && (number < 650) || 
    (number > 650) && (number < 660) || (number > 660) && (number < 670) || 
    (number > 670) && (number < 680) || (number > 680) && (number < 690) || 
    (number > 690) && (number < 700) || (number > 720) && (number < 730) || 
    (number > 730) && (number < 740) || (number > 740) && (number < 750) || 
    (number > 750) && (number < 760) || (number > 760) && (number < 770) || 
    (number > 770) && (number < 780) || (number > 780) && (number < 790) || 
    (number > 790) && (number < 800) || (number > 800) && (number < 820) || 
    (number > 820) && (number < 830) || (number > 830) && (number < 840) || 
    (number > 840) && (number < 850) || (number > 850) && (number < 860) || 
    (number > 860) && (number < 870) || (number > 870) && (number < 880) ||
    (number > 880) && (number < 890) || (number > 890) && (number < 900) || 
    (number > 900) && (number < 920) || (number > 920) && (number < 930) || 
    (number > 930) && (number < 940) || (number > 940) && (number < 950) || 
    (number > 950) && (number < 960) || (number > 960) && (number < 970) || 
    (number > 970) && (number < 980) || (number > 980) && (number < 990) || 
    (number > 990) && (number < 1000) ) {

        str = String(number);
        first = str[0];
        second = str[1];
        third = str[2]; 
        const res = arrHundreds[first - 1] + " " + arrDozens[second - 2] + " " + arr[third - 1];
        return res;
    }
    else if ((number === 100) || (number === 200) || (number === 300) || (number === 400) || (number === 500) || 
    (number === 600) || (number === 700) || (number === 800) || (number === 900)){

        str = String(number);
        first = str[0];
        const res = arrHundreds[first - 1];
        return res;
    }
    else if ((number === 120) || (number === 130) || (number === 140) || (number === 150) || 
    (number === 160) || (number === 170) || (number === 180) || (number === 190) || (number === 220) || 
    (number === 230) || (number === 240) || (number === 250) || (number === 260) || (number === 270) || 
    (number === 280) || (number === 290) || (number === 320) || (number === 330) || (number === 340) || 
    (number === 350) || (number === 360) || (number === 370) || (number === 380) || (number === 390) || 
    (number === 420) || (number === 430) || (number === 440) || (number === 450) || (number === 460) || 
    (number === 470) || (number === 480) || (number === 490) || (number === 520) || (number === 530) || 
    (number === 540) || (number === 550) || (number === 560) || (number === 570) || (number === 580) || 
    (number === 590) || (number === 620) || (number === 630) || (number === 640) || (number === 650) || 
    (number === 660) || (number === 670) || (number === 680) || (number === 690) || (number === 720) || 
    (number === 730) || (number === 740) || (number === 750) || (number === 760) || (number === 770) || 
    (number === 780) || (number === 790) || (number === 820) || (number === 830) || (number === 840) || 
    (number === 850) || (number === 860) || (number === 870) || (number === 880) || (number === 890) ||
    (number === 920) || (number === 930) || (number === 940) || (number === 950) || (number === 960) ||
    (number === 970) || (number === 980) || (number === 990) ) {
        
        str = String(number);
        first = str[0];
        second = str[1]
        const res = arrHundreds[first - 1] + " " + arrDozens[second - 2];
        return res;
    }
    else if (number === 1000) {
        return arrThousand;
    }
    
}

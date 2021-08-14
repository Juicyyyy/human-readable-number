module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
      if (number < 20) {   
      const res = arr[number];
      return res;
    } 
     if (number > 20) {
         str = String(number);
         n=str[1];
         const res = arrDozens[0] + arr[n];
         return res;
     }
    
}

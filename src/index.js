module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

      if (number < 20) {   
      const word = arr[number];
      return word;
    }   
}

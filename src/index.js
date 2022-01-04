module.exports = function reverse (n) {
    if (n < 0) {
        let num = String(n).split('');
        num.shift();
        return num.reverse().join('');
      }
      let num = Number(String(n).split('').reverse().join(''));
      return num
}

module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.mean()}`);
};

class Sequence {
  constructor(input) {
    this.input = input;
    // Write your code here
  }

  minimum() {
    return Math.min.apply(Math,this.input);
    // Write your code here
  }

  maximum() {
    return Math.max.apply(Math,this.input);
    // Write your code here
  }

  count() {
    return (this.input).length;
    // Write your code here
  }

  mean() {
    var m = eval(this.input.join("+")) / (this.input).length;
    m = m.toFixed(2);
    return m;
    // Write your code here
  }

  // Write your code here
}

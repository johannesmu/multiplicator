var app ={
  multiplierform:document.getElementById("multiplier"),
  numberform:document.getElementById("number"),
  num:75,
  answer:document.getElementById("input-answer"),
  answerform:document.getElementById("answer-form"),
  answerbtn:document.getElementById("answer-button")
}
window.addEventListener("load",init);
function init(){
  let test = new Problem(app.numberform,app.multiplierform);
}

class Problem{
  constructor(input1,input2){
    this.input1 = input1;
    this.input2 = input2;
    this.multiplier = this.random(15);
    this.bindUI();
    this.number = app.num;

  }
  bindUI(){
    this.input2.value = this.multiplier;
    this.input1.value = this.number;
  }
  random(range){
    let res = 0;
    while(res==0 || res==1){
      res = this.generate(15);
    }
    return res;
  }
  generate(range){
    let num = Math.round(Math.random() * range);
    return num;
  }
}


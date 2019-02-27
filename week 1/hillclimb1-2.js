// 1. x^4 - 10x^3 + 20x^2 + 5x + 7

function f (x) { return -1 * (  Math.pow(x,4) - Math.pow(x,3)*10 + Math.pow(x,2)*20 + 5*x + 7 ) }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
    console.log('f(%s)=%s', x.toFixed(4),- f(x).toFixed(4))
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
  return f(x).toFixed(4)
}

for(var i=0; i<5; i++){                           //看憲億的→ 作亂數，取樣 
    Old = hillClimbing(f, Math.random()*20+1-10); //多跑幾個地方看會不會有其他結果
    if(i==0){
      Max = Old
    }
    console.log('Max =', Max);
    if(Old > Max){
      Max = Old
    }
  }

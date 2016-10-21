var numTimes = 0;
var n = parseInt(process.argv[2]);
console.log("Calculating the Fibonacci number for: f("+n+"): ");
var start = Date.now();
//var intervalID = setInterval(function(){
//	var time2 = Date.now() - start;
//	console.log(numTimes/time2/1000 + " ops/s - " + numTimes);
//  }, 2000);
console.log(fibonacci(n));
time = Date.now() - start;
console.log("DONE: " + time + " ms");

console.log("numTimes: " + numTimes);

function fibonacci(n){
  numTimes++;
  if (numTimes % 100000000 == 0){
 	var time2 = Date.now() - start;
	console.log(numTimes/time2/1000 + " ops/s - " + numTimes);    
  }
  if (n<2){
    //console.log("f("+n+"): " + n);
    return n;
  }
  var f = fibonacci(n-1)+fibonacci(n-2);
  //console.log("f("+n+"): " + f);
  return f;
}

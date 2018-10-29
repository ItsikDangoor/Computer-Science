log = console.log;

function factorial(n) {
  if(n === 1) {
     return 1;
  }
  return n * factorial(n - 1);
}

function factorialLoop(n) {
  var facResult = 1, i;
  for(i = 1; i <= n; i+=1) {
    facResult = facResult * i;
  }

  return facResult;
}



log(factorial(5));
log(factorial(3));
log(factorial(1));
log(factorial(10));

log("-------");
log(factorialLoop(5));
log(factorialLoop(3));
log(factorialLoop(1));
log(factorialLoop(10));

// unit tests
// do not modify the below code
/*describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});*/
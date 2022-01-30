// Recursion can be regarded as a function that calls itself
function countDown(num) {
    // base case
    if(num <= 0) {
        console.log('All done');
        return;
        // I've to write return to prevent an infinite loop since i'm not writing an else condition
    }
    console.log(num);
    num--;
    countDown(num)
}

countDown(5)

// Solve same without recursion
function countDn(num) {
  for(i = num; i > 0; i--) {
      console.log(i);
  }
  console.log("All Done");
}

countDn(4)
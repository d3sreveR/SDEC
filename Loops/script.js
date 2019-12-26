let sum = 0;
for (i=100; i<150; i++) {
    sum=sum+i**2;
}
console.log(sum)

//======================\\

function arr() {
    let array = [];
    for (i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        array.push(i + "\n");
      } else {
        array.push(i + " ");
      }
    }
    return array;
  }
  console.log(arr(20))

  //======================\\
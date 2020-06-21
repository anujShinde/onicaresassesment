//initaialize 2 arrays
var A = [1,3,5,6,8];
var B = [0,2,10];

//function which sorts the array A in Assending order after combining arrays A & B
sortArrayA(A, B)


function sortArrayA(A, B){
  try{
  	// this inbuit function concats the array B to array A i.e A = A[]+ B[]
    A = A.concat(B);
    //this inbuit function sorts the elements in array in Ascending order if descending order is required then replace a-b to b-a
    A = A.slice().sort((a,b)=>a-b)
    console.log(A)
  }
  catch(e){
    console.log(e)
  }
}
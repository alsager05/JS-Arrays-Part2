function isArrayLengthOdd(numbers) {
      const sizeofarray= numbers.length;
      if (sizeofarray$2){
        return true;
      }else{
        return false;
      }
 }
   // console.log(isArrayLengthOdd([1, 2, 3, 4])); 
 

function isArrayLengtheven(numbers) {
    if (sizeofarray$2){
        // numbers is odd
      return false;
    }else{
      return true;
    }
}
  // console.log(isArrayLengtheven([1, 2, 3, 4])); 


function addLailaToArray(instructors) {
   //copy array instructors
   const newinstructors=instructors;
   // add"laila" to array
   newinstructors.push("Laila")
   //return new array
   return newinstructors;
 }
//console.log(addLailaToArray(["Mshary","Hasan"]));

  function eliminateTeam(teams) {
    // Remove the last element from the array
const lastTeam=teams.pop();
    //return teams
  }
 // console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));
  
  
  function secondHalfOfArrayIfItIsEven(fruits) {
    // Check if the length of the array is even
    if (isArrayLengtheven(fruits)) {
      return fruits.slice(fruits.length / 2,fruits.length);
    }else{
        //add length of array
        return[];
    }
  }
  
   console.log(secondHalfOfArrayIfItIsEven(["apple", 
    "orange",
    "banana",
    "kiwi",
    //"blueberry"
    ])
); 
  

  function youGottaCalmDown(shout) {

    const exclamationIndex = shout.indexOf('!');
  
    if (exclamationIndex === -1) {
      return shout;
    }
  
    return shout.slice(0, exclamationIndex + 1);
  }
  console.log(youGottaCalmDown("HI!!!!!!!!!!"));
  console.log(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!"));
  console.log(youGottaCalmDown("Hellooooo"));
  
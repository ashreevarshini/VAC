const Arr=[94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
function sumofeven(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            sum+=arr[i];
        }
    }
    return sum;    
}
const evensum=sumofeven(Arr);
console.log("Sum of all even numbers:",evensum);
console.log("Maximum number:",Math.max(...Arr));
console.log("Minimum number:",Math.min(...Arr));
console.log("Index of value of 48:",Arr.indexOf(48));
function isascending(array){
    for (let i=1;i<array.length;i++){
        if (array[i]<array[i-1]){
            return false;
        }
    }
    return true;
}
console.log("Is array in ascending order:",isascending(Arr));
const dup=Arr.filter((value,index,self)=>self.indexOf(value)===index);
console.log("Array after removing duplicates:",dup);


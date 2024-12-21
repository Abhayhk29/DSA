// Fuction to calculate the number possible of triangles in the array
// Triangle can be formed with three different array elements as three sides of triangle
// The sume of any of the two value must be greate than the thied value

function calculateTriangle(arr){
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1 ; j < arr.length; j++) {
            
            for (let k = j + 1; k < arr.length; k++) {
                
                if(arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j]
                    && arr[j] + arr[k] > arr[i]){
                        count++;
                    }
            }
            
        }
        
    }
    return count;
}

console.log(calculateTriangle([10, 21, 22, 100, 101, 200, 300]));
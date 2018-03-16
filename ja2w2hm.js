//This is step 1
let numbers = [1, 2, 3, 4];
//let newNumbers = [];

//for(let i = 0; i < numbers.length; i++) {
    //if(numbers[i] % 2 !== 0) {
       // newNumbers.push(numbers[i] * 2);
    //}
//}

//console.log("The doubled numbers are", newNumbers); // [2, 6]
console.log((numbers.filter(num => num % 2 !== 0)).map(res => res *2));
             //"=>" is. This function takes a string and for the index number of each element it adds that many elements to the output. Here's an example:
             //accum("abcd") --> "A-Bb-Ccc-Dddd"
             //accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
             //accum("cwAt") --> "C-Ww-Aaa-Tttt" (info taken from StackOverflow);
             //"!==" this represents unequality.
            
//Step 2 of homework
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

//let tasks = monday.concat(tuesday);

//Write a program that does the following below. Use map and filter. You will also need a forEach or a for loop for the 'summing up' part.
//Collect two days' worth of tasks.
let tasks = monday.concat(tuesday);
    console.log(tasks);
    let taskOfTwoDays = tasks.map((task) => task.name);
    console.log(taskOfTwoDays);
//Convert the task durations to hours, instead of minutes.
let taskChangeToHours = tasks.map((durations) => durations.duration = durations.duration/60  );
    console.log(taskChangeToHours);
//Filter out everything that took two hours or more (remove from the collection)
let lessThanTwoHours = tasks.filter((minusTwoHours) => minusTwoHours.duration < 2 );
    console.log(lessThanTwoHours);
//Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
let maartjeSalary = tasks.map((perTask) => perTask.duration*20);
console.log(maartjeSalary);
let amount = 1000
maartjeSalary.forEach( i => {
    amount += i ; 
});
//Output a formatted Euro amount.
console.log("€" + amount);
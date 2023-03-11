// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/// PROBLEM 1:
// A company is building a smart home thermometer. we have been tasked with finding the temperature amplitude of an array of temperatures. there are sometimes sensor errors

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// understanding the problem:
// - what is temp amplitude? - difference between highest and lowest temp
// - how to compute the max and min temps?
// - what does a sensor error look like and how to deal with it

// Breaking up into sub-problems
// How to ignore errors
// find max value in temp array
// find the minimum value
// subtract min from max then return

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// calcTempAmplitude([3, 7, 4]);
// max = 3
// is 3 > 3? no.
// is 7 > 3? yes!
// max = 7
//is 4 > 7? no.
// return max

// const amplitude = calcTempAmplitude(temperatures);

// console.log('amplitude of ' + amplitude);

// PROBLEM 2:
// fucntion should now recieve two arays of temps

// understanding the problem:
// - do we need to impliment same functionality twice?
// no, merge the arrays

// Breaking up into sub-problems
// -- merge two arrays

// function calcTempAmplitudeNew(temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     //C) FIX

//     value: Number(prompt('Degrees celsius:')),
//   };

//   // B) FIND
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) Identify
// console.log(measureKelvin());

// Using a debugger
/*
function calcTempAmplitudeBug(temps1, temps2) {
  const temps = temps1.concat(temps2);

  // FIND
  //   let max = 0;
  //   let min = 0;

  // FIX
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//IDENTIFY
console.log(amplitudeBug);
*/

////////////////////////////////////////////////////
// CODING CHALLENGE #1

/*
Given an array of forecasted max temps, the thermometer displays a string with these temps.

Example; [17, 21, 23] will print 17°C in 1 day, 21°C in 2 days...

Create a function that takes an array and logs a string as shown above

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]
*/
/*
function thermometer(temps) {
  let response = '';
  let i = 1;
  for (let temp of temps) {
    response = response.concat(
      `${temp}°C in ${i > 1 ? i + 'days, ' : i + 'day, '}`
    );
    i++;
  }
  return response;
}

console.log(thermometer([12, 5, -5, 0, 4]));
*/

function swap(inpt, key) {
  let output;
  if (!key) {
    let myType = typeof inpt;
    switch (myType) {
      case 'string':
        output = swap(inpt, 1);
        break;
      case 'number':
        output = swap(inpt, 2);
        break;
      case 'object':
        output = swap(inpt, 3);
        break;

      default:
        return 'This is not an array, string, or number :(';
    }
    return output;
  } else {
    switch (key) {
      case 1:
        let myStr = '';
        for (let i = inpt.length - 1; i >= 0; i--) {
          myStr = `${myStr}${inpt[i]}`;
        }
        return myStr;
        break;

      case 2:
        return numCase(inpt);
        break;

      case 3:
        let newArr = [];
        for (let i = inpt.length - 1; i >= 0; i--) {
          newArr.push(inpt[i]);
        }
        return newArr;
        break;
    }
  }
}

function numCase(num) {
  num = num.toString();
  let newNum = '';
  for (let i = num.length - 1; i >= 0; i--) {
    newNum = newNum + num[i];
  }
  return Number(newNum);
}

console.log(swap(true));

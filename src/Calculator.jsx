import { useState } from "react";
import { TempFar, TempCell } from "./TempCell";

// function Calculator() {
//   const [temp, setTemp] = useState(0);

//   return (
//     <div>
//       <TempCell temp={temp} setTemp={setTemp} />
//       <TempFar temp={temp} setTemp={setTemp} />
//     </div>
//   );
// }

// Что не так с этим кодом? Исправьте его.

// function getSum(arr) {
//   let res = 0;

//   for (let elem of arr) {
//     res += +elem;
//   }

//   return res;
// }

// function Calculator() {
//   const [nums, setNums] = useState([1, 2, 3, ""]);

//   function handleChange(event) {
//     const newArr = [...nums];
//     newArr[newArr.length - 1] = event.target.value;
//     setNums(newArr);
//   }

//   function handleBlur(event) {
//     const newArr = [...nums];
//     newArr[newArr.length - 1] = event.target.value;
//     setNums([...newArr, ""]);
//   }

//   return (
//     <div>
//       <p>{getSum(nums)}</p>
//       <input
//         value={nums[nums.length - 1]}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//     </div>
//   );
// }

// export { Calculator };

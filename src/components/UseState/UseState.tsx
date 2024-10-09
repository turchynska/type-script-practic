// import React, {useState} from "react";//1

// type Status = 'loading' | 'idle' | 'error';

// export function LoadingComponent() {
//   const [status, setStatus] = useState<Status>('idle');

//   const loadData = async() => {
//     setStatus('loading');
//     try{
//       setStatus('idle')
//     }catch(error){
//       setStatus('error')
//       return error
//     }
//   }
//   return(
//     <div>
//       <p>Status: {status}</p>
//       <button onClick={loadData}>Load Data</button>
//     </div>
//   )
// }

// import React, { useState } from 'react';////2

// type Props = {
//   initialValue: string;
//   onSave: (value: string) => void;
// };

// export function TextInput({ initialValue, onSave }: Props) {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   const handleSave = () => {
//     onSave(value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

// import React, {useState} from "react";///////////3
// export function Counter() {
//     const [count, setCount] = useState<number>(0)
//     const increment = () => {
//      setCount(prevCount => prevCount + 1)
//     }
//      return (
//        <div>

//          <p>Count : {count}</p>
//          <button onClick={increment}>Increment</button>
//        </div>
//      )
// }

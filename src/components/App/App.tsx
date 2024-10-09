import "./App.css";






export default App;

///////////////////OnClick
// import React, { MouseEvent } from "react";

// function App() {
//   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//     // Зупиняємо спливання події до батьківського компонента
//     event.stopPropagation();
//     console.log("Клікнуто дитячий компонент");
//   };
//   return <button onClick={handleClick}>Push me</button>;
// }
// function ParentComponent() {
//   const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
//     console.log("Клікнуто батьківський компонент");
//   };

//   return (
//     <div onClick={handleParentClick}>
//       <ChildComponent />
//     </div>
//   );
// }

// export default ParentComponent;

/////////////onSubmit
// import React, { FormEvent } from "react";

// function App() {
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Форма була відправлена");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Відправити</button>
//     </form>
//   );
// }

//import {TextInputWithFocus} from '../UseRef/UseRef'//1
{
  /*<TextInputWithFocus>/*/
}
// import {ComponentWithRef} from '../UseRef/UseRef'//2
{
  /* <ComponentWithRef/> */
}

// import { User } from './User'//1
{
  /* <h1>Welcome to the App</h1>
     <User name="John" age={30}/> */
}

// import {TextInput} from '../UseState/UseState.tsx'//1
{
  /* <TextInput/> */
}

// import {LoadingComponent} from '../UseState/UseState.tsx'//2
{
  /* <LoadingComponent/> */
}
//import {Counter} from '../UseState/UseState.tsx'////3
{
  /*<Counter/>*/
}


import './App.css';


function App() {
  const name = "Naresh Saini";          // use variable in jsx
  let x = 10;                           // use expression and operation in jsx
  let y = 20;
  const userName = "";           // use conditional rendering in jsx 

  function fruit() {             // use function inside jsx
    return "Apple";
  }

  function operation(a, b, op) {   // use operation in jsx
    if (op == "+") {
      return a + b;
    } else if ( op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  const userObj = {                 // use object in jsx
    name: "naresh",
    email: "naresh@test.com",
    age: 32,
  }

  const userArray = ["anil", "bhanu", "chintu"];    // use array in jsx

  const clintName = "peter";
  let path = "C:\Users\OK\Desktop\enam\Development\React-2025\my-projecttwo\public\download.png";



  return (
    <div>
      <h1>{name}</h1>  
      <h1>{ x + y }</h1>
      <h1>{ userName ? userName : "user not found"}</h1>
      <h1>{ fruit()}</h1>
      <h1>{operation(20,10, "+")}</h1>
      <h1>{operation(20,10, "-")}</h1>
      <h1>{operation(20,10, "")}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[0]}</h1>
      <img src={path} />
    </div>
  );
}

export default App;

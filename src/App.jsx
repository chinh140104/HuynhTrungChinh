import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(10);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>hello word12233331223333</h1>
      <h1>Numbse: {number}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default App;

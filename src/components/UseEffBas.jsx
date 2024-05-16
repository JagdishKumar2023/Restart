import React, { useEffect, useState } from "react";

const UseEffBas = () => {
  const [count, setState] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times by useEffect`;
  }, [count]);

  console.log(count);

  return (
    <div>
      <h1>UseEffBas</h1>
      <p>Clicked {count}</p>
      <button onClick={() => setState(count + 1)}>Clicked Me</button>
    </div>
  );
};

export default UseEffBas;

import "./App.css";
import SingleColor from "./components/SingleColor";
import Values from "values.js";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false)
      let colors = new Values(color).all(5);
      // Values kutuphanesini incele(all icine yazdigimiz 10 tonu kacar artiracagini belirliyor)
      setList(colors)
    
    } catch (error) {
      setError(true);
      // hata oldugunda error state ini degistiriyoruz cunku class yazicaz
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error?'error':''}`}
          />
          <button type="submit">GENERATE</button>
        </form>
      </section>
      <section className="colors">
       {list.map((color,index)=>{
        
        return <SingleColor key={index} {...color} index={index}/>
       })}
      </section>
    </>
  );
}

export default App;

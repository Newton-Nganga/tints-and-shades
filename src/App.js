import { useState } from "react";
import { FiCopy, FiGithub } from "react-icons/fi";
import useGenerateTintsAndShades from "./Utils/useGenerateTintsAndShades";
function App() {
  const [colorValue, setColorValue] = useState("#4db64d");
  const [copy, setCopy] = useState({index:'',state:false});
  function handleChange(e) {
    e.preventDefault();
    setColorValue(e.target.value);
  }
  function handleCopy(col,index) {
    setCopy({index:index,state:true});
    navigator.clipboard.writeText(col);
    setTimeout(() =>  setCopy({index:'',state:false}), 2000);
  }
  const { tintss, shadess } = useGenerateTintsAndShades(colorValue, 15);
  return (
    <section>
      <h1 className="header">Tints & Shades</h1>
      <div className="color-picker">
        <input
          type="text"
          className="color-text "
          onChange={handleChange}
          value={colorValue}
        />
        <div className="cl" style={{ backgroundColor: colorValue }}>
          <input
            type="color"
            name="color-input"
            className="color-input"
            onChange={handleChange}
            onInput={handleChange}
          />
        </div>
      </div>
      <div className="picked" style={{ backgroundColor: colorValue }}>
        {colorValue}
      </div>

      {/* //map over the tints and shades */}

      <div className="wr">
        Shades - (Darken)
        <div className="display shades" style={{ borderColor: colorValue }}>
          {shadess?.map((col, index) => {
            return (
              <button
                className="hue-color"
                key={"S" + index}
                style={{ backgroundColor: col }}
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(col,'S'+index);
                }}
              >
                {(copy.state ===true)  && (copy.index === 'S'+index) ? (
                  <div className="copied">
                    <FiCopy />
                    <p>copied</p>{" "}
                  </div>
                ) : (
                  <div className="copied">
                    <FiCopy />
                    <p>{col}</p>{" "}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="wr">
        Tints - (Lighten)
        <div className="display shades" style={{ borderColor: colorValue }}>
          {tintss?.map((col, index) => {
            return (
              <button
                className="hue-color"
                key={"T" + index}
                style={{ backgroundColor: col }}
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(col,'T'+index);
                }}
              >
                {(copy.state === true)  && (copy.index === 'T'+index) ? (
                  <div className="copied">
                    <FiCopy />
                    <p>copied</p>{" "}
                  </div>
                ) : (
                  <div className="copied">
                    <FiCopy />
                    <p>{col}</p>{" "}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="git-repo"><FiGithub/>Github</div>
      <div className="brandy"><span>🫣</span> by Newton</div>
    </section>
  );
}

export default App;

import { FiCopy } from "react-icons/fi";
export default function TintsDisplay({tintss,handleCopy,colorValue,copy}) {
  return (

        <div className="display-el" style={{ borderColor: colorValue }}>
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
    
  )
}

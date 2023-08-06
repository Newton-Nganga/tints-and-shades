import React from 'react'
import { FiCopy } from "react-icons/fi";
export default function ShadesDisplay({colorValue,shadess,handleCopy,copy}) {
  return (
    <div className="display-el">
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

  )
}

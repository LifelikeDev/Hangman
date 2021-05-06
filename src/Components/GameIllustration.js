import React from "react";
import { useGlobalContext } from "../context";

const GameIllustration = () => {
  const { wrongLetters } = useGlobalContext();

  const errors = wrongLetters.length;
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 960 560"
        className="game-illustration"
      >
        <polygon
          id="Pole"
          className="st0"
          points="266,25.2 266,532 178,532 178,544 379,544 379,533 291,533 291,29 782,29 782,17 266,17 "
        />
        {errors > 0 && (
          <g id="Rope">
            <rect
              id="XMLID_20_"
              x="705"
              y="29"
              className="st0"
              width="6"
              height="125"
            />
            <path
              id="XMLID_4_"
              className="st0"
              d="M705,39.2c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_9_"
              className="st0"
              d="M705,51.8c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_12_"
              className="st0"
              d="M705,86.8c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_13_"
              className="st0"
              d="M705,75.6c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_14_"
              className="st0"
              d="M705,63c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_18_"
              className="st0"
              d="M705,96.6c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_17_"
              className="st0"
              d="M705,109.2c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_16_"
              className="st0"
              d="M705,144.2c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_15_"
              className="st0"
              d="M705,133c1.7,1.6,3.8,2.9,6,3.8"
            />
            <path
              id="XMLID_19_"
              className="st0"
              d="M705,120.4c1.7,1.6,3.8,2.9,6,3.8"
            />
          </g>
        )}
        {errors > 1 && (
          <g id="Head">
            <circle
              id="XMLID_2_"
              className="st1"
              cx="708.9"
              cy="189.2"
              r="35"
            />
            <path
              id="XMLID_5_"
              className="st2"
              d="M697,210.2c0.6-1.6,1.3-3.2,1.9-4.8c7.9-2.7,18.4-4.7,23.2,2.1"
            />
            <line
              id="XMLID_3_"
              className="st2"
              x1="686"
              y1="188.5"
              x2="698"
              y2="188.5"
            />
            <line
              id="XMLID_6_"
              className="st2"
              x1="715"
              y1="188.5"
              x2="728"
              y2="188.5"
            />
          </g>
        )}
        {errors > 2 && (
          <line
            id="Body"
            className="st1"
            x1="708.5"
            y1="222"
            x2="708.5"
            y2="371"
          />
        )}
        {errors > 3 && (
          <g id="Arms">
            <line
              id="XMLID_8_"
              className="st1"
              x1="708.2"
              y1="257.6"
              x2="666.9"
              y2="298.9"
            />
            <line
              id="XMLID_7_"
              className="st1"
              x1="707.5"
              y1="257.6"
              x2="748.8"
              y2="298.9"
            />
          </g>
        )}
        {errors > 4 && (
          <g id="Legs">
            <line
              id="XMLID_11_"
              className="st1"
              x1="708.6"
              y1="367"
              x2="667.3"
              y2="408.3"
            />
            <line
              id="XMLID_10_"
              className="st1"
              x1="707.9"
              y1="367"
              x2="749.2"
              y2="408.3"
            />
          </g>
        )}
      </svg>
    </>
  );
};

export default GameIllustration;

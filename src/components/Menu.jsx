import React from "react";

const Menu = ({ nodes, setselectedNodeType, selectedNodeType }) => (
  <div className="menu">
    <ul>
      {Object.entries(nodes).map(([parent, nodes]) => {
        return (
          <li key={parent}>
            {parent}
            <ul>
              {Object.entries(nodes).map(([name, value]) => (
                <li
                  key={name}
                  className={
                    name === selectedNodeType?.name ? "selected" : "can-select"
                  }
                  onClick={() => setselectedNodeType(value)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Menu;

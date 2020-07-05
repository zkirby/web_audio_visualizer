import React from "react";

const Menu = ({ nodes, setselectedNodeRootType, selectedNodeRootType }) => (
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
                    name === selectedNodeRootType?.name
                      ? "selected"
                      : "can-select"
                  }
                  onClick={() => setselectedNodeRootType(value)}
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

import React from "react";

const Menu = ({ nodes, setSelectedNode, selectedNode }) => (
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
                    name === selectedNode?.name ? "selected" : "can-select"
                  }
                  onClick={() => setSelectedNode(value)}
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

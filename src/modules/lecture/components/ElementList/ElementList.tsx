import React, { Component } from "react";

const elements = [
  {
    elementType: "resistor",
    view: "Resistor"
  },
  {
    elementType: "capacitor",
    view: "Capacitor"
  },
  {
    elementType: "inductance",
    view: "Inductance"
  },
  {
    elementType: "transistor",
    view: "Transistor"
  }
];

interface Props {
  width: number;
}

export class ElementList extends Component<Props> {
  handleDragStart = (event: any, elementType: string) => {
    event.dataTransfer.setData("text", elementType);
  };

  render() {
    return (
      <div className="element-list" style={{ minWidth: this.props.width }}>
        <ul>
          {elements.map(({ elementType, view }, index) => {
            return (
              <li key={index}>
                <p
                  draggable
                  onDragStart={event =>
                    this.handleDragStart(event, elementType)
                  }
                >
                  {view}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

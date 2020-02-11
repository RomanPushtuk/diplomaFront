import React, { Component } from "react";
import { ThemeItem } from "../ThemeItem";
import { ITheme } from "../../../../common/interfaces";

interface Props {
  themes: Array<ITheme>;
  onSelect: (idTheme: number) => void;
}

export class ThemeList extends Component<Props> {
  render() {
    return (
      <div className="p-4">
        {this.props.themes.map((theme: ITheme, index: number) => {
          return (
            <ThemeItem
              key={index}
              theme={theme}
              onSelect={this.props.onSelect}
            />
          );
        })}
      </div>
    );
  }
}

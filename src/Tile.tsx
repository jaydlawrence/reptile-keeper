import React = require('react');
import ReactDOM = require('react-dom');

interface TileProps {
  name: string;
}

interface TileState {
  checked: boolean;
}

class Tile extends React.Component<TileProps, TileState> {
  state = {
    checked: true
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>I am a tile called {this.props.name}</div>
    );
  }
}

export default Tile;

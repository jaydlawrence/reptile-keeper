import React = require('react');
import ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBaseTheme } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import EntityTabs from './EntityTabs';

const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

interface AppProps {

}

interface AppState {
  open: boolean;
}

class App extends React.Component<AppProps, AppState> {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  state = {
    open: false,
  };

  constructor() {
    super();

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightBaseTheme)
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}/>,
    ];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <EntityTabs></EntityTabs>

          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
            The actions in this window were passed in as an array of React objects.
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

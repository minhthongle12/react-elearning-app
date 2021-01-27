import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>

          {this.props.isLogin ? (
            <Button color="inherit">Hello, homie.</Button>
          ) : (
            <>
              <Link to="/signin">
                <Button color="inherit">Login</Button>
              </Link>

              <Button color="inherit">Signup</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: !!state.credentials.token,
  };
};

export default connect(mapStateToProps)(Header);

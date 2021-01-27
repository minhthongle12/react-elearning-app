import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { signIn } from "../../redux/actions/auth";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state.credentials, this.props.history));
  };

  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2">
            Sign In
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <Box my={3.1}>
              <TextField
                name="taiKhoan"
                onChange={this.handleChange}
                variant="outlined"
                label="Username"
                fullWidth
              />
            </Box>

            <Box my={3.1}>
              <TextField
                name="matKhau"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                fullWidth
                type="password"
              />
            </Box>

            <Box textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </div>
    );
  }
}

export default connect()(Signin);

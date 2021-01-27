import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CourseItem from "../../components/CourseItem";
import Header from "../../components/Header";
import { style } from "./style";
import { connect } from "react-redux";
import { fetchCourses } from "../../redux/actions/course";

class Home extends Component {
  renderCourses = () => {
    return this.props.courseList.map((item, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={3}>
          <CourseItem item={item} />
        </Grid>
      );
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Typography
          className={this.props.classes.title}
          component="h1"
          variant="h1"
        >
          Danh sách khóa học
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.renderCourses()}
          </Grid>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses);
  }

  // componentWillUnmount(){}
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(withStyles(style)(Home));

import React, { Component } from "react";

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>Course Detail: </h1>
      </div>
    );
  }

  componentDidMount() {
    const courseId = this.props.match.params.courseId;
    console.log(courseId);

    //call api gửi courseId và backend trả về data chi tiết khóa học
  }
}

export default Detail;

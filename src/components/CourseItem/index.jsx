import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./style";

class CourseItem extends Component {
  goToDetail = () => {
    this.props.history.push("/detail/" + this.props.item.maKhoaHoc);
  };

  render() {
    const { hinhAnh, tenKhoaHoc, moTa } = this.props.item;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.img}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {moTa.substr(0, 10) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={this.goToDetail}
            className={this.props.classes.btn}
            variant="contained"
          >
            View Detail
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(CourseItem));

import { createAction } from ".";
import { request } from "../../configs/request";
import { SET_COURSES } from "./type";
//async action
export const fetchCourses = (dispatch) => {
  request(
    "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    "GET"
  )
    .then((res) => {
      console.log(res);
      //dispatch action
      dispatch(createAction(SET_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

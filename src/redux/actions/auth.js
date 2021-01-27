import axios from "axios";
import { request } from "../../configs/request";
import { createAction } from "./index";
import { SET_TOKEN } from "./type";

export const signIn = (data, history) => {
  return (dispatch) => {
    request(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      "POST",
      data
    )
      .then((res) => {
        console.log(res);

        localStorage.setItem("t", res.data.accessToken);

        dispatch(createAction(SET_TOKEN, res.data.accessToken));
        history.replace("/");
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

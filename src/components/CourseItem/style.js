const styles = (theme) => {
  return {
    img: {
      height: 150,
    },

    btn: {
      backgroundColor: theme.palette.background.grey.dark,

      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
      "& span": {},

      [theme.breakpoints.down("sm")]: {
        color: theme.palette.text.primary,
      },

      [theme.breakpoints.up("sm")]: {
        color: theme.palette.text.yellow,
      },
    },
  };
};
export default styles;

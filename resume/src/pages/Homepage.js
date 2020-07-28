import React from "react";
import { Jumbotron } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Icon } from "@iconify/react";
import stackOverflow from "@iconify/icons-mdi/stack-overflow";

import myImg from "../assets/SUHAS.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    paddingBottom: "7rem",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <div id="homepage" className={classes.root}>
      <Avatar alt="Suhas P" src={myImg} className={classes.large} />
      <Jumbotron className="mb-0 bg-transparent pt-0 pb-0 text-center">
        <h1>Suhas P</h1>
        <h3>Software developer</h3>
      </Jumbotron>
      <div>
        <LinkedInIcon color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            return (window.location.href =
              "https://www.linkedin.com/in/suhaspartha");
          }}
        />
        <GitHubIcon 
          onClick={() => {
            return (window.location.href = "https://github.com/suhaspartha");
          }}
          style={{ marginLeft: "2rem", cursor: "pointer", color:'white !important' }}
        />
        <Icon color="orange"
          onClick={() => {
            return (window.location.href =
              "https://stackoverflow.com/users/9913682/geeky-stark");
          }}
          style={{ fontSize: "25px", marginLeft: "2rem", cursor: "pointer" }}
          icon={stackOverflow}
        />
      </div>
    </div>
  );
}

export default Homepage;

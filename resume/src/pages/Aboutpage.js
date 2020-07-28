import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { aboutMe, experience, skills } from "../staticdata/Constants";
import Experience from "../components/Experience";
import { Chip, Avatar } from "@material-ui/core";

import cooking from "../assets/cooking.gif";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `0px solid ${theme.palette.divider}`,
    paddingTop: "18%",
  },
  tabcontent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    textAlign: "justify",
  },
  chip:{
    margin: theme.spacing(0.5),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function Aboutpage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root} id="aboutpage">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="ABOUT ME" {...a11yProps(0)} />
        <Tab label="EXPERIENCE" {...a11yProps(1)} />
        <Tab label="SKILLS" {...a11yProps(2)} />
        <Tab label="PROJECTS" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabcontent}>
        <Typography>{aboutMe}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabcontent}>
      <Experience exp={experience} />
        {/* {Object.values(experience)
          .reverse()
          .map((e) => (
            <Experience exp={e} />
          ))} */}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabcontent}>
        {skills.map(s=><Chip className={classes.chip} label={s} variant="outlined"/>)}
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabcontent}>
      <Avatar alt="Suhas P" src={cooking} className={classes.large} />  
      </TabPanel>
    </div>
  );
}

export default Aboutpage;
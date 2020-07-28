// import React from "react";
// import { Card, CardContent } from "@material-ui/core";

// function Experience({ exp }) {
//   const company = exp.company;
//   const duration = exp.duration;
//   const designation = exp.designation;
//   const work = exp.work;
//   return (
//     <div style={{display:"flex"}}>
//       <Card style={{ marginTop: "1rem" }}>
//         <CardContent>
//           <div>
//             <span>
//               <h5>{company}</h5>
//             </span>
//           </div>
//           <h6>{duration}</h6>
//           <h6>{designation}</h6>
//           <p>{work}</p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    paddingRight: "1rem",
  },
  tirtiaryHeading: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
    paddingRight: "1rem",
  },
}));

export default function Experience({ exp }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id={`${exp.panel}bh-header`}
        >
          <Typography className={classes.heading}>
            {exp.exp2.company}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {exp.exp2.designation}
          </Typography>
          <Typography
            className={classes.tirtiaryHeading}
          >{`[${exp.exp2.duration}]`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{exp.exp2.work}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={"panel1bh-header"}
        >
          <Typography className={classes.heading}>
            {exp.exp1.company}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {exp.exp1.designation}
          </Typography>
          <Typography
            className={classes.tirtiaryHeading}
          >{`[${exp.exp1.duration}]`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{exp.exp1.work}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

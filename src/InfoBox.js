import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoBox({ title, isRed, isGrey, active, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isGrey && "infoBox--grey"} bg-dark text-light`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title text-light">
          {title}
        </Typography>

        {/* Number of Cases */}
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isGrey && "infoBox__cases--grey"
          }`}
        >
          {props.isloading ? <i className="fa fa-cog fa-spin fa-fw" /> : cases}
        </h2>

        {/* Total Cases */}
        <Typography className="infoBox__total text-info">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

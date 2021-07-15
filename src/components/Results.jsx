import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const Results = ({ content }) => (
  <Card data-testid="results">
    <CardContent>
      <Typography variant="h5">Results</Typography>
      {/** @TODO: Add your implementation here */}
      {content}
    </CardContent>
  </Card>
);

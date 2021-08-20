import { CardActions, ListItemIcon } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";

//https://www.robinwieruch.de/react-add-item-to-list



export const Results = ({ content }) => {

  const [data, setData] = useState([])


  useEffect(() => {
    if (content !== "") {
      setData((data) => [...data, content])
    }
  }, [content]);//on new input add it to an array

  return (
    <Card data-testid="results">
      <CardContent>
        <Typography variant="h5">Results</Typography>
        {/** @TODO: Add your implementation here */}

        <List >

          {data.length? <React.Fragment>
            <ListItem >
              <ListItemIcon >
                <SubdirectoryArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={content} />
            </ListItem>
            <Divider variant="fullWidth" />
          </React.Fragment> :null}



          {data.map((data, index/*, results: all the history*/) =>
            <React.Fragment>


              <ListItem key={index}>

                <ListItemIcon key={index}>
                  <Typography variant="subtitle1">{index + 1}</Typography>
                </ListItemIcon>

                <ListItemText primary={data} />

              </ListItem>

              <Divider variant="fullWidth" />
            </React.Fragment>
          )
          }
        </List>


      </CardContent>
      <CardActions>
        <Button
          variant="outlined" color="secondary"
          onClick={() =>setData([])}

        >
          Erase Results
        </Button>

      </CardActions>
    </Card>
  );
}

Results.propTypes =
{
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
}
/*use : ...content, to get all the characters */



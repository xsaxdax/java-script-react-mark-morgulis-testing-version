import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { CardActions, ListItemIcon } from "@material-ui/core";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Typography from "@material-ui/core/Typography";

import React, { useState, useEffect, useRef } from 'react';


const History = (props) => {

    const [data, setData] = useState([])
    const test = useRef(null)

    useEffect(() => {
        setData((data) => [...data, props.content])
    }, [props.content]);




    return (


        <List ref={test}>
            {console.log(test)}
            <React.Fragment>

                <ListItem >
                    <ListItemIcon >
                        <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={props.content} />
                </ListItem>
                <Divider variant="fullWidth" />

                {data.map((data, index/*, results: all the history*/) =>
                    <React.Fragment>



                        <ListItem key={index + 1}>

                            <ListItemIcon key={index + 1}>
                                <Typography variant="subtitle1">{index + 1}</Typography>
                            </ListItemIcon>

                            <ListItemText primary={data} />

                        </ListItem>
                       
                        <Divider variant="fullWidth" />
                    </React.Fragment>
                )
                }


            </React.Fragment>
        </List>

    )
}
export default History;

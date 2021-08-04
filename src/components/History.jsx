import { ListItemIcon } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import React, { useEffect, useRef, useState } from 'react';



const History = (props) => {

    const [data, setData] = useState([])
    const test = useRef(null)//trying to make on erase delte List 

    useEffect(() => {
        setData((data) => [...data, props.content])
    }, [props.content]);//on new input add it to an array




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

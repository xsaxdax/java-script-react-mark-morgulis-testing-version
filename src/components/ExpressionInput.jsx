import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";




export const ExpressionInput = ({ handleSubmit }) => {


  const [input, setInput] = useState('')
  const valueRef = useRef('') //creating a refernce for TextField Component
  const submitButton = useRef(null) //creating a refernce to button
  useEffect(() => {
    valueRef.current.focus()
  }, [])

  const keyPress = (e) => {
    if (e.keyCode === 13) {//on enter do the same as on click
      handleSubmit(input)
      //submitButton.current and then? so I wont have to write code twice to get strange bugs
    }
  }
  //test for right character input
  //helper text shoudn' t display on start 
  //wrong input belongs in the helper text not in the history

  return (

    <Card>
      <CardContent>
        <TextField fullWidth={true} label="Expression" variant="outlined" onChange={e => setInput(e.target.value)}
          inputRef={valueRef} helperText={input ? '' : "No Input! Try again please"}
          onKeyDown={keyPress}

        />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(
            /** @TODO: Add your implementation here */

            input


          )}
          ref={submitButton}

        >
          Submit
        </Button>

      </CardActions>
    </Card>
  );
};
/* ExpressionInput.propTypes=
 {handleSubmit: PropTypes.arrayOf(PropTypes.string)} */
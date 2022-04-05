import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ActionType } from "../../reducer/formReducer";
import { ReduxStore } from "../../reducer/rootReducer";
import { UserInfoActions } from "../../reducer/userInfoReducer";
import { useTypedSelector } from "../../useTypedSelector";
import useStyles from "./styles";

interface userData {
  name: string;
  age: number;
  gender: string;
  pregnancy: string;
}

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const form = useTypedSelector((state) => state.form);
  const { name } = useSelector((state: ReduxStore) => state.userInfo);
  console.log("name", name);
  const [gender, setGender] = useState("");
  const [pregnancy, setPregnancy] = useState("");
  const [userData, setUserData] = useState<userData>({
    name: "",
    age: 0,
    gender,
    pregnancy,
  });

  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const handlePregnancy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPregnancy((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch({ type: ActionType.HANDLESUBMIT, payload: userData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={(classes.nameField, classes.mb)}
        label='Enter your name'
        variant='outlined'
        fullWidth
        required
        type='string'
        name='name'
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: UserInfoActions.Set,
            payload: { name: event.target.value },
          });
        }}
      />
      <TextField
        className={classes.mb}
        label='Enter your age'
        variant='outlined'
        fullWidth
        required
        type='number'
        name='age'
        value={userData.age}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUserData({ ...userData, age: Number(event.target.value) });
        }}
      />
      <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        aria-required
        value={gender}
        onChange={handleGender}
        className={classes.mb}
      >
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
      </RadioGroup>
      {gender === "female" && (
        <>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Are you pregnant?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            aria-required
            value={pregnancy}
            onChange={handlePregnancy}
          >
            <FormControlLabel value='yes' control={<Radio />} label='YES' />
            <FormControlLabel value='no' control={<Radio />} label='NO' />
          </RadioGroup>
        </>
      )}
    </form>
  );
}

export default Form;

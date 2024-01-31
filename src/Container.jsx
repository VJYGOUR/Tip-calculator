import { Grid } from "@mui/material";
import { useState } from "react";

import SubContainer_frst from "./SubContainer_frst";
import SubContainer_scnd from "./SubContainer_scnd";
import logo from "./images/logo.svg";
export default function Container() {
  const [Custom, setCustom] = useState("");
  const [Bill, setBill] = useState("");
  const [People, setPeople] = useState("");
  const [Tip, setTip] = useState("0.00");
  const [Total, setTotal] = useState("0.00");
  const [error, setError] = useState(false);
  const [scnderror, setScndError] = useState(false);

  function changeHandler(e) {
    setBill(e.target.value);
  }
  function changeHandler_2(e) {
    setPeople(e.target.value);
  }
  const x = Number(Bill);
  const y = Number(People);

  const ButtonHandler = function (e, val) {
    e.preventDefault();
    if (Bill === "" && People === "") {
      setError(true);
      setScndError(true);
      return;
    }
    if (Bill === "") {
      setError(true);
      setScndError(false);
      return;
    }
    if (People === "") {
      setScndError(true);
      setError(false);
      return;
    }
    const tip = val * x;

    const z = x + tip;
    let roundOffTip = (tip / y).toFixed(2);
    let roundOffTotal = (z / y).toFixed(2);

    setTip(roundOffTip); //tip/person
    setTotal(roundOffTotal); //total/person
  };
  function customHandler(e) {
    const updatedValue = e.target.value;
    setCustom(updatedValue);
    ButtonHandler(e, updatedValue / 100);
  }
  function resetHandler() {
    setBill("");
    setPeople("");
    setCustom("");
    setTip("0.00");
    setTotal("0.00");
    setError(false);
    setScndError(false);
  }

  return (
    <>
      <img
        className="py-20 md:py-8"
        src={logo}
        alt="logo"
        style={{
          display: "block",
        }}
      />
      <Grid
        container
        sx={{
          bgcolor: "white",
          borderRadius: "1rem",
        }}
        md={7.5}
        padding={4}
        paddingLeft={{ xs: 4, md: 1 }}
        columnSpacing={{ md: 4 }}
        rowSpacing={{ xs: 5, md: 0 }}
      >
        <Grid item xs={12} md={6}>
          <SubContainer_frst
            Bill={Bill}
            changeHandler={changeHandler}
            changeHandler_2={changeHandler_2}
            People={People}
            ButtonHandler={ButtonHandler}
            Custom={Custom}
            customHandler={customHandler}
            error={error}
            scnderror={scnderror}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SubContainer_scnd p={Tip} q={Total} resetHandler={resetHandler} />
        </Grid>
      </Grid>
    </>
  );
}

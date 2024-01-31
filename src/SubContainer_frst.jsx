import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import ButtonUs from "./ButtonUs";

export default function SubContainer_frst({
  error,
  Bill,
  changeHandler,
  changeHandler_2,
  scnderror,
  People,
  ButtonHandler,
  customHandler,
  Custom,
}) {
  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ margin: "0px" }}>
        <div style={{ display: "flex", position: "relative" }}>
          <h1 style={{ marginBottom: "0", color: "hsl(186, 14%, 43%)" }}>
            Bill
          </h1>
          {error ? (
            <h1 style={{ position: "absolute", right: 0, color: "red" }}>
              Can't be zero
            </h1>
          ) : (
            ""
          )}
        </div>
        <TextField
          size="small"
          error={error}
          placeholder="0"
          value={Bill}
          onChange={changeHandler}
          type="number"
          sx={{
            direction: "rtl",
            marginBottom: "2rem",
            bgcolor: "hsl(189, 41%, 97%)",
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        ></TextField>
        <ButtonUs
          Bill={Bill}
          People={People}
          ButtonHandler={ButtonHandler}
          Custom={Custom}
          customHandler={customHandler}
        />
        <div style={{ display: "flex", position: "relative" }}>
          <h1 style={{ color: "hsl(186, 14%, 43%)" }}>Number of People</h1>
          {scnderror ? (
            <h1 style={{ position: "absolute", right: 0, color: "red" }}>
              Can't be zero
            </h1>
          ) : (
            ""
          )}
        </div>
        <TextField
          size="small"
          error={scnderror}
          placeholder="0"
          value={People}
          onChange={changeHandler_2}
          sx={{
            direction: "rtl",
            bgcolor: "hsl(189, 41%, 97%)",
          }}
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle></AccountCircle>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
    </>
  );
}

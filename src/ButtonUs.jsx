import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

const data = [5, 10, 15, 20, 25];
export default function ButtonUs({ Custom, customHandler, ButtonHandler }) {
  return (
    <>
      <h1 style={{ color: "hsl(186, 14%, 43%)" }}>Select Tip %</h1>
      <Box sx={{ marginBottom: "2rem", marginTop: "1rem", flexGrow: "1" }}>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 2 }}
          columnSpacing={{ xs: 2, md: 1 }}
        >
          {data.map((obj, i) => (
            <Grid item xs={6} md={4} key={i}>
              <Button
                onClick={(e) => ButtonHandler(e, obj / 100)}
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontSize: "1.3rem",
                  fontFamily: "inherit",
                  width: "100%",
                  bgcolor: "hsl(183, 100%, 15%)",
                  borderRadius: ".4rem",
                  "&:hover": { bgcolor: "hsl(185, 41%, 84%)" },
                }}
              >
                {obj}%
              </Button>
            </Grid>
          ))}
          <Grid item xs={6} md={4}>
            <TextField
              sx={{ borderRadius: ".4rem", paddingTop: ".21rem" }}
              placeholder="CUSTOM"
              type="number"
              size="small"
              value={Custom}
              onChange={customHandler}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

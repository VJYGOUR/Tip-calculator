import { Box, Button } from "@mui/material";
export default function SubContainer_scnd({ p, q, resetHandler }) {
  const data_2 = [
    {
      item_1: p,
      item_2: "Tip Amount",
    },
    {
      item_1: q,
      item_2: "Total",
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "100%",
          bgcolor: "hsl(183, 100%, 15%)",
          borderRadius: "1rem",
          margin: "0",

          position: "relative",
          padding: "1.5rem",
        }}
      >
        {data_2.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
              marginBottom: ".5rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ paddingTop: "0.8rem" }}>
              <p style={{ color: " white" }}>{item.item_2}</p>
              <p style={{ color: "hsl(186, 14%, 43%)" }}>/person</p>
            </div>
            <div
              style={{
                color: " hsl(172, 67%, 45%) ",
                top: "10%",
                fontSize: "2rem",
                position: "absolute",
                right: "0rem",
              }}
            >
              ${item.item_1}
            </div>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <Button
            className="bg-black"
            onClick={resetHandler}
            variant="contained"
            sx={{
              display: "block",
              width: "82%",
              position: "absolute",
              bottom: "2rem",
              color: "hsl(183, 100%, 15%)",
              bgcolor: "  hsl(183, 100%, 25%)",
              "&:hover": { bgcolor: "hsl(185, 41%, 84%)" },
              fontFamily: "inherit",
              fontWeight: "700",
            }}
          >
            Reset
          </Button>
        </div>
      </Box>
    </>
  );
}

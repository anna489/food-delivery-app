import { Grid, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item>
          <Typography variant="h6">Welcome mui</Typography>
        </Grid>
        <Grid>
          <Button variant="contained">hi</Button>
        </Grid>
      </Grid>
    </main>
  );
}

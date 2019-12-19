import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper>
                This is a little bit about me <span role="img" aria-label="party">🎉</span>
            </Paper>
        </Grid>
    </Grid>
)
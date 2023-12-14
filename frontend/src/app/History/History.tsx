import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import {CircularProgress} from "@mui/material";

export default function History() {
    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DatePicker label="Od" maxDate={dayjs('2023-12-14')}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DatePicker label="Do" maxDate={dayjs('2023-12-14')}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>Wyszukaj</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                {/*<CircularProgress />*/}
                {/*Historia wypożyczeń jest pusta.*/}
                Brak wypożyczeń w wybranym okresie.
            </Typography>
        </Paper>
    );
}
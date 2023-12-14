import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import {ImportContacts} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Autocomplete, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Box from "@mui/material/Box";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function Active() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isbns = [
        { number: '1234567890121' },
        { number: '1234567890122' },
        { number: '1234567890123' },
        { number: '1234567890124'}]

    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Aktywne wypożyczenia"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Tooltip title="Załaduj ponownie">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }} onClick={handleClickOpen}>
                                Nowe wypożyczenie
                            </Button>
                            <Dialog
                                maxWidth="sm"
                                fullWidth={true}
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>Nowe wypożyczenie</DialogTitle>
                                <DialogContent>
                                    <Box
                                        noValidate
                                        component="form"
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: 'auto',
                                            width: 'fit-content',
                                        }}
                                    >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={isbns.map((option) => option.number)}
                                            renderInput={(params) => <TextField {...params} label="ISBN" />}
                                            sx={{mb: 2, mt: 1}}
                                        />
                                        <TextField
                                            fullWidth
                                            name="email"
                                            label="Email wypożyczającego"
                                            type="text"
                                            id="email"
                                            sx={{mb: 2}}
                                        />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateRangePicker']}>
                                                <DatePicker readOnly label="Od" defaultValue={dayjs('2023-12-14')}/>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateRangePicker']}>
                                                <DatePicker label="Do" minDate={dayjs('2024-01-14')}/>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Zapisz</Button>
                                    <Button onClick={handleClose}>Zamknij</Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} alignItems="center" sx={{ my: 2, mx: 2}}>
                <Grid item xs={2} sx={{alignItems: 'center', display: 'flex', flexDirection: 'column', mb:2}}>
                    <ImportContacts sx={{fontSize: 60, color: '#555555', alignSelf: 'center'}}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="text.secondary" fontWeight="bold">
                        Książka1
                    </Typography>
                    <Typography color="text.secondary" fontSize="small">
                        Jan Kowalski
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="text.secondary" align="center" fontSize="small">
                        ISBN: 1234567890123
                    </Typography>
                    <Typography color="text.secondary" align="center" fontSize="small">
                        Wydawnictwo: Wydawnictwo1
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Data wypożyczenia: 20.11.2021
                    </Typography>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Termin zwrotu: 20.12.2023
                    </Typography>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Email: adamkwapisz@pw.edu.pl
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">Zakończ</Button>
                </Grid>
                <Grid item xs={11}>
                    <Divider orientation="horizontal" flexItem/>
                </Grid>
                <Grid item xs={2} sx={{alignItems: 'center', display: 'flex', flexDirection: 'column', mb:2}}>
                    <ImportContacts sx={{fontSize: 60, color: '#555555', alignSelf: 'center'}}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="text.secondary" fontWeight="bold">
                        Książka2
                    </Typography>
                    <Typography color="text.secondary" fontSize="small">
                        Wojciech Kowalczyk
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="text.secondary" align="center" fontSize="small">
                        ISBN: 1234567890122
                    </Typography>
                    <Typography color="text.secondary" align="center" fontSize="small">
                        Wydawnictwo: Wydawnictwo2
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Data wypożyczenia: 17.11.2021
                    </Typography>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Termin zwrotu: 17.12.2023
                    </Typography>
                    <Typography color="text.secondary" align="right" fontSize="small">
                        Email: adamkwapisz@pw.edu.pl
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">Zakończ</Button>
                </Grid>
            </Grid>
            {/*<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">*/}
            {/*    Nie znaleziono aktualnych wypożyczeń pasujących do podanych kryteriów.*/}
            {/*</Typography>*/}
        </Paper>
    );
}
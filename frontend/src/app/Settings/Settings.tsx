import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from "@mui/material/Divider";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import Button from "@mui/material/Button";

export default function Settings() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <Grid container spacing={2} alignItems="center" sx={{ my: 2, mx: 2}}>
                <Grid item xs={3}>
                    <Typography color="text.secondary" fontWeight="bold">
                        Zmiana hasła
                    </Typography>
                </Grid>
                <Grid item xs={8}/>
                <Grid item xs={4}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Stare hasło"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={5}/>
                <Grid item xs={4}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Nowe hasło"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Powtórz hasło"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">
                        Zapisz
                    </Button>
                </Grid>
                <Grid item xs={11}>
                    <Divider orientation="horizontal" flexItem/>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="text.secondary" fontWeight="bold">
                        Powiadomienia
                    </Typography>
                </Grid>
                <Grid item xs={8}/>
                <Grid item xs={4}>
                    <Typography color="text.secondary" fontSize="small">
                        Liczba dni przed końcem wypożyczenia, w których użytkownik otrzyma powiadomienie
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Dni przed końcem wypożyczenia</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Dni przed końcem wypożyczenia"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">
                        Zapisz
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
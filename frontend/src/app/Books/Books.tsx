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
import {
    Autocomplete,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {ImportContacts} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Books() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const authors = [
        { author: 'Jan Kowalski' },
        { author: 'Jakub Nowak'}]

    const publishers = [
        { name: 'Wydawnictwo1' },
        { name: 'Wydawnictwo2'}]

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
                                placeholder="Wyszukaj po tytule, kategorii, autorze, numerze ISBN..."
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
                                Dodaj książkę
                            </Button>
                            <Dialog
                                maxWidth="sm"
                                fullWidth={true}
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>Dodaj nową książkę</DialogTitle>
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
                                        <TextField
                                            fullWidth
                                            name="tittle"
                                            label="Tytuł"
                                            type="text"
                                            id="tittle"
                                            sx={{mb: 2}}
                                        />
                                        <Autocomplete
                                            id="free-solo-demo"
                                            freeSolo
                                            options={authors.map((option) => option.author)}
                                            renderInput={(params) => <TextField {...params} label="Autor" />}
                                            sx={{mb: 2}}
                                        />
                                        <Autocomplete
                                            id="free-solo-demo"
                                            freeSolo
                                            options={publishers.map((option) => option.name)}
                                            renderInput={(params) => <TextField {...params} label="Wydawnictwo" />}
                                            sx={{mb: 2}}
                                        />
                                        <TextField
                                            fullWidth
                                            name="isbn"
                                            label="ISBN"
                                            type="text"
                                            id="isbn"
                                            sx={{mb: 2}}
                                        />
                                        <TextField
                                            fullWidth
                                            name="count"
                                            label="Liczba egzemplarzy"
                                            type="text"
                                            id="count"
                                            sx={{mb: 2}}
                                        />
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
                        Dostępnych: 5
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen2}>Edytuj</Button>
                    <Dialog
                        maxWidth="sm"
                        fullWidth={true}
                        open={open2}
                        onClose={handleClose2}
                    >
                        <DialogTitle>Edytuj książkę</DialogTitle>
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
                                <TextField
                                    fullWidth
                                    name="tittle"
                                    label="Tytuł"
                                    defaultValue="Książka1"
                                    type="text"
                                    id="tittle"
                                    sx={{mb: 2, mt: 1}}
                                />
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    defaultValue="Jan Kowalski"
                                    options={authors.map((option) => option.author)}
                                    renderInput={(params) => <TextField {...params} label="Autor" />}
                                    sx={{mb: 2}}
                                />
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    defaultValue="Wydawnictwo1"
                                    options={publishers.map((option) => option.name)}
                                    renderInput={(params) => <TextField {...params} label="Wydawnictwo" />}
                                    sx={{mb: 2}}
                                />
                                <TextField
                                    fullWidth
                                    disabled
                                    defaultValue="1234567890123"
                                    name="isbn"
                                    label="ISBN"
                                    type="text"
                                    id="isbn"
                                    sx={{mb: 2}}
                                />
                                <TextField
                                    fullWidth
                                    defaultValue={5}
                                    name="count"
                                    label="Liczba egzemplarzy"
                                    type="text"
                                    id="count"
                                    sx={{mb: 2}}
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2}>Zapisz</Button>
                            <Button onClick={handleClose2}>Zamknij</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>

                {/*<Grid item xs={11}>*/}
                {/*    <Divider orientation="horizontal" flexItem/>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={2} sx={{alignItems: 'center', display: 'flex', flexDirection: 'column', mb:2}}>*/}
                {/*    <ImportContacts sx={{fontSize: 60, color: '#555555', alignSelf: 'center'}}/>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={2}>*/}
                {/*    <Typography color="text.secondary" fontWeight="bold">*/}
                {/*        Książka12*/}
                {/*    </Typography>*/}
                {/*    <Typography color="text.secondary" fontSize="small">*/}
                {/*        Jakub Nowak*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={4}>*/}
                {/*    <Typography color="text.secondary" align="center" fontSize="small">*/}
                {/*        ISBN: 1234567890124*/}
                {/*    </Typography>*/}
                {/*    <Typography color="text.secondary" align="center" fontSize="small">*/}
                {/*        Wydawnictwo: Wydawnictwo2*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Typography color="text.secondary" align="right" fontSize="small">*/}
                {/*        Dostępnych: 2*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
            </Grid>
            {/*<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">*/}
                {/*<CircularProgress />*/}
                {/*Nie znaleziono książek pasujących do podanych kryteriów.*/}
            {/*</Typography>*/}
        </Paper>
    );
}
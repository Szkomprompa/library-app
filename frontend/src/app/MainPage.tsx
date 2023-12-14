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
import Box from "@mui/material/Box";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import {Icon, Stack} from "@mui/material";

export default function Active() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={6}>
                    <Paper sx={{alignItems: 'center', margin: 'auto', overflow: 'hidden', background: '#009be5', display: 'flex', flexDirection: 'column'}}>
                        <Icon sx={{pt: 5, pb: 4, pr: 5, pl: 1}}>
                            <MenuBookIcon sx={{alignSelf: 'center', color: '#ffffff', fontSize: 30 }}/>
                        </Icon>
                        <Typography sx={{ mb: 5, mx: 2 }} color="#ffffff" align="center">
                            Książki
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{alignItems: 'center', margin: 'auto', overflow: 'hidden', background: '#009be5', display: 'flex', flexDirection: 'column'}}>
                        <Icon sx={{pt: 5, pb: 4, pr: 5, pl: 1}}>
                            <AutoStoriesIcon sx={{alignSelf: 'center', color: '#ffffff', fontSize: 30 }}/>
                        </Icon>
                        <Typography sx={{ mb: 5, mx: 2 }} color="#ffffff" align="center">
                            Aktywne wypożyczenia
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{alignItems: 'center', margin: 'auto', overflow: 'hidden', background: '#009be5', display: 'flex', flexDirection: 'column'}}>
                        <Icon sx={{pt: 5, pb: 4, pr: 5, pl: 1}}>
                            <AccessTimeFilledIcon sx={{alignSelf: 'center', color: '#ffffff', fontSize: 30 }}/>
                        </Icon>
                        <Typography sx={{ mb: 5, mx: 2 }} color="#ffffff" align="center">
                            Historia wypożyczeń
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{alignItems: 'center', margin: 'auto', overflow: 'hidden', background: '#009be5', display: 'flex', flexDirection: 'column'}}>
                        <Icon sx={{pt: 5, pb: 4, pr: 5, pl: 1}}>
                            <AccountBalanceWalletIcon sx={{alignSelf: 'center', color: '#ffffff', fontSize: 30 }}/>
                        </Icon>
                        <Typography sx={{ mb: 5, mx: 2 }} color="#ffffff" align="center">
                            Należności
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{alignItems: 'center', margin: 'auto', overflow: 'hidden', background: '#009be5', display: 'flex', flexDirection: 'column'}}>
                        <Icon sx={{pt: 5, pb: 4, pr: 5, pl: 1}}>
                            <SettingsIcon sx={{alignSelf: 'center', color: '#ffffff', fontSize: 30 }}/>
                        </Icon>
                        <Typography sx={{ mb: 5, mx: 2 }} color="#ffffff" align="center">
                            Ustawienia
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
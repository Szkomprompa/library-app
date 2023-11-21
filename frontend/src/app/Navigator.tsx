import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';

const categories = [
    {
        id: 'Biblioteka',
        children: [
            {
                id: 'Książki',
                icon: <MenuBookIcon />,
                active: true,
            },
            { id: 'Aktywne wypożyczenia', icon: <AutoStoriesIcon /> },
            { id: 'Historia wypożyczeń', icon: <AccessTimeFilledIcon /> },
            { id: 'Należności', icon: <AccountBalanceWalletIcon /> }
        ],
    },
    {
        id: 'Użytkownik',
        children: [
            { id: 'Ustawienia', icon: <SettingsIcon /> },
            { id: 'Wyloguj', icon: <LogoutIcon /> }
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props: DrawerProps) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    Librarian
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Menu Główne</ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
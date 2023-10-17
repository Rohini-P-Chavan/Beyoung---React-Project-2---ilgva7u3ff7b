
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { EmailRounded, KeyRounded, } from '@mui/icons-material';
import { Box } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export default function Register({ setValue, handleClose, }) {

    return (
        <>

            <DialogContent sx={{ marginTop: '10px', }}>
                <DialogContentText fontWeight={'bold'}>
                    To Register to this website, please enter your name , Email address and password here. We
                    will send updates occasionally.
                </DialogContentText>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }} >
                    <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="fullName" autoFocus margin="dense" label="Full Name" variant="standard" fullWidth />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }} >
                    <EmailRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="email" margin="dense" label="Email" variant="standard" fullWidth />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }} >
                    <KeyRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="password" fullWidth label="Password" type='password' variant="standard" />
                </Box>

            </DialogContent >
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Register</Button>
            </DialogActions>
        </>
    );
}

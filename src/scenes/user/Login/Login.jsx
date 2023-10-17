
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { EmailRounded, KeyRounded } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function Login({ handleClose }) {


    return (
        <>

            <DialogContent sx={{ marginTop: '10px', }}>
                <DialogContentText fontWeight={'bold'}>
                    To Login to this website, please enter your Email address and password here. We
                    will send updates occasionally.
                </DialogContentText>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }} >
                    <EmailRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" autoFocus margin="dense" label="Email" variant="standard" fullWidth />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }} >
                    <KeyRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        id="password"
                        fullWidth
                        label="Password"
                        variant="standard"
                        type='password'
                    />
                </Box>

                {/* <Box
                    marginTop={'30px'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box className="1">Don't have account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={tabValueToRegister}>Register</span></Box>
                    <Box className="2">
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                            Forgot Password?
                        </span>
                    </Box>
                </Box> */}

            </DialogContent >
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => { }}>Login</Button>
            </DialogActions>
        </>
    );
}

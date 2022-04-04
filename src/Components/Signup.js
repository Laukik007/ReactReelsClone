import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActions } from '@mui/material';
import './Signup.css'
import insta from '../Assets/Instagram.JPG'
import {makeStyles} from '@mui/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {Link} from 'react-router-dom'
export default function Signup() {
    const useStyles=makeStyles({
        text1:{
            color:'grey',
            textAlign:'center',
        },
        card2:{
            height:'7vh',
            marginTop:'1%',
        }
    })
    const classes=useStyles();
    
    return (
        <div className='signupWrapper'>
            <div className='signupCard'>
                <Card variant="outlined">
                    <div className="insta-logo"><img src={insta} alt="" /></div>
                            <CardContent>
                                <Typography className={classes.text1} varient="subtitle1">
                                        Sign up to see and videos from your friends
                                </Typography>
                                    {true && <Alert severity="error">This is an error alert</Alert>}
                                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                                <Button  color="secondary" fullWidth={true} margin="dense" startIcon= {<CloudUploadIcon/>} component="label">
                                    Upload Profile Image
                                    <input type="file" accept="image/*" hidden/>
                                </Button>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color='secondary' fullWidth={true} variant="contained">
                                    Signup
                                </Button>
                            </CardActions>
                            <CardContent>
                                <Typography className={classes.text1} varient="subtitle1">
                                    By signing up, you agree to our terms, conidition and cookies policy.
                                </Typography>
                            </CardContent>
                </Card>
                        
                <Card variant ="outlined" className={classes.card2}>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1">
                        Already have an account?<Link to="/login" style={{textDecoration:'none'}} > Log in</Link>
                        </Typography>
                        </CardContent>
                </Card>
            </div>
        </div>
    );
}

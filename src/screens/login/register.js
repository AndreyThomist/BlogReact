import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    card: {
        marginTop: '25%'
    },
    button:{
        marginLeft:'30%',
        marginTop:25
    }
}));

const Register = () => {
    const classes = useStyles();
    return <Container maxWidth="sm" >
        <Card className={classes.card}>
            <form className={classes.root} autoComplete="off">
                <CardContent>
                    <TextField label="Email" id="email" defaultValue="email" size="small" />
                    <TextField type="password" label="password" id="password" defaultValue="Small" size="small" />
                    <Button type="submit" className={classes.button} variant="contained" color="primary">
                    Register
                   </Button>
                </CardContent>
            </form>
        </Card>
    </Container>
}

export default Register;
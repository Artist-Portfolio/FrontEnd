
import React from "react";
import { connect } from "react-redux";
// import axios from 'axios';
import { addPost } from '../actions';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    display: 'none'
  },
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}));

 export class Post extends React.Component{
  state = {
    imageURL: "",
    description:""
  };

  addPost = e => {
    e.preventDefault();
    
    const post = {
      // id:this.props.post.id,
      // id: this.props.user.loggedinUser,
      imageURL: this.state.imageURL,
      description: this.state.description,
    };
    // if(this.props.posts.id){
    this.props.addPost(post);
    this.setState({ imageUrl: '', description: '' });
    // }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){

    const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs' id='newUser'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Create a Post
        </Typography>
        <form onSubmit={this.addPost} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                id='outlined-textarea'
                label='Description'
                placeholder='Enter a description'
                rows='3'
                multiline
                className={classes.textField}
                margin='normal'
                variant='outlined'
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <input
                accept='image/*'
                className={classes.input}
                id='contained-button-file'
                multiple
                type='file'
              />
              <label htmlFor='contained-button-file'>
                <Button
                  variant='contained'
                  component='span'
                  className={classes.button}
                  disabled
                >
                  Upload
                </Button>
              </label>
              {/* <Typography display='block' variant='caption'>
                Upload feature coming soon
              </Typography> */}
            </Grid>
          </Grid>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Post
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
   );
  }
}



const mapStateToProps = state => ({
  posts: state.posts,
  fetchingData: state.fetchingData,
  
});

export default connect(
  mapStateToProps,
  { addPost}
)(Post);
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Post from './Post';
//imports for breadcrumbs
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

class Path extends React.Component {
  

  render(){


   

    const {classes} = this.props;

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator='›' aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            <HomeIcon />
          </Link>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class Account extends React.Component{

render(){


  const {classes} = this.props;
  this.setState = {value: 0};

  function handleChange(event, newValue) {
    this.setState({value: newValue});
    event.preventDefault();
  }

  return (
    <div className={classes.root}>
      <Path />
      <AppBar position='static'>
        <Tabs
          value={this.state}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='New Post' {...a11yProps(0)} />
          <Tab label='Portfolio' {...a11yProps(1)} />
          <Tab label='Settings' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={this.state} index={0}>
        <Post />
      </TabPanel>
      <TabPanel value={this.state} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={this.state} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}}



const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  user: state.user

});


export default connect(
  mapStateToProps,
  {}
)  (withStyles(styles)(Account));

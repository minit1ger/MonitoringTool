import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import data from '../../data/serverLogs.log';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "2000px",
    color: theme.palette.primary.main,
    fontsize: "20px",
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

/**
 * Returns a display of server logs. 
 * TODO: Read from a server file log.
 */
class ServerLogs extends React.Component {

  constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
  }
  
  componentDidMount() {
		this.readTextFile("../../data/serverLogs.log");
  }
  
  readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
  };

  render(){

    const { classes } = this.props;

  return (
    <div>
      {console.log(data)}
      <form className={classes.container} noValidate autoComplete="off">
      <TextField className={classes.textField}
        id="ServerLog"
        label="Server Log"
        multiline
        rows="30"
        AcceptsReturn="True"
        disabled
        defaultValue="Server Fault 
Time:    2300 Tue March 31st 2020
Server:  GPU01
Reason:  Could not Ping


Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Time:    2300 Tue March 31st 2020
Server:  GPU01
Reason:  Could not Ping

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Time:    2300 Tue March 31st 2020
Server:  GPU01
Reason:  Could not Ping

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1402
Time:    2301 Tue March 31st 2020
Reason:  Server Fault

Deployment Failure - 1401
Time:    2301 Tue March 31st 2020
Reason:  Server Fault"
        className={classes.textField}
        margin="dense"
        variant="outlined"
      />
      </form>
    </div>
  );
  }
}

ServerLogs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServerLogs);
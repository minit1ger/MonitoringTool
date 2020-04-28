import React from "react";
import data from '../../data/serverStates.json';

import ServerHealthDisplay from './ServerHealthDisplay';

import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { 

  //Card Related Imports
  Card, 
  CardHeader,
  CardContent,

  // Other
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//TODO: Fix with of ServerHealth Width
export default function ServerHealthDropdown() {

  const classes = useStyles(); 

  if (data)
  {
    var options = []; 
    data.forEach(element => {
      options.push( element.name );
    });

    const handleChange = (event) => {
      setServer(event.target.value);
    };

    var defaultOption = options[0];

    const [server, setServer] = React.useState(defaultOption);
  
    return (
      
      <Card className={classes.container}>
      <CardHeader align="center" title="ServerHealth" />
      <Divider />
        <div>
        <FormControl className={classes.formControl}>
            {/* <InputLabel id="server-name-label">{server}</InputLabel> */}
            <Select 
              labelId="select-server-label"
              id="select-server"
              value={defaultOption}
              onChange={handleChange}
            >
              {/*Populate Select with Server Names*/}
              { options.map( element => {
                  return ( 
                    <MenuItem value={element}>{element}</MenuItem>
                  );
              })}

            </Select>
          </FormControl>

        </div>
        <ServerHealthDisplay serverName={server}/>
      </Card>
    )
  }
  else
  {
    return (<div></div>);
  }
}
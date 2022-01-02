import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import BarraProgreso from './barraProgreso';

export default function ListaHabilidades() {
  return (
    <List sx={{
      display: 'grid',
      gap: 1,
      gridTemplateColumns: 'repeat(2, 1fr)',
    }} >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HtmlIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HTML5" secondary="Intermedio"sx={{width: "25%"}} />
        <BarraProgreso/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CssIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="CSS3" secondary="Intermedio" sx={{width: "25%"}}/>
        <BarraProgreso/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Javascript" secondary="Basico" sx={{width: "25%"}}/>
        <BarraProgreso/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HtmlIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Python" secondary="Intermedio" sx={{width: "25%"}} />
        <BarraProgreso/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HtmlIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="MySql" secondary="Basico" sx={{width: "25%"}}/>

        <BarraProgreso/>
      </ListItem>
    </List>
  );
}

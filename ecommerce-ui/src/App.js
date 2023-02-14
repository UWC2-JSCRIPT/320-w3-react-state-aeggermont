import logo from './logo.svg';
import { makeStyles } from '@material-ui/core';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import {  Paper } from "@material-ui/core";
import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import bnbs from './bnbs.json'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';
import './App.css';
import VacationRental from './VacationRental/VacationRental';
import Reservations from './Reservations/Reservations';


/**
 * Modal to display current vacation rentals
 */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

/**
 * Main class APP
 */
class App extends React.Component {
  static propertyData;
  
  constructor(props) {
    super(props);
    this.propertyData = bnbs;
    this.properties = '';
    this.selectedPropertiesMap = new Map();
    this.isOpen = true;

    /* Creating a new list of properties with an index */
    this.properties = bnbs.map( (property, index) => {
      return (
        {
          "title": property.title,
          "houseType": property.houseType  ,
          "image":  property.image ,
          "location":  property.location ,
          "payment":  property.payment ,
          "host":  property.host,
          "rating":  property.rating,
          "propertyId" : index
        }
      );
    });

    console.log(this.propertyData);
    this.updateReservations = this.updateReservations.bind(this);
    this.state = {property: '', displayShoppingCart: false};
  }


  DisplayShoppingCard () {
    console.log('displying shopping card');
    return (
      <Modal
        open={this.state.displayShoppingCart}
        onClose={this.handleDisplayShopCart(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
    );
  }

  componentDidMount() {
    console.log('>>> updated properties <<');
    console.log(this.properties);
  }

  updateReservations(selectedProperty) {
    // handleTextChange(selectedProperty) {
    this.setState({property: selectedProperty});

    console.log('>>> Handling handleTextChange in parent');
    // console.log(selectedProperty);
    this.selectedPropertiesMap.set(selectedProperty.propertyId,selectedProperty );
    console.log('Properies in table');
    console.log( this.selectedPropertiesMap.size);
  }

  handleDisplayShopCart(isOpen) {
    this.setState({displayShoppingCart: isOpen }); 
  }

  render() {
    return (
      <div> 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                > Short Term Reservations
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={this.selectedPropertiesMap.size} color="error">
                      <ShoppingCartIcon  onClick={ () => this.handleDisplayShopCart(true) }/>
                    </Badge>
                  </IconButton>
                </Box>
              </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            height: '100%',
            width: '100%',
            borderRadius: 1,
          }}>
          { this.properties.map(propery => (
            <VacationRental
              updateReservations={this.updateReservations}
              title={propery.title }
              houseType={propery.houseType}
              image={propery.image}
              location={propery.location} 
              payment={propery.payment}
              host={propery.host}
              rating={propery.rating}
              propertyId={propery.propertyId}
            />
          ))}     
        </Box>
        {this.state.displayShoppingCart && (
          <Reservations 
            selectedProperties={this.selectedPropertiesMap}
            isModalOpen={this.state.displayShoppingCart}
           />
        )}
      </div>
    );
  }
}

export default App;
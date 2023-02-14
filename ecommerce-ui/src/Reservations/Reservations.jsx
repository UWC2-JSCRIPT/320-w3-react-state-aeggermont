import React, { useState, Component }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isModalOpen: props.isModalOpen
    };

    this.selectedProperties = Array.from(props.selectedProperties);
    this.totalCost = 0;

    this.selectedProperties.map((value, index) => {
      this.totalCost += value[1].payment.cost;
    });
  }

  // handleOpen = () => setOpen(true);
  // handleClose = () => setOpen(false);

  handleOpen = () => {
    this.setState(() => ({
      isModalOpen: true
    }));
  }

  handleClose = () => {
    this.setState(() => ({
      isModalOpen: false
    }));
  }

  render() {  
    return (
      <div>
        <Button onClick={this.handleOpen}>Open modal</Button>
        <Modal
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Vacation Rental Shopping List
            </Typography>
            <Divider light />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Selected vacation rentals:    
            </Typography>
            <List>
            {
              this.selectedProperties.map((value, index) => (
                <ListItem>
                  <ListItemText
                    primary={value[1].title}
                    secondary= {value[1].payment.cost}
                  />
                </ListItem>
              ))
            }
            </List>
            <Divider light />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Total Cost: $ {this.totalCost} USD    
            </Typography>
            <Button onClick={this.handleClose}>Close modal</Button>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default Reservations;

Reservations.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  selectedProperties: PropTypes.object.isRequired
}    
import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import './vacation-rental.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";

class VacationRental extends Component {

    constructor(props) {
        super(props);
        console.log('>>> VacationRental <<<');
        console.log(props);
        this.state = {
            reserved: false
        }

        this.title = props.title;
        this.image = props.image;
        this.houseType = props.houseType;
        this.location = props.location;
        this.payment = props.payment;
        this.host = props.host;
        this.rating = props.rating;
        this.propertyId = props.propertyId;       
    }


    handleReservChange = (reservedStatus) => {
        console.log('>>> handleReservChange <<<');
        //console.log(this.state);
        
        this.setState(() => ({
            reserved: reservedStatus,
            title: this.title,
            image:  this.image,
            houseType: this.houseType,
            location: this.location,
            payment: this.payment,
            host: this.host,
            propertyId: this.propertyId
        }),
        () => this.props.updateReservations(this.state));
    }

    render() {
        return (
            <div style={{margin: '2%'}}>
                <Card sx={{ width: '330px', heigh: '270px' }}  xs={12} sm={4} md={3} lg={3} >
                <CardMedia
                    component="img"
                    height="200"
                    image={this.image}
                    alt="Chevrolet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    { this.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    { this.houseType }
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                    { this.location.city },  { this.location.country }
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                    { this.host.name },  { this.rating.stars } - { this.rating.reviews }
                    </Typography> 
        
                </CardContent>
                <CardActions>
                    <Button onClick= {()=> this.handleReservChange(true)} size="small">Reserve</Button>
                    <Button onClick= {()=> this.handleReservChange(false)} size="small">Remove</Button>
                </CardActions>
                </Card>
            </div>
        );
    }   
    
}

export default VacationRental;

VacationRental.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    payment: PropTypes.object.isRequired,
    host: PropTypes.object.isRequired,
    rating: PropTypes.object.isRequired,
    propertyId: PropTypes.number.isRequired
}    


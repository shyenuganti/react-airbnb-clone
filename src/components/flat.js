import React from "react";
import "./flat.css";


// Assuming the service returns the flat details in this format:
// {
//     "id": 145,
//     "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
//     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     "price": 164,
//     "priceCurrency": "EUR",
//     "lat": 48.884211,
//     "lng": 2.346890
//   }

class Flat extends React.Component{
    render(){
        const title = this.props.flat.price
            +this.props.flat.priceCurrency + " - "
            +this.props.flat.name;

        const imageStyle = {
            backgroundImage: `url('${this.props.flat.imageUrl}')`
        };

        return (
            <div className="flat">
                <div className="flat-picture" style={imageStyle}></div>
                <div className="flat-title">
                    {title}
                </div>
            </div>
        );    
    }
}

export default Flat;
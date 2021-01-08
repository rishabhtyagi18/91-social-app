import React from 'react';
import './AddressContent.css';

const AddressContent = (props) => {
    return (
        <div className="payload">
            <div className="payload-details">
                <div className="payload-id">
                    <div className="heading">Id</div>
                    {props.details.payload_id}
                </div>
                <div className="payload-type">
                    <div className="heading">Type</div>
                    {props.details.payload_type}
                </div>
                <div className="payload-mass">
                    <div className="heading">Mass</div>
                    {props.details.payload_mass_kg}
                </div>
            </div>
            <div className="details">
                <div className="customers">
                    <div className="heading">Customers</div>
                    {props.details.customers.map(item => item)}
                </div>
                <div className="manufacturer">
                    <div className="heading">Manufacturer</div>
                    {props.details.manufacturer}
                </div>
                <div className="nationality">
                    <div className="heading">Nationality</div>
                    {props.details.nationality}
                </div>
            </div>
        </div>
    );
};

export default AddressContent;

import React, {useState} from 'react';

const Nights = (props) => {
    const [night, setNight] = useState('');

    // sendNightsValue = () =>{
    //     this.props.parentCallback()
    // } 

    handleChange(e) {
        setNight(e.target.value)
    }

    return (
        <div>  
            <input value={night} onChange={this.handleChange} placeholder='nights from'/>
            <input placeholder='nights to'/>
        </div>
    );
};

export default Nights;
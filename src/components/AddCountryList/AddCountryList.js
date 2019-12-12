import React, {Fragment} from 'react';
import  './AddCountryList.css'

const AddCountryList = (props) => {
    return (
        <Fragment>
                <li onClick={() => props.clickHandler(props.index)} className='ListCountry'>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">{props.name}</a>
                </li>
        </Fragment>
    );
};

export default AddCountryList;
import React, {Fragment} from 'react';
import './CountryInfo.css'

const CountryInfo = props => {
     return (
                <Fragment>
                    <div className='blockCount'>
                        <div><img className='countInfoImg' src={props.flag} alt=""/></div>
                        <div className='informationBlock'>
                        <div className='item'><h1>{props.name}</h1></div>
                        <div className='item'><p><b>Population:</b> {props.population}</p></div>
                        <div className='item'><p><b>Region:</b> {props.region}</p></div>
                        <div className='item'><p><b>Code:</b> {props.alpha3Code}</p></div>
                        <div className='item'><p><b>Subregion:</b> {props.subregion}</p></div>
                        <div>
                            <ul><span><b>Borders</b></span>
                                {props.borders.map((country, index) => {
                                    return (
                                        <li key={index}>{country.name}</li>
                                    )
                                })}
                            </ul></div>
                        </div>
                    </div>


                </Fragment>
        );
};

export default CountryInfo;
import React, {Fragment} from 'react';
import './CountryInfo.css'

const CountryInfo = props => {
     return (
                <Fragment>
                    <div className='blockCount'>
                        <div><h1>{props.name}</h1></div>
                        <div><img className='countInfoImg' src={props.flag} alt=""/></div>
                        <div><p>Population: {props.population}</p></div>
                        <div><p>Region: {props.region}</p></div>
                        <div><p>Code: {props.alpha3Code}</p></div>
                        <div><p>Subregion: {props.subregion}</p></div>
                        <div>
                            <ul>Borders:
                                {props.borders.map((country, index) => {
                                    return (
                                        <li key={index}>{country.name}</li>
                                    )
                                })}
                            </ul></div>

                    </div>


                </Fragment>
        );
};

export default CountryInfo;
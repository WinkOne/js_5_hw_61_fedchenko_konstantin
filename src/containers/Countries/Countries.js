import React, {Component} from 'react';
import './Countries.css';
import axios from 'axios';
import AddCountryList from "../../components/AddCountryList/AddCountryList";
import CountryInfo from "../../components/CountryInfo/CountryInfo";


class Countries extends Component {
    state = {
        countriesName: [],
        countryInfo: [],
        borders: null

    };
    componentDidMount(){
        this.getAllCountries();
    };

    getAllCountries = async () => {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
        const countriesName = response.data;
        this.setState({countriesName});
    };

    addInfoCountry = (index) => {
        const countries = [...this.state.countriesName];
        const oneCountries = countries[index].name;
        let countryInfo;
        let countryBorders;
        axios.get('https://restcountries.eu/rest/v2/name/' + oneCountries).then(result => {
            countryInfo = result.data;
            Promise.all(result.data[0].borders.map(border => {
                return axios.get('https://restcountries.eu/rest/v2/alpha/' + border)
            })).then(response => {
                countryBorders = response.map(country => country.data);
                this.setState({
                    countryInfo,
                    borders: countryBorders
                })
            })
        })
    };


    render() {
        return (
            <div className='MainWindow'>
                <ul className='box'>
                    {this.state.countriesName.map((country, index) => (
                        <AddCountryList
                            key={index}
                            name={country.name}
                            index={index}
                            clickHandler={this.addInfoCountry}
                        />
                    ))}
                </ul>
                <div className='boxInformation'>
                    {this.state.countryInfo.map((info, index) => (
                        <CountryInfo
                            key={index}
                            name={info.name}
                            flag={info.flag}
                            population={info.population}
                            region={info.region}
                            alpha3Code={info.alpha3Code}
                            subregion={info.subregion}
                            borders={this.state.borders}
                        />
                    ))}
                </div>
            </div>

        );
    }
}

export default Countries;
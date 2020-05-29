import React from 'react';
import corona from '../src/components/corona.png'
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import PickCountry from './components/PickCountry/PickCountry';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
          <img className={styles.image} alt="Covid-19" src={corona} />
        <Cards data={data} />
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
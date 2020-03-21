import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Rental from '../components/scream/Rental';
import Profile from '../components/profile/Profile';
import RentalSkeleton from '../util/RentalSkeleton';

import { connect } from 'react-redux';
import { getScreams, getRentals } from '../redux/actions/dataActions';

class home extends Component {

  componentDidMount() {
    this.props.getScreams();
    this.props.getRentals();
  }

  render() {
    
    // const { screams, loading } = this.props.data;
    // let recentScreamsMarkup = !loading ? (
    //   screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    // ) : (
    //   <ScreamSkeleton />
    // );
    const { rentalTransactions, loading } = this.props.data;
    let rentalTransactionsMarkup = !loading ? (
      rentalTransactions && rentalTransactions.map(rental => <Rental key={rental.rentalId} rental={rental} />)
    ) : (
      <RentalSkeleton />
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {rentalTransactionsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  getRentals: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getScreams, getRentals })(home);
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Redux
import { connect } from 'react-redux';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      rental: {
        firstName,
        lastName,
        createdAt,
        rentalId,
        pesel,
        email,
        telephone,
        vehicles,
        advancePayment,
        additionalPayment
      }
    } = this.props;

    const vehiclesMarkup = vehicles;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h5">
            <div>
              {firstName} {lastName}
            </div>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{vehiclesMarkup}</Typography>
          <Typography variant="body2" color="textSecondary">
            <span>
              <b>Pesel:</b> {pesel}
              <br />
            </span>
            <span>
              <b>Telephone:</b> {telephone}
              <br />
            </span>
            <span>
              <b>Email:</b> {email}
              <br />
            </span>
            <span>
              <b>Rental ID:</b> {rentalId}
              <br />
            </span>
            <span>
              <b>Advance Payment:</b> {advancePayment} PLN
              <br />
            </span>
            <span>
              <b>Additional Payment:</b> {additionalPayment} PLN
              <br />
            </span>
            <span>
              <b>Sum total:</b> {advancePayment + additionalPayment} PLN
              <br />
            </span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Scream.propTypes = {
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Scream));

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

// MUIIcons
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';

// Redux Stuff
import { connect } from 'react-redux';
import { getScream } from '../redux/actions/dataActions';

const styles = {};

class ScreamDialog extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
    // this.props.getScream(this.props.screamId);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle
      },
      UI: { loading }
    } = this.props;

    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand Scream"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            onClick={this.handleClose}
            tip="Close"
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
        </Dialog>
      </Fragment>
    );
  }
}

ScreamDialog.propTypes = {
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});

const mapActionsToProps = {
  getScream
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));

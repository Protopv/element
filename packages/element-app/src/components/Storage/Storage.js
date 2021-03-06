import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class Storage extends Component {
  state = {};

  async componentDidMount() {
    if (this.props.sidetree) {
      const info = await this.props.sidetree.storage.ipfs.version();
      this.setState({
        info,
      });
    }
  }

  render() {
    const { info } = this.state;

    return (
      <Paper
        className="Storage"
        style={{ padding: '8px', wordBreak: 'break-all' }}
      >
        <Typography variant={'h5'}>IPFS</Typography>
        {info === undefined ? (
          <Typography variant={'h6'}>Loading...</Typography>
        ) : (
          <div>
            <Typography>Version: {info.version}</Typography>
            <Typography>Repo: {info.repo}</Typography>
          </div>
        )}
      </Paper>
    );
  }
}

Storage.propTypes = {
  sidetree: PropTypes.any,
};

export default Storage;

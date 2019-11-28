import React from 'react';

export default class PanelContent extends React.Component {
  render() {
    return <div className="new-post-head">{this.props.children}</div>;
  }
}

// @flow
import React from 'react';
import placeholder from '../images/placeholder.png';

export type Props = {|
  size?: number,
  image?: string,
  alt?: string,
  rounded?: boolean,
  circle?: boolean,
  onClick?: (e: SyntheticEvent<>) => mixed,
|};

/**
 *
 * @example ./examples/Avatar.md
 */
export default class Avatar extends React.PureComponent<Props> {
  render() {
    const { size, image, alt, rounded, circle, className } = this.props;
    return (
      <React.Fragment>
        <img
          className={`${className} avatar mr-2`}
          onClick={this.props.onClick}
          src={image ? image : placeholder}
          alt={alt || ''}
        />
      </React.Fragment>
    );
  }
}

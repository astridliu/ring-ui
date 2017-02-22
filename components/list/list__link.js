import React, {PropTypes} from 'react';
import classnames from 'classnames';

import Link from '../link/link';

/**
 * @constructor
 * @extends {ReactComponent}
 */
export default function ListLink(props) {
  const {className, label, hover, description, rgItemType, scrolling, url, ...restProps} = props; // eslint-disable-line no-unused-vars

  const classes = classnames('ring-list__item', className);

  return (
    <Link
      pseudo={!restProps.href}
      {...restProps}
      className={classes}
    >
      {label}
    </Link>
  );
}

ListLink.propTypes = {
  ...Link.propTypes,
  hover: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  rgItemType: PropTypes.number,
  scrolling: PropTypes.bool,
  url: PropTypes.string
};

// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import PropTypes from 'prop-types'

import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';

import classnames from 'classnames';
import styles from './styles.module.css';

const BaseContainer = ({
                         children,
                         className,
                         hasShadow,
                         hasRoundedCorners,
                         overlay,
                         to,
                       }) => {

  return (
    <Link
      className={classnames(styles.root, {
        [styles.disabled]: to === undefined,
        [styles.hasShadow]: hasShadow,
        [styles.hasRoundedCorners]: hasRoundedCorners,
      })}
      to={to}
      target={isInternalUrl(to) ? '_self' : '_blank'}
    >
      <div className={classnames(styles.children, className)}>{children}</div>
      {overlay &&
      <div className={styles.overlay}>
        <p>{overlay}</p>
      </div>
      }
    </Link>
  );
};

BaseContainer.propTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  overlay: PropTypes.string,
  to: PropTypes.string,
};

BaseContainer.defaultProps = {
  hasRoundedCorners: true,
  hasShadow: true,
};

export default BaseContainer;

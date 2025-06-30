// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';

import isInternalUrl from '@docusaurus/isInternalUrl';
import DocusaurusLink from '@docusaurus/Link';

const Link = props => {
  return (
    <DocusaurusLink
      {...props}
      {...!isInternalUrl(props.href) && props.target == null ? {target: "__blank"} : {}}
    />
  );
};

export default Link;

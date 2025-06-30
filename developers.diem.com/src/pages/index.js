// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';

import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  return <Redirect to={useBaseUrl('/docs/welcome-to-diem/')} />;
}

export default Home;

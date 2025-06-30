// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import getCookie from './getCookie';

const areTrackingCookiesEnabled = () =>
  ExecutionEnvironment.canUseDOM
    ? getCookie(window.trackingCookieConsent) === 'true'
    : false;

export default areTrackingCookiesEnabled;

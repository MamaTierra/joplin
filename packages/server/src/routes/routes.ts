import { Routes } from '../utils/routeUtils';

import apiSessions from './api/sessions';
import apiPing from './api/ping';
import apiFiles from './api/files';
// import oauth2Authorize from './oauth2/authorize';
import indexLoginRoute from './index/login';
import indexLogoutRoute from './index/logout';
import indexHomeRoute from './index/home';
import defaultRoute from './default';

const routes: Routes = {
	'api/ping': apiPing,
	'api/sessions': apiSessions,
	'api/files': apiFiles,
	// 'oauth2/authorize': oauth2Authorize,
	'login': indexLoginRoute,
	'logout': indexLogoutRoute,
	'home': indexHomeRoute,
	'': defaultRoute,
};

export default routes;

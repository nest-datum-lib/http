import { fireListSet as actionBreadcrumbsListSet } from '@nest-datum-ui/components/Store/breadcrumbs/actions/list/set.js';

const setBreadcrumbs = () => {
	actionBreadcrumbsListSet('app', [{
		key: '/',
		text: '...',
	}, {
		key: 'mail',
		text: 'Mail',
	}, {
		key: '/mail/template',
		text: 'Templates',
	}])();
};

export default setBreadcrumbs;

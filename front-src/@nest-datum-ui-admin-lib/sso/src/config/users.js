import { createRouteContext } from '@nest-datum-ui/Context';
import { 
	actionDialogOpen,
	actionApiFormRestore, 
} from '@nest-datum-ui/Store';

const config = createRouteContext({
	displayInBreadcrumbsMenu: true,
	breadcrumbsMenuTitle: 'Users',

	displayInHeaderTabMenu: true,
	orderInHeaderTabMenu: 0,
	headerTabMenuTitle: 'Users',

	pageUrl: 'users',
	pageTitle: 'Users',

	list: {
		id: 'sso-users-list',
		storeName: 'sso-users-list',
		apiUrl: 'user',
		initialPage: 1,
		initialLimit: 20,
		bulkDeletion: true,
		search: true,
		withContextMenu: true,
		withFilter: true,

		manage: {
			drop: {
				text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Disable checked (${selectedForDrop.length})`,
				showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDrop.length > 0,
				onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('disable-many', { ids: selectedForDrop })(),
				order: 0,
				variant: 'contained',
				color: 'error',
			},
			dropPermanently: {
				text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Delete checked (${selectedForDropPermanently.length})`,
				showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
				onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('drop-many', { ids: selectedForDropPermanently })(),
				order: 1,
				variant: 'contained',
				color: 'error',
			},
			restore: {
				text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Restore (${selectedForDropPermanently.length})`,
				showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
				onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently, context) => actionApiFormRestore(context.storeName, { apiUrl: context.apiFullUrl, ids: selectedForDropPermanently })(),
				order: 2,
				variant: 'contained',
				color: 'primary',
			},
			create: {
				text: 'Create',
				to: 'users/0',
				order: 3,
				variant: 'contained',
				color: 'secondary',
			},
		},
		filters: {
			isDeleted: true,
			isNotDeleted: true,
		},
		rowColumns: [{
			name: 'ID',
			id: 'id',
			sortable: true,
			order: 0,
		}, {
			name: 'Main',
			id: 'main',
			order: 1,
		}, {
			name: 'Role',
			id: 'role',
			order: 2,
		}, {
			name: 'Status',
			id: 'status',
			order: 3,
		}, {
			name: 'Story',
			id: 'story',
			sortable: true,
			order: 4,
		}],
	},

	form: {
		displayInBreadcrumbsMenu: true,
		breadcrumbsMenuTitle: 'User',

		pageUrl: 'users/:id',
		pageTitle: 'User',

		id: 'sso-user-form',
		storeName: 'sso-user-form',
		apiUrl: 'user',

		manage: {
			create: {
				text: 'Save',
				order: 0,
			},
			dropOnRemovable: {
				text: 'Disable',
				order: 1,
			},
		},
	},

	options: {
		displayInBreadcrumbsMenu: true,
		breadcrumbsMenuTitle: 'Options',

		pageUrl: 'users/options',
		pageTitle: 'Options',

		fieldsBlock: true,
		fieldsBlockTitle: 'Options:',

		list: {
			id: 'sso-user-options-list',
			storeName: 'sso-user-options-list',
			apiUrl: 'user-option',
			initialPage: 1,
			initialLimit: 20,
			search: true,
			bulkDeletion: true,
			withContextMenu: true,
			withFilter: true,

			entity: 'userId', 
			entityRelation: 'userOptionId',
			entityOptionRelation: 'userUserOptionId',
			relation: 'userUserOptions', 
			relationContent: 'userUserUserOptions',
			listGetRelations: null,
			listGetFilters: { isDeleted: false },

			manage: {
				drop: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Disable checked (${selectedForDrop.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDrop.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('disable-many', { ids: selectedForDrop })(),
					order: 0,
					variant: 'contained',
					color: 'error',
				},
				dropPermanently: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Delete checked (${selectedForDropPermanently.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('drop-many', { ids: selectedForDropPermanently })(),
					order: 1,
					variant: 'contained',
					color: 'error',
				},
				restore: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Restore (${selectedForDropPermanently.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently, context) => actionApiFormRestore(context.storeName, { apiUrl: context.apiFullUrl, ids: selectedForDropPermanently })(),
					order: 2,
					variant: 'contained',
					color: 'primary',
				},
				create: {
					text: 'Create',
					to: 'users/options/0',
					order: 3,
					variant: 'contained',
					color: 'secondary',
				},
			},
			filters: {
				isDeleted: true,
				isNotDeleted: true,
			},

			rowColumns: [{
				name: 'ID',
				id: 'id',
				sortable: true,
				order: 0,
			}, {
				name: 'Main',
				id: 'main',
				order: 1,
			}, {
				name: 'Data type',
				id: 'dataType',
				order: 2,
			}, {
				name: 'Props',
				id: 'props',
				order: 3,
			}, {
				name: 'Story',
				id: 'story',
				sortable: true,
				order: 5,
			}],
		},

		form: {
			displayInBreadcrumbsMenu: true,
			breadcrumbsMenuTitle: 'Option',

			pageUrl: 'users/options/:id',
			pageTitle: 'Option',

			id: 'sso-user-options-form',
			storeName: 'sso-user-options-form',
			apiUrl: 'user-option',

			relations: {
				apiUrl: 'user/:id/options',
			},

			manage: {
				create: {
					text: 'Save',
					order: 0,
				},
				dropOnRemovable: {
					text: 'Disable',
					order: 1,
				},
			},
		},
	},

	statuses: {
		displayInBreadcrumbsMenu: true,
		breadcrumbsMenuTitle: 'Statuses',

		pageUrl: 'users/statuses',
		pageTitle: 'Options',

		list: {
			id: 'sso-user-statuses-list',
			storeName: 'sso-user-statuses-list',
			apiUrl: 'user-status',
			initialPage: 1,
			initialLimit: 20,
			bulkDeletion: true,
			search: true,
			withContextMenu: true,
			withFilter: true,

			manage: {
				drop: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Disable checked (${selectedForDrop.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDrop.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('disable-many', { ids: selectedForDrop })(),
					order: 0,
					variant: 'contained',
					color: 'error',
				},
				dropPermanently: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Delete checked (${selectedForDropPermanently.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently) => actionDialogOpen('drop-many', { ids: selectedForDropPermanently })(),
					order: 1,
					variant: 'contained',
					color: 'error',
				},
				restore: {
					text: (index, selected, selectedForDrop, selectedForDropPermanently) => `Restore (${selectedForDropPermanently.length})`,
					showStrategy: (selected, selectedForDrop, selectedForDropPermanently) => selectedForDropPermanently.length > 0,
					onClick: (e, index, selected, selectedForDrop, selectedForDropPermanently, context) => actionApiFormRestore(context.storeName, { apiUrl: context.apiFullUrl, ids: selectedForDropPermanently })(),
					order: 2,
					variant: 'contained',
					color: 'primary',
				},
				create: {
					text: 'Create',
					to: 'users/statuses/0',
					order: 3,
					variant: 'contained',
					color: 'secondary',
				},
			},
			filters: {
				isDeleted: true,
				isNotDeleted: true,
			},

			rowColumns: [{
				name: 'ID',
				id: 'id',
				sortable: true,
				order: 0,
			}, {
				name: 'Main',
				id: 'main',
				order: 1,
			}, {
				name: 'User',
				id: 'user',
				order: 2,
			}, {
				name: 'Story',
				id: 'story',
				sortable: true,
				order: 5,
			}],
		},

		form: {
			displayInBreadcrumbsMenu: true,
			breadcrumbsMenuTitle: 'Status',

			pageUrl: 'users/statuses/:id',
			pageTitle: 'Status',

			id: 'sso-user-statuses-form',
			storeName: 'sso-user-statuses-form',
			apiUrl: 'user-status',

			manage: {
				create: {
					text: 'Save',
					order: 0,
				},
				dropOnRemovable: {
					text: 'Disable',
					order: 1,
				},
			},
		},
	},
});

export default config;

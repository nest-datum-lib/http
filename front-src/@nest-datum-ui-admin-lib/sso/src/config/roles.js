import { strId as utilsCheckStrId } from '@nest-datum-utils/check';
import { 
	actionDialogOpen,
	actionApiFormRestore, 
} from '@nest-datum-ui/Store';
import Select from 'components/Select';

const config = {
	displayInBreadcrumbsMenu: true,
	breadcrumbsMenuTitle: 'Roles',

	displayInHeaderTabMenu: true,
	orderInHeaderTabMenu: 1,
	headerTabMenuTitle: 'Roles',

	pageUrl: 'roles',
	pageTitle: 'Roles',

	list: {
		id: 'sso-roles-list',
		storeName: 'sso-roles-list',
		apiUrl: 'role',
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
				to: 'roles/0',
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
			name: 'Status',
			id: 'status',
			order: 2,
		}, {
			name: 'User',
			id: 'user',
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
		breadcrumbsMenuTitle: 'Role',

		pageUrl: 'roles/:id',
		pageTitle: 'Role',

		id: 'sso-role-form',
		storeName: 'sso-role-form',
		apiUrl: 'role',

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

		pageUrl: 'roles/options',
		pageTitle: 'Options',

		fieldsBlock: true,
		fieldsBlockTitle: 'Options:',

		list: {
			id: 'sso-role-options-list',
			storeName: 'sso-role-options-list',
			apiUrl: 'role-option',
			initialPage: 1,
			initialLimit: 20,
			search: true,
			bulkDeletion: true,
			withContextMenu: true,
			withFilter: true,

			entity: 'roleId', 
			entityRelation: 'roleOptionId',
			entityOptionRelation: 'roleRoleOptionId',
			relation: 'roleRoleOptions', 
			relationContent: 'roleRoleRoleOptions',

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
					to: 'roles/options/0',
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

			pageUrl: 'roles/options/:id',
			pageTitle: 'Option',

			id: 'sso-role-options-form',
			storeName: 'sso-role-options-form',
			apiUrl: 'role-option',
			apiRelationUrl: 'role/option/:id',

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

			relations: {
				title: 'Related data',
				subtitle: 'Intermediate data between the main model and current option.',

				list: {
					id: 'sso-role-option-relations-list',
					storeName: 'sso-role-option-relations-list',
					columnName: 'roleId',
					apiMainModelUrl: `${process.env.URL_API_SSO}/role`,
					apiUrl: 'role/option',
					initialPage: 1,
					initialLimit: 20,
					bulkDeletion: true,
					withForceDropMenu: true,

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
							text: 'Add relation',
							order: 3,
							variant: 'contained',
							color: 'secondary',
							onClick: () => actionDialogOpen('relation')(),
						},
					},
					rowColumns: [{
						name: 'ID',
						id: 'id',
						order: 0,
					}, {
						name: 'Role',
						id: 'roleId',
						order: 1,
					}, {
						name: 'Story',
						id: 'story',
						order: 2,
					}],

					form: {
						id: 'sso-role-option-relations-form',
						storeName: 'sso-role-option-relations-form',
						apiUrl: 'role/:id/option',

						title: 'Role',

						post: {
							apiUrl: 'role/:id/options',
						},

						fields: [{
							Component: Select,
							storeName: 'sso-role-option-relations-form',
							apiUrl: 'role',
							name: 'roleId',
							itemKey: 'name',
							label: 'Select',
							required: true,
							filter: (index, storeName, entityId) => ({ custom: { disableForOption: entityId } }),
							check: [ utilsCheckStrId ]
						}],
					},
				},
			},
		},
	},

	statuses: {
		displayInBreadcrumbsMenu: true,
		breadcrumbsMenuTitle: 'Statuses',

		pageUrl: 'roles/statuses',
		pageTitle: 'Options',

		list: {
			id: 'sso-role-statuses-list',
			storeName: 'sso-role-statuses-list',
			apiUrl: 'role-status',
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
					to: 'roles/statuses/0',
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

			pageUrl: 'roles/statuses/:id',
			pageTitle: 'Status',

			id: 'sso-role-statuses-form',
			storeName: 'sso-role-statuses-form',
			apiUrl: 'role-status',

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
};

export default config;

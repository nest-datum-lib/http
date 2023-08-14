import { ModelAccessController } from '@nest-datum/model-access';

class Sample {
}

export function ModelHttpAccessController(Base: any = Sample) {
	class AbstractBase extends ModelAccessController(Base) {
		async checkRoleIdByAccessId(authedUser: object, accessId: string): Promise<boolean> {
			return !!(await this.service.accessRoleRepository.findOne({ 
				select: {
					id: true,
					accessId: true,
					roleId: true,
				},
				where: {
					accessId: `access-${this.service.repository.metadata.tableName}-${accessId}`,
					roleId: authedUser['roleId'],
				}, 
			}));
		}
	}

	return AbstractBase;
};

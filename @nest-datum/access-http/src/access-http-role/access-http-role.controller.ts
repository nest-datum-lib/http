import { ModelHttpController } from '@nest-datum/model-http';
import { ModelHttpTokenController } from '@nest-datum/model-http-token';
import { ModelHttpCreatorController } from '@nest-datum/model-http-creator';
import { ModelHttpDatesController } from '@nest-datum/model-http-dates';
import { AccessRoleController } from '@nest-datum/access';

export class AccessHttpRoleController extends AccessRoleController(ModelHttpDatesController(ModelHttpCreatorController(ModelHttpTokenController(ModelHttpController())))) {
}

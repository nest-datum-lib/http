import { ModelHttpController } from '@nest-datum/model-http';
import { ModelHttpTokenController } from '@nest-datum/model-http-token';
import { ModelHttpCreatorController } from '@nest-datum/model-http-creator';
import { ModelHttpDatesController } from '@nest-datum/model-http-dates';

export class AccessHttpRoleController extends ModelHttpDatesController(ModelHttpCreatorController(ModelHttpTokenController(ModelHttpController()))) {
}

import { ModelHttpController } from '@nest-datum/model-http';
import { ModelHttpTokenController } from '@nest-datum/model-http-token';
import { ModelHttpEnvController } from '@nest-datum/model-http-env';
import { ModelHttpNameController } from '@nest-datum/model-http-name';
import { ModelHttpDescriptionController } from '@nest-datum/model-http-description';
import { ModelHttpCreatorController } from '@nest-datum/model-http-creator';
import { ModelHttpRemovableController } from '@nest-datum/model-http-removable';
import { ModelHttpDatesController } from '@nest-datum/model-http-dates';
import { AccessController } from '@nest-datum/access';

export class AccessHttpController extends AccessController(ModelHttpDatesController(ModelHttpRemovableController(ModelHttpEnvController(ModelHttpCreatorController(ModelHttpDescriptionController(ModelHttpNameController(ModelHttpTokenController(ModelHttpController())))))))) {
}

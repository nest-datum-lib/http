import { ModelHttpController } from '@nest-datum/model-http';
import { ModelHttpTokenController } from '@nest-datum/model-http-token';
import { ModelHttpNameController } from '@nest-datum/model-http-name';
import { ModelHttpDescriptionController } from '@nest-datum/model-http-description';
import { ModelHttpCreatorController } from '@nest-datum/model-http-creator';
import { ModelHttpRemovableController } from '@nest-datum/model-http-removable';
import { ModelHttpDatesController } from '@nest-datum/model-http-dates';
import { AccessController } from '@nest-datum/access';

export class AccessHttpController extends AccessController(ModelHttpDatesController(ModelHttpRemovableController(ModelHttpCreatorController(ModelHttpDescriptionController(ModelHttpNameController(ModelHttpTokenController(ModelHttpController()))))))) {
}

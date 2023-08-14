import { ModelHttpController } from '@nest-datum/model-http';
import { ModelHttpTokenController } from '@nest-datum/model-http-token';
import { ModelHttpEnvController } from '@nest-datum/model-http-env';
import { ModelHttpNameController } from '@nest-datum/model-http-name';
import { ModelHttpDescriptionController } from '@nest-datum/model-http-description';
import { ModelHttpCreatorController } from '@nest-datum/model-http-creator';
import { ModelHttpDataTypeController } from '@nest-datum/model-http-data-type';
import { ModelHttpDataValueController } from '@nest-datum/model-http-data-value';
import { ModelHttpRemovableController } from '@nest-datum/model-http-removable';
import { ModelHttpDatesController } from '@nest-datum/model-http-dates';
import { ModelHttpAccessController } from '@nest-datum/model-http-access';
import { SettingController } from '@nest-datum/setting';

export class SettingHttpController extends SettingController(ModelHttpAccessController(ModelHttpDatesController(ModelHttpRemovableController(ModelHttpEnvController(ModelHttpDataTypeController(ModelHttpDataValueController(ModelHttpCreatorController(ModelHttpDescriptionController(ModelHttpNameController(ModelHttpTokenController(ModelHttpController()))))))))))) {
}

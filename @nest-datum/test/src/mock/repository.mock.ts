import { MockType, Mocker } from "@nest-datum/test/model"
import { jestMockWrapper } from "@nest-datum/test/utils";
import { Repository } from "typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";

const defaultRepositoryMockers = {
  findOne: jest.fn(entity => entity),
  find: jest.fn(entity => entity),
  findBy: jest.fn(entity => entity),
  findOneBy: jest.fn(entity => entity),
  findAndCount: jest.fn(entity => {
    return {entity, count: 1};
  }),
  getId: jest.fn(entity => entity.id),
  hasId: jest.fn(() => true),
  create: jest.fn(() => true),
  delete: jest.fn(() => true),
  remove: jest.fn(() => true),
  save: jest.fn(() => true),
  update: jest.fn((entity, new_entity) => new_entity),
  count: jest.fn(() => 1),
  metadata: {
    tableName: 'testTable',
  }
};

function repositoryMockFactory<EntityType extends EntityClassOrSchema>(
  customMockers: Record<string, Mocker> = {}
): MockType<Repository<EntityType>> {
  if (customMockers) {
    Object.keys(customMockers).forEach((funcName: string) => {
      customMockers[funcName] = jestMockWrapper(customMockers[funcName]);
    });
  }
  
  return jest.fn(
    () => ({
      ...defaultRepositoryMockers,
      ...customMockers,
    })
  )();
}

export default repositoryMockFactory;

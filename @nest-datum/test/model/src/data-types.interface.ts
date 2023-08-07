type StringValueParam = {
  type: 'string';
  config: {
    length: number;
    pattern: 'any' | string;
    withDigits: boolean;
    withSpecialChars: boolean;
    withCyrillic: boolean;
    onlyCyrillic: boolean;
  };
};

type NumberValueParam = {
  type: 'number';
  config: {
    length: number;
  };
};

type BooleanValueParam = {
  type: 'boolean';
};

type UUIDValueParam = {
  type: 'uuid';
};

type AutoValue = 
StringValueParam | 
NumberValueParam | 
BooleanValueParam |
UUIDValueParam;

type CustomValue = string | number | object | boolean;

type ValueParam = {
  type: 'custom' | 'auto';
  value: CustomValue | AutoValue,
};

export {
  AutoValue,
  CustomValue,
  ValueParam,
  StringValueParam,
  NumberValueParam,
  BooleanValueParam,
};

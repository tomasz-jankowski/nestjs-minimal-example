import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsPutDomainConstraint implements ValidatorConstraintInterface {
  validate(text: string) {
    const domain = text.split('@')[1];
    return (
      domain === 'put.poznan.pl' ||
      domain === 'student.put.poznan.pl' ||
      domain === 'doctorate.put.poznan.pl'
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `Adres "${args.value}" nie należy do domeny PUT!`;
  }
}

export function IsPutDomain() {
  return (object: { [key: string]: any }, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      validator: IsPutDomainConstraint,
    });
  };
}

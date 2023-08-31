import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";

const getConstraints = (nestedObjects) => {
  return nestedObjects.reduce((accumulator, currentValue) => {
    const { constraints } = currentValue;
    constraints && accumulator.push(...Object.values(constraints));
    if (currentValue.children) {
      const childrenContraints = getConstraints(currentValue.children);
      accumulator.push(...childrenContraints);
    }
    return accumulator;
  }, []);
};

export function RequestValidation(validationClass: any) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    descriptor.value = async function (...args: any) {
      try {
        await validateOrReject(plainToInstance(validationClass, args[0]), {
          validationError: {
            value: false,
            target: false,
          },
        });
      } catch (errors) {
        const constraints = getConstraints(errors);
        throw JSON.stringify({ code: 400, detail: constraints });
      }
      return method.apply(this, args);
    };
  };
}

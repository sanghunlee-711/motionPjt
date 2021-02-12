function Log(
  _: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const newDescriptor = {
    ...descriptor,
    value: function (...args: any[]): any {
      console.log(`Calling ${name} with arguments`);
      console.dir(args);
      const result = descriptor.value.apply(this, args);
      console.log(`Result:`);
      console.dir(result);
      return result;
    },
  };
  return newDescriptor;
}
//함수를 한단계 감싸서 우리가 필요한 log 를 찍어주는 역할을 한다.

class Calculator {
  @Log
  //Log 라는 어노테이션을 추가함으로서 Log라는 함수를 꾸며주거나 덮어주는 wrapperclass를 사용할 수 있음.
  add(x: number, y: number) {
    return x + y;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));

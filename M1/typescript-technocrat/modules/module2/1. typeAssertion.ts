{
//

  //type assertion
  let anything: any;
  anything = "I want to be a great developer";

  const arr = (anything as string).split(' ');
  console.log(arr);

  anything = 111.348254;
  const new_anything = (anything as number).toFixed(2);
  console.log(new_anything);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  }

  const result1 = kgToGm(2500) as number;
  console.log(result1);

  const result2 = kgToGm("3000") as string;
  console.log(result2);

  type CustomError = {
    message: string;
  }

  try {
    
  }
  catch (error) {
    console.log((error as CustomError).message)
  }

//
}
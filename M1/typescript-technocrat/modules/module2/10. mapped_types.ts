{
	//
	type AreaInNumber = {
		height: number;
		width: number;
  };
  
	// type AreaInString = {
	//   height: string;
	//   width: string;
  // }
  
	// getting the type of the key height // look up type
	type Height = AreaInNumber["height"];

	// converting keys of one type to another type
	type AreaInString<T> = {
		[key in keyof T]: T[key];
  };
  
  const area1: AreaInString<{ height: string;  width: number}> = {
    height: "1000",
    width: 50,
  }

	//
}

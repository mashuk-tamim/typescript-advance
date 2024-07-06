{
	// generic type

	// type GenericArray = Array<number>
	type GenericArray<T> = Array<T>;
	interface GenericArray2 {
		[index: number]: string;
	}
	const rollNumber1: number[] = [3, 6, 9];
	const rollNumber2: Array<number> = [3, 6, 9];
	const rollNumber3: GenericArray<number> = [3, 6, 9];

	const mentor1: string[] = ["Mashuk", "Tamim", "Babu"];
	const mentor2: Array<string> = ["Mashuk", "Tamim", "Babu"];
	const mentor3: GenericArray<string> = ["Mashuk", "Tamim", "Babu"];

	type Add<T> = (num1: T, num2: T) => T;

	const add1 = (x: number, y: number): number => x + y;
	const add2: Add<number> = (x, y) => x + y;
	// add(2, "3") //gives error
	add(2, 3);

	// array of object using generic
	const user: GenericArray<{ name: string; age: number }> = [
		{
			name: "Mashuk",
			age: 100,
		},
		{
			name: "Mashuk",
			// age: "110", // type error because string
			age: 110,
		},
	];

	// generic tuple
	const manush0: string[] = ["Husband", "Wife"];
	const manush1: [string, string] = ["Husband", "Wife"];
  const manush2: Array<string> = ["Husband", "Wife"];
  
  type GenericTuple<X, Y> = [X, Y];
  const manush3: GenericTuple<string, string> = ["Husband", "Wife"];

  const userWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'mashuk', email: "mashuk@khashuk.com"}]

	//
}

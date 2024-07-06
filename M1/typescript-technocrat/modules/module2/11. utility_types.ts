{
	// utility types

	// Pick
	type Person = {
		name: string;
		age: number;
		email?: string;
		contactNo: number;
	};

	type Name = Person["name"];
	type Age = Pick<Person, "age">;

	type NameAge = Pick<Person, "name" | "age">;

	// Omit
	type ContactInfo = Omit<Person, "name" | "age">;

	// Required
	type PersonRequired = Required<Person>;

	// Partial
	type PersonPartial = Partial<Person>;

	// ReadOnly
	type PersonReadonly = Readonly<Person>;

	const person1: Person = {
		name: "Mr Jinn",
		age: 505,
		contactNo: 1849456959,
	};

	// person1.name = "Pori"

	type MyObj0 = {
		a: string;
		b: string;
	};

	type MyObj = Record<string, string>;

	const myObj: MyObj = {
		a: "aa",
		b: "bb",
		c: "cc",
  };
  
  const emptyObj : Record<string, unknown> = {}

	//
}

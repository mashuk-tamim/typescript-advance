/*
What to use when:
array --> type alias
function --> type alias
object --> interface/type alias
*/
{
	//
	type User1 = {
		name: string;
		age: number;
	};
	interface User2 {
		name: string;
		religion: string;
	}
	type User3 = User1 & User2;

	//all the 3 way of extending works

	// interface Profession {
	// 	profession: string;
	// }
	// type User4 = User3 & Profession;
	// type User4 = User3 & { profession: string };

	interface User4 extends User3 {
		profession: string;
	}

	const user1: User1 = {
		name: "Mashuk",
		age: 27,
	};

	const user2: User2 = {
		name: "Tamim",
		religion: "Islam",
	};

	const user3: User3 = {
		name: "Mashuk Tamim",
		age: 27,
		religion: "Islam",
	};
	const user4: User4 = {
		name: "Mashuk Tamim",
		age: 27,
		religion: "Islam",
		profession: "Developer",
	};

	console.log(user1, user2, user3, user4);

	// object --> object, array --> object, function --> object

	type Roll1 = number[];
	interface Roll2 {
		[index: number]: number;
	}
	const rollNumber1: Roll1 = [1, 2, 3];
	const rollNumber2: Roll2 = [1, 2, 3];

	type Add1 = (num1: number, num2: number) => number;
	interface Add2 {
		(num1: number, num2: number): number;
	}

	const add: Add2 = (num1, num2) => num1 + num2;

	//
}

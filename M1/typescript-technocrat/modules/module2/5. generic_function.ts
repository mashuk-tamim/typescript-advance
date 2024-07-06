{
	//function with generics

	const createArray = (param: string): string[] => {
		return [param];
	};
	const createArrayWithGeneric = <T>(param: T): T[] => {
		return [param];
	};

	const res1 = createArray("dhaka");
	const res2 = createArrayWithGeneric<boolean>(true);

	interface User {
		id: number;
		name: string;
	}

	const res3 = createArrayWithGeneric<User>({
		id: 123,
		name: "mashuk",
	});

	console.log(res3);

	const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
		return [param1, param2];
	};

	const res4 = createArrayWithTuple("mashuk", "tamim");
	const res5 = createArrayWithTuple(1, { name: "mashuk" });

	const addCourseToStudent = <T>(student: T) => {
		const course = "Next Level Web Developer";

		return {
			...student,
			course,
		};
	};

	const student1 = addCourseToStudent({
		name: "Mashuk",
		email: "mashuk@khashuk.com",
		religion: "islam",
	});
	const student2 = addCourseToStudent({
		name: "tamim",
		email: "tamim@hamim.com",
		hometown: "gopalganj",
	});

	//
}

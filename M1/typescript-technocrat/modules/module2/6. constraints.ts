{
	const addCourseToStudent = <
		T extends { id: number; name: string; email: string }
	>(
		student: T
	) => {
		const course = "Next Level Web Developer";

		return {
			...student,
			course,
		};
	};

	const student1 = addCourseToStudent({
		id: 1,
		name: "Mashuk",
		email: "mashuk@khashuk.com",
		religion: "islam",
	});
	const student2 = addCourseToStudent({
		id: 2,
		name: "tamim",
		email: "tamim@hamim.com",
		hometown: "gopalganj",
  });
  
  const student3 = addCourseToStudent({
		id: 3,
		name: "babu",
		email: "babu@kabu.com",
		emni: "emni",
	});
}

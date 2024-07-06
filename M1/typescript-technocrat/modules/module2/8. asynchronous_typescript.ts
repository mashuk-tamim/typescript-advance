{
  // promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: Todo = await response.json();
    console.log(data);
    return data
  }

  getTodo();
  
  //simulate
	const createPromise = () => {
		return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      }
      else {
        reject("failed to load data");
      }
		});
  };
  
  //calling create promise function
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
    return data
  }
  showData();

	//
}

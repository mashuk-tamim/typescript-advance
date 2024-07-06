type UserTypes = {
  name: {
		firstName: string;
		middleName?: string; // optional type
		lastName: string;
	};
	isMarried: boolean;
	religion: "Islam";
}
const user: UserTypes = {
  name: {
    firstName: "Mashuk",
    lastName: "Tamim",
  },
	isMarried: false,
	religion: "Islam",
};

const { religion, name: { middleName:midName } } = user;

function add(num1: number, num2: number): number {
	return num1 + num2;
}
add(2, 3);
console.log(add);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser: {
	name: string;
	balance: number;
	addBalance: (balance: number) => string;
} = {
	name: "Mashuk",
	balance: 0,
	addBalance(balance) {
		return `My new balance is ${this.balance + balance}`;
	},
};

const arr: number[] = [1, 2, 3, 4];
const newArr = arr.map((num) => num * num);

arr.push(...newArr);

const greetings = (...friends: string[]) => {
	friends.forEach((friend) => `Hi friend, ${friend}`);
};

greetings("Ataure", "Nayem", "Nibir");

const friends: string[] = ["Nayem", "Nibir", "Ataure", "Shanto", "Rashed"];
const [, , BestFriend, ...rest] = friends;

console.log(BestFriend, rest);

//nullable operator

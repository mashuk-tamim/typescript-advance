interface Developer<T, X= null> {
	name: string;
	computer: {
		brand: string;
		model: string;
		releaseYear: number;
	};
  smartWatch: T;
  bike?: X
}

interface Watch {
	brand: string;
	model: string;
	display?: string;
	heartTracking?: boolean;
	sleepMonitoring?: boolean;
}

type EmilabWatch = {
	brand: string;
	model: string;
	display: string;
};

interface AppleWatch {
  brand: string;
  model: string;
  heartTracking: boolean;
  sleepMonitoring: boolean;
}

const poorDeveloper: Developer<Watch> = {
	name: "Mashuk",
	computer: {
		brand: "HP",
		model: "Pavilion",
		releaseYear: 2023,
	},
	smartWatch: {
		brand: "Emilab",
		model: "kw66",
		display: "OLED",
	},
};


const richDeveloper: Developer<Watch, string> = {
	name: "Mashuk",
	computer: {
		brand: "HP",
		model: "Pavilion",
		releaseYear: 2023,
	},
	smartWatch: {
		brand: "Apple",
		model: "watch 2 pro",
		heartTracking: true,
		sleepMonitoring: true,
  },
  bike: "Royal Enfield"
};

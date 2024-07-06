{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }
  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle // using keyof

  const person1: Owner = "car"
  const person2: Owner2 = "ship"

  const user = {
    name: "mashuk",
    age: 26,
    address: 'gpg'
  }

  // user.name --> mashuk
  // user["name"] --> mashuk

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  }

  const result1 = getPropertyValue(user, "name")



  //
}
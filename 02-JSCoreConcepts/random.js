const getRandomNumber = () => Math.floor(Math.random() * (20 - 5 + 1)) + 5;
const randomNumbers = () => {
  let numbers =[]
    for(let i = 0; i< 10; i++){
      numbers.push(getRandomNumber()) 
    }
    

    return numbers;
}
const displayRandomNumbers = () => console.log(randomNumbers());

displayRandomNumbers();
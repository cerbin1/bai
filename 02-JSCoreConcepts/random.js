const random = () => Math.floor(Math.random() * (20 - 5 + 1)) + 5;
const arr = () => {
  let arr =[]
    for(let i = 0; i< 10; i++){
       arr.push(random()) 
    }
    

    return arr;
}
const display = () => console.log(arr());

display();
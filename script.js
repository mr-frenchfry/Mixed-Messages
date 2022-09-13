let typeOfTraining = ['Crossfit','Powerlifting','for a Marathon'];
let daysOfTraining = [30,60,90];
let outcomeOfTraining=['Faster','Stronger','Happier'];


const randomGenerator = arr =>{
    let i = Math.floor(Math.random() * arr.length)
    return arr[i] 
};

const trainingGenerator = () =>{
    document.getElementById("trainingGenerator").innerHTML = 11;
    let typeOfTraining1 = randomGenerator(typeOfTraining);
    let daysOfTraining1 = randomGenerator(daysOfTraining);
    let outcomeOfTraining1 = randomGenerator(outcomeOfTraining);
    let output = `This is a Fitness Random Generator!\nYou will train ${typeOfTraining1}. \nYou will train for ${daysOfTraining1} days.\nYou will feel ${outcomeOfTraining1}!`;
    document.getElementById("trainingGenerator").innerHTML = output;
    return output;
   
}

console.log(trainingGenerator());
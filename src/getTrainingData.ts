import generateTraingingData from "./utils/generateTrainingData";
import * as fs from 'fs';


console.log("Training data generating please wait...");
const trainingData = generateTraingingData(2000);
trainingData.map((data, index) => {
  return fs.writeFileSync(`data/training_data/parking_${index}.json`, JSON.stringify(data))
})
console.log("Training data generated");
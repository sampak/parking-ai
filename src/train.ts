import * as brain from 'brain.js';
import * as fs from 'fs';

(async () => {
    console.log("Train started...")
    const net = new brain.NeuralNetwork({
        hiddenLayers: [20, 20],
        log: true,
        
        // errorThresh: 0.05,
    });

    const files = await fs.readdirSync('data/training_data');

    const trainingsData = [];

    for (let i = 0; i <= files.length - 1; i++) {
        const trainingData: any = JSON.parse(await fs.readFileSync(`data/training_data/${files[i]}`).toString());
        trainingsData.push(...trainingData);
    }

    net.train(trainingsData, {
        iterations: 10000
    })

    const networkState = net.toJSON();
    fs.writeFileSync("data/network_state.json", JSON.stringify(networkState), "utf-8");
    console.log("Train compleded");
})()    
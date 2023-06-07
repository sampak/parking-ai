import * as brain from 'brain.js';
import * as fs from 'fs';
import generateTraingingData, { IParking } from './utils/generateTrainingData';

  const net = new brain.NeuralNetwork({
    hiddenLayers: [20, 20]
  });
  



const searchNearParking = async (net: any, parkingData: any, typeOfVehicle: number) => {
    let najblizszeMiejsce;
    let najmniejszaOdleglosc = 0;
    parkingData = parkingData.filter((parking: IParking) => parking.type === typeOfVehicle)
    console.log(parkingData)
    for (let i = 0; i <= parkingData.length - 1; i++) {
      const result = net.run({ slot: parkingData[i].slot, type: parkingData[i].type, isFree: parkingData[i].isFree });
        if (result.near > najmniejszaOdleglosc) {
          najmniejszaOdleglosc = result.near;
          najblizszeMiejsce = parkingData[i];
        }
    }
    return najblizszeMiejsce;
}
  
  
(async () => {

    const networkState: any = JSON.parse(await fs.readFileSync('data/network_state.json').toString());

    await net.fromJSON(networkState);

    


    const parkingData = [
        { slot: 1, type: 2, isFree: 1 }, 
        { slot: 2, type: 1, isFree: 0 },
        { slot: 3, type: 2, isFree: 0 },
        { slot: 4, type: 2, isFree: 0 },
        { slot: 5, type: 2, isFree: 0 },
        { slot: 6, type: 2, isFree: 1 },
        { slot: 7, type: 1, isFree: 1 },
        { slot: 8, type: 2, isFree: 1 },
        { slot: 9, type: 1, isFree: 1 },
        { slot: 10, type: 1, isFree: 1 },
        { slot: 11, type: 2, isFree: 1 },
        { slot: 12, type: 2, isFree: 1 },
        { slot: 13, type: 2, isFree: 1 },
        { slot: 14, type: 2, isFree: 1 },
        { slot: 15, type: 2, isFree: 1 },
        { slot: 16, type: 2, isFree: 1 },
        { slot: 17, type: 2, isFree: 1 },
        { slot: 18, type: 2, isFree: 1 },
        { slot: 19, type: 2, isFree: 1 },
    ]
    
    const result = await searchNearParking(net, parkingData, 2)
    console.log(result);
        
        
})()
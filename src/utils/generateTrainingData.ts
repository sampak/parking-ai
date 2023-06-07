
// const generateTraingingData = (liczbaMiejsc: number, typeOf: number) => {
//   const trainingData = [];

//   for (let i = 1; i <= liczbaMiejsc; i++) {
//     for (let j = 1; j <= typeOf; j++) {
//       const input = { miejsce: i, typ: j, free: Math.random() < 0.5 ? 0 : 1 };

//       let canBe = 1;

//       if(!input.free) {
//         canBe = 0;
//       }


//       const output = { blisko: !canBe ? 0 : Math.random() < 0.5 ? 0 : 1 }; // Oznaczenie bliskości jako 0 lub 1
//       trainingData.push({ input, output });
//     }
//   }

//   return trainingData;
// }

export interface IParking {
  slot: number;
  type: number;
  isFree: number
}

export interface IParkingData {
  input: IParking;
  output: { near: number }
}


const generateParking = (slots: number) => {
  const parkingData: IParkingData[] = [];
  for (let i = 0; i <= slots; i++) {

    const slot = i + 1;
    const isFree =  Math.floor(Math.random() * (1 - 0 + 1) + 0);
    const type = Math.floor(Math.random() * (2 - 1 + 1) + 1);

    const near = !!parkingData.find(parking => parking.input.isFree && type === parking.input.type)

    const input = {slot: slot, type: type, isFree: isFree };
    const output = { near: Number(!near && isFree) }
    parkingData.push({ input, output })
  }

  return parkingData
}

const generateTraingingData = (numberOfParkings: number) => {
  const parkings = [];

  for (let i = 0; i <= numberOfParkings; i++) {
    const slots = Math.floor(Math.random() * (30 - 10 + 1) + 10);
    const parking = generateParking(slots);

    console.log(parking.filter(park => park.output.near))
    parkings.push(parking);
  }

  return parkings;
}

export default generateTraingingData
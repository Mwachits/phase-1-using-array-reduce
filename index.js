const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
    return accumulator + currentBatch;
  }, 0);
  
  // Log the total number of batteries
  console.log("Total batteries assembled:", totalBatteries);
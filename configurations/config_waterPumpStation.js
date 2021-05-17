let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:waterPumpStation_100";
place.type = "kr.waterdna.waterPumpStation:1.0";
place.name = "세종시_취수장_100";
place.coordinates = [127.292878, 36.536893];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_011"];
sensorsArray[count].name = ["세종시_유량계_011"];
sensorsArray[count++].coordinates = [[127.292878, 36.536893]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowPredicted:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterFlowPredicted_071";
sensorsArray[count++].coordinates = [127.290572, 36.538064];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterPump:1.0";
sensorsArray[count].amount = 2;
sensorsArray[count].id = ["urn:waterdna:waterPump_021","urn:waterdna:waterPump_022"];
sensorsArray[count].name = ["세종시_6-4지구_펌프_021", "세종시_6-4지구_펌프_022"];
sensorsArray[count++].coordinates = [[127.293884, 36.536602], [127.292554, 36.537567]];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
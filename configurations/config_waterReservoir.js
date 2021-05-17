let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:waterReservoir_120";
place.type = "kr.waterdna.waterReservoir:1.0";
place.name = "세종시_배수지_120";
place.coordinates = [127.257541, 36.541469];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 2;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_013", "urn:waterdna:waterFlowMeter_014"];
sensorsArray[count].name = ["세종시_유량계_013", "세종시_유량계_014"];
sensorsArray[count++].coordinates = [[127.2897071,36.5493669],[127.28894,36.5478436]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterLevelMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterLevelMeter_002";
sensorsArray[count].name = "세종시_수위계_002";
sensorsArray[count++].coordinates = [127.291622, 36.548549];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowPredicted:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterFlowPredicted_073";
sensorsArray[count].name = "세종시_유량예측_073";
sensorsArray[count++].coordinates = [127.2873815,36.5509798];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:waterPipePredicted_160";
place.type = "kr.waterdna.waterPipePredicted:1.0";
place.pipeType = "waterSupply";
place.name = "예측_세종시_상수관_파이프_160";
place.coordinates = [127.266265, 36.527550];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_017"];
sensorsArray[count].name = ["세종시_유량계_017"];
sensorsArray[count++].coordinates = [[127.266265, 36.527550]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.hydroMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:hydroMeter_032";
sensorsArray[count].name = "세종시_유속계_032";
sensorsArray[count++].coordinates = [127.266265, 36.527550];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterPressureMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterPressureMeter_042";
sensorsArray[count].name = "세종시_수압계_042";
sensorsArray[count++].coordinates = [127.266265, 36.527550];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
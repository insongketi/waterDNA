let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:waterPipe_150";
place.type = "kr.waterdna.waterPipe:1.0";
place.pipeType = "waterSupply"
place.name = "세종시_상수관_파이프_150";
place.coordinates = [127.264639, 36.526186];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_016"];
sensorsArray[count].name = ["세종시_유량계_016"];
sensorsArray[count++].coordinates = [[127.264639, 36.526186]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.hydroMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:hydroMeter_031";
sensorsArray[count].name = "세종시_유속계_031";
sensorsArray[count++].coordinates = [127.264639, 36.526186];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterPressureMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterPressureMeter_041";
sensorsArray[count].name = "세종시_수압계_041";
sensorsArray[count++].coordinates = [127.264639, 36.526186];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
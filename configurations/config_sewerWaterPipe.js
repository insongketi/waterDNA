let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:sewerWaterPipe_170";
place.type = "kr.waterdna.waterPipe:1.0";
place.pipeType = "sewer"
place.name = "세종시_하수관_파이프_170";
place.coordinates = [127.263986, 36.526997];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_018"];
sensorsArray[count].name = ["세종시_유량계_018"];
sensorsArray[count++].coordinates = [[127.263986, 36.526997]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.hydroMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:hydroMeter_033";
sensorsArray[count].name = "세종시_유속계_033";
sensorsArray[count++].coordinates = [127.263986, 36.526997];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterLevelMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterLevelMeter_004";
sensorsArray[count].name = "세종시_수위계_004";
sensorsArray[count++].coordinates = [127.263986, 36.526997];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:sewerWaterPipePredicted_180";
place.type = "kr.waterdna.waterPipePredicted:1.0";
place.pipeType = "sewer";
place.name = "예측_세종시_하수관_파이프_180";
place.coordinates = [127.266265, 36.527550];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_019"];
sensorsArray[count].name = ["세종시_유량계_019"];
sensorsArray[count++].coordinates = [[127.268307, 36.529782]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.hydroMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:hydroMeter_034";
sensorsArray[count].name = "세종시_유속계_034";
sensorsArray[count++].coordinates = [127.268307, 36.529782];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterLevelMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterLevelMeter_005";
sensorsArray[count].name = "세종시_수위계_005";
sensorsArray[count++].coordinates = [127.268307, 36.529782];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
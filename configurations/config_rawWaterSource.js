let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:rawWaterSource_Daechung";
place.type = "kr.waterdna.rawWaterSource:1.0";
place.name = "대청댐";
place.coordinates = [127.480755, 36.477578];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterLevelMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterLevelMeter_001";
sensorsArray[count].name = "세종시_수위계_001";
sensorsArray[count++].coordinates = [127.480755, 36.477578];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:River_140";
place.type = "kr.waterdna.River:1.0";
place.name = "미호천";
place.coordinates = [127.298090, 36.542601];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterLevelMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:WaterLevelMeter_003";
sensorsArray[count].name = "세종시_수위계_003";
sensorsArray[count++].coordinates = [127.298090, 36.542601];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterQualitySensor:1.1";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:WaterQualitySensor_021";
sensorsArray[count].name = "세종시_수질센서_021";
sensorsArray[count++].coordinates = [127.298090, 36.542601];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
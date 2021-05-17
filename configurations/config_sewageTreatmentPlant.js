let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:sewageTreatmentPlant_130";
place.type = "kr.waterdna.sewageTreatmentPlant:1.0";
place.name = "세종시_하수처리장_130";
place.coordinates = [127.291622, 36.548549];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_015"];
sensorsArray[count].name = ["세종시_유량계_015"];
sensorsArray[count++].coordinates = [[127.291622, 36.548549]];


sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterProcess:1.0";
sensorsArray[count].amount = 5;
sensorsArray[count].id = ["urn:waterdna:waterProcess_056","urn:waterdna:waterProcess_057","urn:waterdna:waterProcess_058","urn:waterdna:waterProcess_059","urn:waterdna:waterProcess_060"];
sensorsArray[count].name = ["세종시_하수처리장_056", "세종시_하수처리장_057", "세종시_하수처리장_058", "세종시_하수처리장_059", "세종시_하수처리장_060"];
sensorsArray[count].waterProcessType = ["착수정", "응집혼화지", "침전지", "여과지", "AOP"];
sensorsArray[count++].coordinates = [[127.291622, 36.548549], [127.291622, 36.548549], [127.291622, 36.548549], [127.291622, 36.548549], [127.291622, 36.548549]];



conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
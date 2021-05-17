let conf ={};
let place={};
let sensorsArray=[];

conf.server_ip = '172.20.0.207';
conf.server_port = '8081';
conf.server_path = 'entityOperations/upsert';

// rawWaterSource, waterPumpStation, waterPurificationPlant, waterReservoir, river, waterPipeObserved, waterPipeSimulated

place.id = "urn:waterdna:waterPurificationPlant_110";
place.type = "kr.waterdna.waterPurificationPlant:1.0";
place.name = "세종시_정수장_110";
//6-4생활권_정수장_110
place.coordinates = [127.287000, 36.457251];

let count = 0;
sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowMeter:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = ["urn:waterdna:waterFlowMeter_012"];
sensorsArray[count].name = ["세종시_유량계_012"];
sensorsArray[count++].coordinates = [[127.287246, 36.458518]];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterFlowPredicted:1.0";
sensorsArray[count].amount = 1;
sensorsArray[count].id = "urn:waterdna:waterFlowPredicted_072";
sensorsArray[count++].coordinates = [127.288565, 36.457474];

sensorsArray[count] ={};
sensorsArray[count].type = "kr.waterdna.waterProcess:1.0";
sensorsArray[count].amount = 5;
sensorsArray[count].id = ["urn:waterdna:waterProcess_051","urn:waterdna:waterProcess_052","urn:waterdna:waterProcess_053","urn:waterdna:waterProcess_054","urn:waterdna:waterProcess_055"];
sensorsArray[count].name = ["세종시_하수처리장_051", "세종시_하수처리장_052", "세종시_하수처리장_053", "세종시_하수처리장_054", "세종시_하수처리장_055"];
sensorsArray[count].waterProcessType = ["착수정", "응집혼화지", "침전지", "여과지", "AOP"];
sensorsArray[count++].coordinates = [[127.287000, 36.457251], [127.287000, 36.457251], [127.287000, 36.457251], [127.287000, 36.457251], [127.287000, 36.457251]];

conf.place = place;
conf.sensorsArray = sensorsArray;

module.exports = conf;
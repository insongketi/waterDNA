const schedule = require('node-schedule');
const placeBuilding = require('./functions/placeBuilder.js');
const deviceBuilding = require('./functions/deviceBuilder.js');

const dateFormat = require('dateformat');
const fs = require('fs');

//let event = schedule.scheduleJob("00,10,20,30,40,50 * * * *", function () {
//global.conf = require('./configurations/config_rawWaterSource.js');
//global.conf = require('./configurations/config_sewageTreatmentPlant.js');
//global.conf = require('./configurations/config_waterReservoir.js');
global.conf = require('./configurations/config_waterPurificationPlant.js');
//global.conf = require('./configurations/config_waterPumpStation.js');
//global.conf = require('./configurations/config_river.js');
//global.conf = require('./configurations/config_supplyWaterPipe.js');
//global.conf = require('./configurations/config_supplyWaterPipePredicted.js');
//global.conf = require('./configurations/config_sewerWaterPipe.js');
//global.conf = require('./configurations/config_sewerWaterPipePredicted.js');

let now = new Date();
let currentTime = dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss") + ',000+09:00'



// select the place data model
    switch (conf.place.type) {
        case "kr.waterdna.rawWaterSource:1.0" :
            placeBuilding.rawWaterSource(currentTime);
            break;

        case "kr.waterdna.waterPumpStation:1.0" :
            placeBuilding.waterPumpStation(currentTime);
            break;

        case "kr.waterdna.waterPurificationPlant:1.0" :
            placeBuilding.waterPurificationPlant(currentTime);
            
            break;

        case "kr.waterdna.waterReservoir:1.0" :
            placeBuilding.waterReservoir(currentTime);
            break;

        case "kr.waterdna.sewageTreatmentPlant:1.0" :
            placeBuilding.sewageTreatmentPlant(currentTime);
            break;

        case "kr.waterdna.river:1.0" :
            placeBuilding.river(currentTime);
            break;

        case "kr.waterdna.waterPipe:1.0" :
            placeBuilding.waterPipe(currentTime);
            break;

        case "kr.waterdna.waterPipePredicted:1.0" :
            placeBuilding.waterPipePredicted(currentTime);
            break;
    }

    for (i = 0; i < conf.sensorsArray.length; i++) {
        switch (conf.sensorsArray[i].type) {
            case "kr.waterdna.waterFlowMeter:1.0":
                deviceBuilding.waterFlowMeter(i, currentTime);
                break;

            case "kr.waterdna.waterPump:1.0":
                deviceBuilding.waterPump(i, currentTime);
                break;

            case "kr.waterdna.waterProcess:1.0":
                deviceBuilding.waterProcess(i, currentTime);
                break;

            case "kr.waterdna.waterLevelMeter:1.0":
                deviceBuilding.waterLevelMeter(i, currentTime);
                break;

            case "kr.waterdna.waterFlowPredicted:1.0":
                deviceBuilding.waterFlowPredicted(i, currentTime);
                break;

            case "kr.waterdna.waterQualitySensor:1.1":
                deviceBuilding.waterQualitySensor(i, currentTime);
                break;

            case "kr.waterdna.waterPressureMeter:1.0":
                deviceBuilding.waterPressureMeter(i, currentTime);
                break;

            case "kr.waterdna.hydroMeter:1.0":
                deviceBuilding.hydroMeter(i, currentTime);
                break;
        }
    }

//});

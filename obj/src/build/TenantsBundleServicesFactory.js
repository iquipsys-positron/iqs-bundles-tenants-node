"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_logging_node_1 = require("pip-services-logging-node");
const pip_services_perfmon_node_1 = require("pip-services-perfmon-node");
const pip_services_statistics_node_1 = require("pip-services-statistics-node");
const iqs_services_currobjectstates_node_1 = require("iqs-services-currobjectstates-node");
const iqs_services_currdevicestates_node_1 = require("iqs-services-currdevicestates-node");
const iqs_services_rosters_node_1 = require("iqs-services-rosters-node");
const iqs_services_corrections_node_1 = require("iqs-services-corrections-node");
const iqs_services_eventgeneration_node_1 = require("iqs-services-eventgeneration-node");
const pip_services_routeanalysis_node_1 = require("pip-services-routeanalysis-node");
const iqs_services_stateupdates_node_1 = require("iqs-services-stateupdates-node");
const iqs_services_opevents_node_1 = require("iqs-services-opevents-node");
const iqs_services_incidents_node_1 = require("iqs-services-incidents-node");
const pip_services_transducerdata_node_1 = require("pip-services-transducerdata-node");
const pip_services_positions_node_1 = require("pip-services-positions-node");
const iqs_services_objectstates_node_1 = require("iqs-services-objectstates-node");
const pip_services_routes_node_1 = require("pip-services-routes-node");
const iqs_services_attendance_node_1 = require("iqs-services-attendance-node");
const pip_services_statistics_node_2 = require("pip-services-statistics-node");
class TenantsBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_logging_node_1.LoggingServiceFactory);
        this.add(new pip_services_perfmon_node_1.PerfMonServiceFactory);
        this.add(new pip_services_statistics_node_1.StatisticsServiceFactory);
        this.add(new pip_services_statistics_node_1.StatisticsServiceFactory);
        this.add(new iqs_services_currobjectstates_node_1.CurrentObjectStatesServiceFactory);
        this.add(new iqs_services_currdevicestates_node_1.CurrentDeviceStatesServiceFactory);
        this.add(new iqs_services_incidents_node_1.IncidentsServiceFactory);
        this.add(new iqs_services_rosters_node_1.RostersServiceFactory);
        this.add(new iqs_services_corrections_node_1.CorrectionsServiceFactory);
        this.add(new iqs_services_eventgeneration_node_1.EventGenerationServiceFactory);
        this.add(new pip_services_routeanalysis_node_1.RouteAnalysisServiceFactory);
        this.add(new iqs_services_stateupdates_node_1.StateUpdatesServiceFactory);
        this.add(new iqs_services_opevents_node_1.OperationalEventsServiceFactory);
        this.add(new pip_services_transducerdata_node_1.TransducerDataServiceFactory);
        this.add(new pip_services_positions_node_1.PositionsServiceFactory);
        this.add(new iqs_services_objectstates_node_1.ObjectStatesServiceFactory);
        this.add(new pip_services_routes_node_1.RoutesServiceFactory);
        this.add(new iqs_services_attendance_node_1.AttendanceServiceFactory);
        this.add(new pip_services_statistics_node_2.StatisticsServiceFactory);
    }
}
exports.TenantsBundleServicesFactory = TenantsBundleServicesFactory;
//# sourceMappingURL=TenantsBundleServicesFactory.js.map
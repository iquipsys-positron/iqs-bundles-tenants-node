"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_logging_node_1 = require("pip-clients-logging-node");
const pip_clients_perfmon_node_1 = require("pip-clients-perfmon-node");
const pip_clients_statistics_node_1 = require("pip-clients-statistics-node");
const iqs_clients_currobjectstates_node_1 = require("iqs-clients-currobjectstates-node");
const iqs_clients_currdevicestates_node_1 = require("iqs-clients-currdevicestates-node");
const iqs_clients_rosters_node_1 = require("iqs-clients-rosters-node");
const iqs_clients_corrections_node_1 = require("iqs-clients-corrections-node");
const iqs_clients_eventgeneration_node_1 = require("iqs-clients-eventgeneration-node");
const pip_clients_routeanalysis_node_1 = require("pip-clients-routeanalysis-node");
const iqs_clients_stateupdates_node_1 = require("iqs-clients-stateupdates-node");
const iqs_clients_opevents_node_1 = require("iqs-clients-opevents-node");
const iqs_clients_incidents_node_1 = require("iqs-clients-incidents-node");
const pip_clients_transducerdata_node_1 = require("pip-clients-transducerdata-node");
const pip_clients_positions_node_1 = require("pip-clients-positions-node");
const iqs_clients_objectstates_node_1 = require("iqs-clients-objectstates-node");
const pip_clients_routes_node_1 = require("pip-clients-routes-node");
const iqs_clients_attendance_node_1 = require("iqs-clients-attendance-node");
const iqs_clients_statistics_node_1 = require("iqs-clients-statistics-node");
class TenantsBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_logging_node_1.LoggingClientFactory);
        this.add(new pip_clients_perfmon_node_1.PerfMonClientFactory);
        this.add(new pip_clients_statistics_node_1.StatisticsClientFactory);
        this.add(new iqs_clients_currobjectstates_node_1.CurrentObjectStatesClientFactory);
        this.add(new iqs_clients_currdevicestates_node_1.CurrentDeviceStatesClientFactory);
        this.add(new iqs_clients_incidents_node_1.IncidentsClientFactory);
        this.add(new iqs_clients_rosters_node_1.RostersClientFactory);
        this.add(new iqs_clients_corrections_node_1.CorrectionsClientFactory);
        this.add(new iqs_clients_eventgeneration_node_1.EventGenerationClientFactory);
        this.add(new pip_clients_routeanalysis_node_1.RouteAnalysisClientFactory);
        this.add(new iqs_clients_stateupdates_node_1.StateUpdatesClientFactory);
        this.add(new iqs_clients_opevents_node_1.OperationalEventsClientFactory);
        this.add(new pip_clients_transducerdata_node_1.TransducerDataClientFactory);
        this.add(new pip_clients_positions_node_1.PositionsClientFactory);
        this.add(new iqs_clients_objectstates_node_1.ObjectStatesClientFactory);
        this.add(new pip_clients_routes_node_1.RoutesClientFactory);
        this.add(new iqs_clients_attendance_node_1.AttendanceClientFactory);
        this.add(new iqs_clients_statistics_node_1.StatisticsClientFactory);
    }
}
exports.TenantsBundleClientsFactory = TenantsBundleClientsFactory;
//# sourceMappingURL=TenantsBundleClientsFactory.js.map
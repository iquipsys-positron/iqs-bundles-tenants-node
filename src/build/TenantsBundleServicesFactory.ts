import { DefaultContainerFactory } from 'pip-services3-container-node';

import { LoggingServiceFactory } from 'pip-services-logging-node';
import { PerfMonServiceFactory } from 'pip-services-perfmon-node';
import { StatisticsServiceFactory } from 'pip-services-statistics-node';

import { CurrentObjectStatesServiceFactory } from 'iqs-services-currobjectstates-node';
import { CurrentDeviceStatesServiceFactory } from 'iqs-services-currdevicestates-node';
import { RostersServiceFactory } from 'iqs-services-rosters-node';
import { CorrectionsServiceFactory } from 'iqs-services-corrections-node';
import { EventGenerationServiceFactory } from 'iqs-services-eventgeneration-node';
import { RouteAnalysisServiceFactory } from 'pip-services-routeanalysis-node';
import { StateUpdatesServiceFactory } from 'iqs-services-stateupdates-node';

import { OperationalEventsServiceFactory } from 'iqs-services-opevents-node';
import { IncidentsServiceFactory } from 'iqs-services-incidents-node';
import { TransducerDataServiceFactory } from 'pip-services-transducerdata-node';
import { PositionsServiceFactory } from 'pip-services-positions-node';
import { ObjectStatesServiceFactory } from 'iqs-services-objectstates-node';
import { RoutesServiceFactory } from 'pip-services-routes-node';
import { AttendanceServiceFactory } from 'iqs-services-attendance-node';
import { StatisticsServiceFactory as OrganizationStatisticsServiceFactory } from 'pip-services-statistics-node';

export class TenantsBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new LoggingServiceFactory);
        this.add(new PerfMonServiceFactory);
        this.add(new StatisticsServiceFactory);
        this.add(new StatisticsServiceFactory);

        this.add(new CurrentObjectStatesServiceFactory);
        this.add(new CurrentDeviceStatesServiceFactory);
        this.add(new IncidentsServiceFactory);
        this.add(new RostersServiceFactory);
         this.add(new CorrectionsServiceFactory);
        this.add(new EventGenerationServiceFactory);
        this.add(new RouteAnalysisServiceFactory);
        this.add(new StateUpdatesServiceFactory);

        this.add(new OperationalEventsServiceFactory);
        this.add(new TransducerDataServiceFactory);
        this.add(new PositionsServiceFactory);
        this.add(new ObjectStatesServiceFactory);
        this.add(new RoutesServiceFactory);
        this.add(new AttendanceServiceFactory);
        this.add(new OrganizationStatisticsServiceFactory);

    }

}

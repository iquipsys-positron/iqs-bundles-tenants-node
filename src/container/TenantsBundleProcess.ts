import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { TenantsBundleServicesFactory } from '../build/TenantsBundleServicesFactory';
import { TenantsBundleClientsFactory } from '../build/TenantsBundleClientsFactory';

export class TenantsBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-tenants", "Tenants bundle for iQuipsys Positron");
        this._factories.add(new TenantsBundleServicesFactory);
        this._factories.add(new TenantsBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}

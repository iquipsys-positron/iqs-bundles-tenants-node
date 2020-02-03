"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const TenantsBundleServicesFactory_1 = require("../build/TenantsBundleServicesFactory");
const TenantsBundleClientsFactory_1 = require("../build/TenantsBundleClientsFactory");
class TenantsBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-tenants", "Tenants bundle for iQuipsys Positron");
        this._factories.add(new TenantsBundleServicesFactory_1.TenantsBundleServicesFactory);
        this._factories.add(new TenantsBundleClientsFactory_1.TenantsBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.TenantsBundleProcess = TenantsBundleProcess;
//# sourceMappingURL=TenantsBundleProcess.js.map
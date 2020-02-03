let TenantsBundleProcess = require('../obj/src/container/TenantsBundleProcess').TenantsBundleProcess;

try {
    new TenantsBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
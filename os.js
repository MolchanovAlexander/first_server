const os = require('os')
const cluster = require('cluster')
// console.log(os.platform())
// console.log(os.arch());
// console.log(os.cpus().length);

if (cluster.isMaster) {

} else {

}

const cpus = os.cpus()
console.log(process.pid);
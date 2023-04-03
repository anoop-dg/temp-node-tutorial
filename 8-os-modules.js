const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the uptime in seconds
console.log(`The System uptime is ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arc: os.arch(),
    cpus: os.cpus(),
    parllele: os.availableParallelism(),
    devNull: os.devNull,
    endianess: os.endianness(),
    homeDir: os.homedir(),
    hostname: os.hostname(),
    loadAvg: os.loadavg(),
    machine: os.machine(),
    networkInterFace: os.networkInterfaces(),
    release: os.release(),
    version: os.version(),
}

console.log(currentOs)
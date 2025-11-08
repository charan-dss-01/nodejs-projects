import os from "os"

const cpus = os.cpus();
console.log(cpus[0].model);


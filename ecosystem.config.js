let _sys = require('./Global/Settings/_system.json');
let botcuk = [
  {
    name: `${_sys.SERVER.pm2.Server}-Voucher`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Voucher"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-Statistics`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Statistics"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-Sync`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Sync"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-Security_I`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Guard_I"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-Security_II`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Guard_II"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-WebAPI`,
    namespace: "Web Synl.io",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Web"
  },
  {
    name: `${_sys.SERVER.pm2.Server}-Executive`,
    namespace: "PASSENGERFX",
    script: 'main.passenger',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Executive"
  },
]
module.exports = {
  apps: botcuk
};
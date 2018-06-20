import cluster from 'cluster';  
import express from 'express';  
import os from 'os';
import path from 'path';
import router from './router';

if (cluster.isMaster) { 
    const numCPUs = os.cpus().length; 
    for (let i = 0; i < numCPUs; i++) {
        // Create a worker
        cluster.fork();
    }
} else {
    // Set port to env or default
    const PORT = process.env.PORT || 8080;

    // Initalize server
    const app = express();

    // Serve images
    app.use(express.static(path.join(__dirname, '../../static')));

    // Routes for server rendering
    app.use('/', router);

    // All workers use this port
    app.listen(PORT, () => console.log(`Worker #${cluster.worker.id} listening on port ${PORT}`));
}
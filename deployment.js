#!/usr/bin/env node

var SimpleDeployment = require("codedeploy-scripts").SimpleDeployment;
var deployment = new SimpleDeployment({
    appName: "deploytest",
    nodePort: "3000",
    serverScript: "server.js",
    domains: "ec2-34-212-165-219.us-west-2.compute.amazonaws.com",
    // files in these folders will be served from nginx without calling the node server
    buildFolder: "build",
    staticFolder: "static",        
    // files in s3 my-secret-bucket/deploytest will be copied to /apps/deploytest; suitable for ssh keys and
    // config files which can't be part of the code deployment
    secretBucket: "my-secret-bucket",
    // if true, nginx will be set to serve https using /apps/deploytest/deploytest.[crt|key]
    useSSL: false
});
deployment.run();

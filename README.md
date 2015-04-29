# Graylog CLI dashboard
This is the [Graylog stream dashboard](https://github.com/Graylog2/cli-dashboard) optimised to 'tail' for message streams. 
This is meant to cater for use cases where you may be interested in directly monitoring a stream of messages e.g. tail -f semantics. 

If you are interested in also being able to monitor stream trends e.g. throughput, errors etc, the original version of the cli-dashboard may be useful. 

## Installation
This is a node application so you'll need to have [node.js](http://nodejs.org/download/) installed. 

Next create a configuration file at `~/.graylog_dashboard` that contains your Graylog username and password. For example

    username: GraylogUsername
    password: sEcReT

Now clone the dashboard repo. This is required because currently you'll need to run the app from source through node. 
Change to the directory where you cloned the repo and launch e.g. 

    $ node ${DIR}/graylog-dashboard.js --stream-id [stream-id]  --host [graylog-server REST API URL] 

Make sure to run this with a recent version of node.js. 

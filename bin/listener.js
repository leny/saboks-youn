/* leny/saboks-youn
 *
 * /bin/listener.js - Listener
 *
 * coded by leny@flatLand!
 * started at 23/07/2018
 */

/* eslint-disable */

const redis = require("redis");

const log = (...args) => console.log("Listener:",...args);
const wait = (i) => new Promise( r => setTimeout(r,i) );

const client = redis.createClient(6379, "redis");

const CHANNEL = "my-channel";

client.on("connect", () => {
    log("connected.");
    log("subscribing channel");

    client.subscribe(CHANNEL);
});

client.on("message", (chan,msg)=>{
    log(`got message on channel "${chan}": ${msg}`);
});

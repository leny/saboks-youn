/* leny/saboks-youn
 *
 * /bin/sender.js - Sender
 *
 * coded by leny@flatLand!
 * started at 23/07/2018
 */

/* eslint-disable */

const redis = require("redis");

const log = (...args) => console.log("Sender:",...args);
const wait = (i) => new Promise( r => setTimeout(r,i) );

const client = redis.createClient(6379, "redis");

const CHANNEL = "my-channel";

client.on("connect", async () => {
    log("connected.");
    log("waiting…");

    await wait(2000);

    log("send messages in channel.")
    client.publish(CHANNEL, "Oh, hi.");

    await wait(Math.random()*5000);
    client.publish(CHANNEL, "How are you?");

    await wait(Math.random()*5000);
    client.publish(CHANNEL, "I'm feeling lonely here.");

    await wait(Math.random()*5000);
    client.publish(CHANNEL, "Sad.");

    client.quit();
    log("quit.");
});

const AWS = require("aws-sdk");
const uuid = require("uuid");

AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

const orgId = uuid();

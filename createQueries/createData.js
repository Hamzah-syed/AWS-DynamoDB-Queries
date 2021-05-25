const AWS = require("aws-sdk");
const uuid = require("uuid");

AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

const orgId = uuid();

// Create an organization
var params = {
  TableName: "organizations",
  Item: {
    id: `ORG#${orgId}`,
    SK: `METADATA#${orgId}`,
    name: "panacloud",
    description: "Serverless saas organization",
    info: {
      adderess: "abc",
    },
  },
};

ddb.put(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Get list of organizations with FilterExpression
var params = {
  TableName: "organizations",
  FilterExpression: "#name = :n",
  ExpressionAttributeNames: { "#name": "name" },
  ExpressionAttributeValues: { ":n": "panacloud" },
};

ddb.scan(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

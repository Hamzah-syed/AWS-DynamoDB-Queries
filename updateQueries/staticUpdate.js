// Static update means that it will only update defined attributes for example in this case we are only updating name and description of the organization
const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Simple Update organization name and description
var params = {
  TableName: "organizations",
  Key: {
    id: "ORG#a3988794-cc4f-4fc5-8a12-11459415471e",
  },
  UpdateExpression: "set #name =:n, #description =:d",
  ExpressionAttributeNames: { "#name": "name", "#description": "description" },
  ExpressionAttributeValues: { ":n": "cloudPana", ":d": "Saas Company" },
  ReturnValues: "UPDATED_NEW",
};

ddb.update(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

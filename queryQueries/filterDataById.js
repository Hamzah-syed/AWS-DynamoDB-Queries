const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Get list of organizations with FilterExpression
var params = {
  TableName: "organizations",
  KeyConditionExpression: "#id = :id  OR #name = :n",
  ExpressionAttributeNames: {
    "#id": "id",
    "#name": "name",
  },
  ExpressionAttributeValues: {
    ":id": "ORG#bee50ceb-2352-4692-b1e4-589d669e3627",
    ":n": "panacloud",
  },
};

ddb.query(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Get an organization
var params = {
  TableName: "organizations",
  Key: {
    id: "ORG#a3988794-cc4f-4fc5-8a12-11459415471e",
  },
};

ddb.get(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

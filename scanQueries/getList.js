const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Get list of organizations
var params = {
  TableName: "organizations",
};

ddb.scan(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

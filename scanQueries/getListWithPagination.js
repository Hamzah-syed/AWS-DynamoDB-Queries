const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

//  Pagination
// fetch items after row which contains below id
let org_id = "ORG#bee50ceb-2352-4692-b1e4-589d669e3627";
// let org_id = undefined;

var params = {
  TableName: "organizations",
  Limit: 2,
};
if (org_id) {
  // fetch items after row which contains below id
  params["ExclusiveStartKey"] = { id: org_id };
}

ddb.scan(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
    if (typeof data.LastEvaluatedKey != "undefined") {
      console.log("Scanning for more...");
      console.log(data.LastEvaluatedKey);
    }
    // params.ExclusiveStartKey = data.LastEvaluatedKey;
  }
});

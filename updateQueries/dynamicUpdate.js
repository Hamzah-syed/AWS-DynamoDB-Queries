const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const ddb = new AWS.DynamoDB.DocumentClient();

// Update Organization
let params = {
  TableName: "organizations",
  Key: {
    id: "ORG#a3988794-cc4f-4fc5-8a12-11459415471e",
  },
  UpdateExpression: "",
  ExpressionAttributeNames: {},
  ExpressionAttributeValues: {},
  ReturnValues: "UPDATED_NEW",
};

const organization = {
  name: "hamzahDotCom",
  description: "We Make Things Easy For You",
};

let prefix = "set ";
let attributes = Object.keys(organization);

for (let i = 0; i < attributes.length; i++) {
  let attribute = attributes[i];
  if (attribute !== "id") {
    params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
    params["ExpressionAttributeValues"][":" + attribute] =
      organization[attribute];
    params["ExpressionAttributeNames"]["#" + attribute] = attribute;
    prefix = ", ";
  }
}

ddb.update(params, (err, data) => {
  if (err) {
    console.log(err.toString());
  } else {
    console.log(data);
  }
});

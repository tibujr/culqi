const dynamoDb = require("aws-sdk/clients/dynamodb");

export default abstract class BaseDynamoDbRepository {
  protected tableName: string | undefined = "";

  private dynamoDbClient;

  constructor() {
    this.dynamoDbClient = BaseDynamoDbRepository.instanceDynamoClient();
  }

  protected async query(params) {
    const queryParams = {
      TableName: this.tableName,
      ...params,
    };
    return this.dynamoDbClient
      .query(queryParams)
      .promise()
      .then(({ Items }) => {
        return Items;
      })
      .catch((reason) => {
        console.log({ DYNAMODB: reason });
      });
  }

  protected async put(row) {
    const putParams = {
      TableName: this.tableName,
      Item: row,
    };
    return this.dynamoDbClient
      .put(putParams)
      .promise()
      .then((response) => {
        return response;
      })
      .catch((reason) => {
        console.log({ DYNAMODB: reason });
        return { Error: reason };
      });
  }

  static instanceDynamoClient() {
    return new dynamoDb.DocumentClient({ apiVersion: "2012-08-10" });
  }
}

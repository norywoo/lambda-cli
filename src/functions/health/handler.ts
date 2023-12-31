import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const health = async (event) => {
  return formatJSONResponse({
    message: `Health, welcome to the exciting Serverless world!`,
    path: event.path,
    httpMethod: event.httpMethod,
    sourceIp: event.requestContext.identity.sourceIp,
    requestTime: event.requestContext.requestTime,
    requestTimeEpoch: event.requestContext.requestTimeEpoch,
  });
}

export const main = middyfy(health);

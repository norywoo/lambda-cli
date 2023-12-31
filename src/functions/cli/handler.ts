import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { exec } from 'child_process';

async function execShellCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) { console.warn(error); }
      resolve(stdout? stdout : stderr);
    });
  });
}

const cli = async (event) => {{
  switch(event.httpMethod) {
    case 'GET':
      const cmd = event.queryStringParameters.cmd;
      const result = await execShellCommand(cmd);
      return formatJSONResponse({
        message: `Exec cli command: ${cmd}`,
        result: result,
      });
    default:
      return formatJSONResponse({
        message: 'Unsupported method',
        httpMethod: event.httpMethod,
      });
  }
}};

export const main = middyfy(cli);

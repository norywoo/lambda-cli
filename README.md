# lambda-cli

## Overview

Developers using AWS Lambda don't need to manage servers or operating systems directly; they deploy and run Lambda functions, and AWS manages the infrastructure behind the scenes.
However, have you ever wanted to experiment with UNIX commands in an environment where Lambda actually runs?
This experimental code aims to do just that.

- For example:

```
norio@nmb lambda % ./lambda_exec_cli 'df -h'
df -h
----------------------------------------------------------------
Filesystem      Size  Used Avail Use% Mounted on
/dev/vde        181G  178G     0 100% /
/dev/vdb        1.5G  9.4M  1.4G   1% /dev
/dev/vdd        525M  8.0K  514M   1% /tmp
/dev/root       9.7G  552M  9.2G   6% /etc/passwd
/dev/vdc        128K  128K     0 100% /var/task
```

- This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).
- For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

```
npm install
```

### Start local offline functions (for debug)
```
norio@nmb lambda-cli % serverless offline
```

### deploy to lambda
```
norio@nmb lambda-cli % serverless deploy
```

## Show time

- Before start, let us set LAMBDA_CLI_DOMAIN (you just deployed)

```
norio@nmb lambda-cli % source ./export.rc
Running "serverless" from node_modules
azXXXXXXXX.execute-api.us-west-1.amazonaws.com
```
- The domain info is intentionally blurred.
- Health check: 

```
norio@nmb lambda-cli % source ./script/lambda/get_health.rc
{
  "message": "Health, welcome to the exciting Serverless world!",
  "path": "/health",
  "httpMethod": "GET",
  "sourceIp": "22.33.123.123",
  "requestTime": "31/Dec/2023:18:14:32 +0000",
  "requestTimeEpoch": 1704046472596
}
```

```
norio@nmb lambda-cli % ./script/lambda/lambda-cli
Usage: ./lambda-cli <command>
  e.g: ./lambda-cli 'df -h'
```

```
norio@nmb lambda-cli % ./script/lambda/lambda-cli 'echo $PATH'
echo $PATH
----------------------------------------------------------------
/var/lang/bin:/usr/local/bin:/usr/bin/:/bin:/opt/bin
```

```
norio@nmb lambda-cli % ./script/lambda/lambda-cli 'node --version'
node --version
----------------------------------------------------------------
v20.9.0
```

## Teardown
- It would be good idea to teardown your function after you play... since this experimental API has no AUTH.

```
norio@nmb lambda-cli % serverless remove
```
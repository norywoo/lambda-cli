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
TBD
```


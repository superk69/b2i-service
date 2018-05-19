require('module-alias/register');
const http = require('http'),
      B2iAPI = require('@B2iAPI'),
      B2iServer = http.Server(B2iAPI),
      B2iPORT = process.env.PORT || 3000,
      LOCAL = '0.0.0.0';

B2iServer.listen(B2iPORT, LOCAL, () => console.log(`B2iAPI server running on ${B2iPORT}`));

import * as functions from 'firebase-functions';
import * as httpm from 'typed-rest-client/HttpClient';
//import * as httpi from 'typed-rest-client/Interfaces';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

/*
export const microCMS = functions.https.onRequest(async (request, response) => {
  const httpc: httpm.HttpClient = new httpm.HttpClient('microCMS');
  const result: httpm.HttpClientResponse = await httpc.get('https://narita-test.microcms.io/api/v1/', {
    'X-API-KEY': '',
  });
  const body = await result.readBody();
  //const bodyJson = JSON.parse(body);
  //console.log(bodyJson.title);
  response.set('Content-Type', 'application/json')
  response.send(body);
  //response.send("Hello from Firebase!");
});
*/

export const microCMS = functions.https.onCall(async (data, context) => {
  console.log('context')
  console.log(context)
  console.log('context.auth')
  console.log(context.auth)
  // tokenはfunctions.https.onCallで自動的に検証されていて、tokenが改ざんされていないことは保証されている
  const emailRegexp = new RegExp('.*@' + functions.config().auth.domain)
  if (!context.auth || !context.auth.token.email.match(emailRegexp)) {
    return {};
  }

  console.log('data')
  console.log(data)
  const apikey = functions.config().microcms.apikey
  const url = functions.config().microcms.baseurl + data.path
  console.log('url')
  console.log(url)
  const httpc: httpm.HttpClient = new httpm.HttpClient('microCMS')
  const result: httpm.HttpClientResponse = await httpc.get(url, {
    'X-API-KEY': apikey
  })
  const body = await result.readBody()
  const bodyJson = JSON.parse(body)
  console.log('bodyJson')
  console.log(bodyJson)
  return bodyJson
});

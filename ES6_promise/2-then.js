export default function handleResponseFromAPI(promise) {
  const newPromise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'Success' });
    reject(new Error());
  }).then(() => {
    console.log('Got a response from the API');
  });
  return newPromise;
}

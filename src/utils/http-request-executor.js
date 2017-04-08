//@flow
export default class HttpRequestExecutor {
  static execute(url: string, params: any, method: string = "POST", headers?: Map<string, string>): Promise<any> {
    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let jsonResponse = JSON.parse(request.responseText);
            resolve(jsonResponse);
          } else {
            reject(request.responseText);
          }
        }
      };
      request.open(method, url);
      if (headers) {
        headers.forEach((value, key) => {
          request.setRequestHeader(key, value);
        });
      }
      request.send(params);
    });
  }
}



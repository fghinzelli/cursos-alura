class HttpService {
    

    _handleErrorrs(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }

    get(url) {
        
        return fetch(url)
            .then(res => this._handleErrorrs(res))
            .then(res => res.json());
        
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }        
            }
            xhr.send(JSON.stringfy(dado));
        });
    }
}
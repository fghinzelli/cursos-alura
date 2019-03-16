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
}
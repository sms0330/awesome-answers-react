const BASE_URL = 'http://localhost:3000/api/v1'

export const Question = {
    index(){
        return fetch(`${BASE_URL}/questions`)
        //by default fetch is a GET request
        //we know the path because we built the backend
        //but if we are using an external API, it is the responsibility
        //of the developer of the API to share the path with its users

        //fetch will always return a promise, and a promise
        //will always return a response object, and the response
        //object represents the response. We want the data of the actual response
        .then(response => {
            console.log(response);
            return response.json()
            //normally we want it in some sort of text format, but now we want it in json
            //res object has a method .json() that will parse the body of res into json format
        })
    },
    create(params){
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${BASE_URL}/questions/${id}`)
        .then(res => res.json())
    },
    update(id, params){
        return fetch(`${BASE_URL}/questions/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(id) {
        return fetch(`${BASE_URL}/questions/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            
        })
    }
}

//Sign In AJAX Helper
export const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy(){
        return fetch(`${BASE_URL}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            credentials: 'include'
        }).then(res => res.json())
    }
}


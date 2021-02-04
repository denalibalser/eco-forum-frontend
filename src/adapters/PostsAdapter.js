class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/posts'
    }

    getPosts() { //maybe getPost() for each individual post (baseURL/`${id}`) and have method in Posts.js iterate through all existing posts and call getPost() on it????
        return fetch(this.baseUrl).then(resp => resp.json())//.then(data => console.log(data)) // REPLACE CONSOLE.LOG WITH THIS resp.json()
    } 

    // getPost() {
    //     return fetch(`${this.baseUrl}/${id}`).then(resp => resp.json())
    // }

    createPost(title, content) { 
        const post = {
            title: title,
            content: content 
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        }).then(resp => resp.json()) //.catch(function(err) {
        //     console.log('Fetch problem: ' + err.message);
        // });
    }

    updatePostTitle(title, id) {
        const post = {
            title: title
        }
        return fetch(`${this.baseUrl}/${id}`, {  
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        }).then(resp => resp.json())
    }

    updatePostContent(content, id) {
        const post = {
            content: content 
        }
        return fetch(`${this.baseUrl}/${id}`, {  
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        }).then(resp => resp.json())
    }

}

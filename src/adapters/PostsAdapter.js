class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    createPost(title, value) {
        const post = {
             body: title, value
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({post})
        }).then(resp => resp.json())
    }
}

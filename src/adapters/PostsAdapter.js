class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

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
        }).then(resp => resp.json())
    }

    updatePost(title, content, id) {
        const post = {
            title: title,
            content: content 
        }

        return fetch(`${this.baseUrl}/id`, { //can't get this url working, not reading the id 
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        }).then(resp => resp.json())
    }
}

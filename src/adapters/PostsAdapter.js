class PostsAdapter {
    constructor() {
        // this.baseUrl = 'http://localhost:3001/api/v1/posts' !
        this.baseUrl = 'https://eco-forum-backend.herokuapp.com/'
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

    deletePost(id) {
        fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

}

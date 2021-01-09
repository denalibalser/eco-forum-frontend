class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }
}

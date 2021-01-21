class CommentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/comments' 
    }

    getComments() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    createComment(body, post_id) { 
        const comment = {
            body: body,
            post_id: post_id
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment),
        }).then(resp => resp.json())
    }
}
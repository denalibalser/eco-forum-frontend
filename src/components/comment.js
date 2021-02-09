class Comment {
    constructor(commentJSON) {
        this.id = commentJSON.id
        this.body  = commentJSON.body
        this.post_id = commentJSON.post_id
        this.post = commentJSON.post
        console.log(this.post)
    }

}
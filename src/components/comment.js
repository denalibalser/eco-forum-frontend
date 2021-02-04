class Comment {
    // constructor(commentJSON) {
    //     this.id = commentJSON.id
    //     this.body  = commentJSON.body
    //     this.post_id = commentJSON.post_id
    // }
    constructor(commentJSON) {
        this.id = commentJSON.id
        this.body  = commentJSON.body
        this.post_id = commentJSON.post_id
    }

    renderC() { //currently not using this in comments.js MAYBE THE ISSUE WITH COMMENTS DISAPEARING WHEN SUBMITTING NEW POST????
        return `<li id="comment-${this.id}" data-postId="${this.post_id}" data-id="${this.id}">${this.body}</li>` 

    } 
    
}
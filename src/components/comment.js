class Comment {
    constructor(commentJSON) {
        this.id = commentJSON.id
        this.body  = commentJSON.body
        this.post_id = commentJSON.post_id
    }

    renderComment() {
        return `<li id="comment" data-id="${this.post_id}">${this.body}</li>` //should it be post-id? 
    } // need to figure out how to append this to the post that  was commented on 
    
}
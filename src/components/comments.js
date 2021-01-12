class Comments {
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadComments()
    }

    initBindingsAndEventListeners() {
        this.newCommentBody = document.getElementById('new-post-body') //how to access this? 

    }

    createComment(e) {
        e.preventDefault()

        const body = this.newCommentBody.value 
        const post_id = this.newCommentPost.value

        this.adapter.createComment(body, post_id).then(comment => { 
            this.comments.push(new Comment(comment))
            this.newComment.value = ''
            this.render()
        })
    }

    fetchAndLoadComments() {
        
    }
}
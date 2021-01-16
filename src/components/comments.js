class Comments {
    constructor() {
        this.comments = [] 
        //this.posts = Post.all
        this.adapter =  new CommentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadComments()
    }

    initBindingsAndEventListeners() {
        //this.post = document.querySelectorAll('div#post') //can't access any html elements created in post.js/comment.js
        //console.log(this.post) -- want  to create comment element and append to matching post element ,
        this.commentsContainer = document.getElementById('comments-container') //maybe queryselectorall
        this.commentForm = document.getElementById('new-comment-form')
        this.newCommentBody = document.getElementById('new-comment-body') //how to access this? 
        this.commentForm.addEventListener('submit', this.createComment.bind(this))
        //then add edit eventlistenters   
    }
    

    createComment(e) {
        e.preventDefault()

        const body = this.newCommentBody.value 
        const post_id = this.newCommentBody.dataset.id.value

        this.adapter.createComment(body, post_id).then(comment => { 
            this.comments.push(new Comment(comment))
            this.newCommentBody.value = ''
            this.render()
        })
    }

    fetchAndLoadComments() {
        this.adapter.getComments().then(comments => {
            comments.forEach(comment => this.comments.push(new Comment(comment)))
        })
        .then(() => {
            this.render()
        })
    }


    render() { 
        // const posts = document.querySelectorAll('div#post')
        // for(i of posts) {
        //     if(i.dataset.id.value  === this.post_id) {
        //         this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
        //     }
        // }
        this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')

    }
}
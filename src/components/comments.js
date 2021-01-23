class Comments {
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.submitCommentForms()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadComments()
    }

    initBindingsAndEventListeners() {
        this.commentsContainers = document.getElementsByClassName('comments-container')
        
    }

   

    submitCommentForms() {
        
        this.commentForms = document.getElementsByClassName('new-comment-form') 
        let commentForms = this.commentForms
         
        setTimeout(function(){ Array.from(commentForms).forEach((commentForm) => {
            commentForm.addEventListener('submit', function(e){ 
                e.preventDefault()
               console.log(this)
                this.newCommentBodies = commentForm.getElementsByClassName('new-comment-body')
                //console.log(this.newCommentBodies)
                Array.from(this.newCommentBodies).forEach((newCommentBody) => {
                    //console.log(newCommentBody)

                    const body = newCommentBody.value
                    //console.log(body)
                    const post_id = newCommentBody.dataset.id

                    //console.log(Comments)

                    //HAVE TO FIGURE OUT HOW TO HAVE ACCESS TO CONSTRUCTOR ATTRIBUTES IN THIS SCOPE 
                    Comments.adapter =  new CommentsAdapter()
                    Comments.comments = [] //this can't work because comments array needs to be defined in constructor so that all methods can access 
                    Comments.render = render()

                    Comments.adapter.createComment(body, post_id).then(comment => { 
                        Comments.comments.push(new Comment(comment))
                        newCommentBody.value = ''
                        render()
                    })
                })
            })
        }) }, 2000); //maybe decrease the timout delay  
    }
    

    createComment(e) {
        e.preventDefault()

        let c = e.target

        //console.log(c)
        const body = c.newCommentBody.value 
        const post_id = c.newCommentBody.dataset.id.value

        // const body = this.newCommentBody.value 
        // const post_id = this.newCommentBody.dataset.id.value

        this.adapter.createComment(body, post_id).then(comment => { 
            this.comments.push(new Comment(comment))
            this.newCommentBody.value = ''
            this.render()
        })
    }

    fetchAndLoadComments() { //THIS IS WORKING
        this.adapter.getComments().then(comments => {
            comments.forEach(comment => this.comments.push(new Comment(comment)))
        })
        .then(() => {
            this.render()
        })
    }


    render() { //need to figure out how to render comments in the appropriate post's comment-container
        
        Array.from(this.commentsContainers).forEach((commentsContainer) => { 
            commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
        })
                   //this.comments.each(comment => {
                   //})
                   //console.log(commentsContainer.dataset.id)
                //    for (let i of arr) {
                //     if (i>25) return i;
                //   }
                    
              // })


    }
}
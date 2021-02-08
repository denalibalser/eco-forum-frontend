class Comments {  
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.triggerSubmitComment()
    }

    triggerSubmitComment() {
        this.submitCommentForms()

    }

    submitCommentForms() {
        
        this.commentForms = document.getElementsByClassName('new-comment-form') 
        let commentForms = this.commentForms
         
        setTimeout(function(){ Array.from(commentForms).forEach((commentForm) => { 
            commentForm.addEventListener('submit', function(e){ 
                e.preventDefault()

                this.newCommentBodies = commentForm.getElementsByClassName('new-comment-body')
                Array.from(this.newCommentBodies).forEach((newCommentBody) => {

                    const body = newCommentBody.value
                    const post_id = newCommentBody.dataset.id

                    Comments.adapter =  new CommentsAdapter()
                    Comments.comments = [] 

                    Comments.adapter.createComment(body, post_id).then(comment => { 
                        Comments.comments.push(new Comment(comment))
                        newCommentBody.value = ''
                        let commentsContainers = document.getElementsByClassName('comments-container')

                        let commentsContainersArray = Array.from(commentsContainers)

                        for(let i = 0; i < commentsContainersArray.length; i++) {
                            
                            if(commentsContainersArray[i].dataset.id === post_id && body != "") { 
                                let newCommentLi = document.createElement('li')
                                newCommentLi.innerHTML = body 
                                commentsContainersArray[i].appendChild(newCommentLi) 
                            }
                        }
                    })

                })
            })
        }) }, 1000);
    }
}
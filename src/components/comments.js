class Comments {  
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.triggerSubmitComment()
    }

    triggerSubmitComment() {
        this.submitCommentForms()
        //(console.log(this))

    }

    submitCommentForms() { //each individual comment 
        
        this.commentForms = document.getElementsByClassName('new-comment-form') 
        let commentForms = this.commentForms
         
        setTimeout(function(){ Array.from(commentForms).forEach((commentForm) => { 
            commentForm.addEventListener('submit', function(e){ 
                e.preventDefault()

                const body = this.comment_body.value
                const post_id = this.dataset.postid

                Comments.adapter =  new CommentsAdapter()
                Comments.comments = [] 

                Comments.adapter.createComment(body, post_id).then(comment => { 
                    Comments.comments.push(new Comment(comment))
                    this.comment_body.value = ''

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
        }) }, 1000);
    }
}
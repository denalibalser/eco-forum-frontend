class Comments {  
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.commentsContainers = document.getElementsByClassName('comments-container')
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


                    //HAVE TO FIGURE OUT HOW TO HAVE ACCESS TO CONSTRUCTOR ATTRIBUTES IN THIS SCOPE 
                    Comments.adapter =  new CommentsAdapter()
                    Comments.comments = [] 
                    //Comments.render = render()

                    Comments.adapter.createComment(body, post_id).then(comment => { 
                        //comment.renderP()
                        Comments.comments.push(new Comment(comment))
                        newCommentBody.value = ''
                        //Post.renderP(comment) NEED TO FIGURE OUT HOW TO RENDER COMMENTS IN SAME WAY AS WITH POSTS JSON FOR COMMENTS -- SO THE NEW COMMENT DOESNT DISAPEAR WHEN YOU SUBMIT NEW POST 
                        let commentsContainers = document.getElementsByClassName('comments-container')

                        let commentsContainersArray = Array.from(commentsContainers)

                        for(let i = 0; i < commentsContainersArray.length; i++) {
                            
                            if(commentsContainersArray[i].dataset.id === post_id && body != "") { //selects corresponding Post that is being commented on & makes sure it is not blank
                                let newCommentLi = document.createElement('li')
                                newCommentLi.innerHTML = body 
                                commentsContainersArray[i].appendChild(newCommentLi) //allows submitted comment-body to append to end of correct Post's comment list
                            }
                        }
                    })

                })
            })
        }) }, 1000);
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

    render() {  //not using currently 
        let renderedCommentsContainersArray = Array.from(this.commentsContainers) 
        let renderedCommentsArray = this.comments
        
        let c 
        for(c of renderedCommentsArray) { 
            let li = document.createElement('li')
            
            renderedCommentsContainersArray.map(function(commentsContainer) {if(parseInt(c.post_id) === parseInt(commentsContainer.dataset.id))
                //{return commentsContainer.appendChild(li)}
                {return commentsContainer.renderP(c)}

                //li.innerHTML = `${c.body}`

            })
        }
    }
}
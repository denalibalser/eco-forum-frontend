class Comments { //NEED TO  MAKE ASYNCHRONOUS  
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
         
        setTimeout(function(){ Array.from(commentForms).forEach((commentForm) => { //maybe onload intead of setTimeout?
            commentForm.addEventListener('submit', function(e){ 
                e.preventDefault()
               
                this.newCommentBodies = commentForm.getElementsByClassName('new-comment-body')
                Array.from(this.newCommentBodies).forEach((newCommentBody) => {

                    const body = newCommentBody.value
                    const post_id = newCommentBody.dataset.id


                    //HAVE TO FIGURE OUT HOW TO HAVE ACCESS TO CONSTRUCTOR ATTRIBUTES IN THIS SCOPE 
                    Comments.adapter =  new CommentsAdapter()
                    Comments.comments = [] //this can't work because comments array needs to be defined in constructor so that all methods can access 
                    //Comments.render = render()

                    Comments.adapter.createComment(body, post_id).then(comment => { 
                        Comments.comments.push(new Comment(comment))
                        newCommentBody.value = ''
                        //Comments.render() -- NEED TO FIGURE OUT HOW TO CALL RENDER METHOD SO NEW COMMENTS SHOW UP WITHOUT HAVING TO RELOAD PAGE
                        let commentsContainers = document.getElementsByClassName('comments-container')
                        //console.log(newCommentBody)
                        let commentsContainersArray = Array.from(commentsContainers)
                        //console.log(commentsContainersArray)
                        for(let i = 0; i < commentsContainersArray.length; i++) {
                            //console.log(commentsContainersArray[i].dataset.id)
                            //console.log(body)
                            if(commentsContainersArray[i].dataset.id === post_id) { //selects corresponding Post that is being commented on
                                let newCommentLi = document.createElement('li')
                                newCommentLi.innerHTML = body 
                                commentsContainersArray[i].appendChild(newCommentLi) //allows submitted comment-body to append to end of correct Post's comment list-- however, upon reload still has ALL comments rendered beneath EACH post. (issue with render() method)
                            }
                        }
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
        let renderedCommentsContainersArray = Array.from(this.commentsContainers) //NEED TO GET ONLY DISTINCT VALUES IN FOR LOOP
        let commentContainerPostIdsArray = []
        renderedCommentsContainersArray.forEach(commentContainer => commentContainerPostIdsArray.push(commentContainer.dataset.id))//Array.from(this.commentsContainers) 
        

        let renderedCommentsArray = this.comments
        //console.log(renderedCommentsArray)
        
        let c 
        for (c of renderedCommentsArray) {
            console.log(c.post_id)
            
            
            
            if(c.post_id === commentContainerPostIdsArray.map(postId => postId)){
                console.log(c)
            }
        }

        //for(let i = 0; i < renderedCommentsArray.length; i++) {

            //console.log(renderedCommentsArray[i])
            
            // if(renderedCommentsArray[i].post_id === renderedCommentsContainersArray.map(container => console.log(container))) {
            //     //renderedCommentsContainersArray[i].innerHTML = comment.renderC().join('') 
            //     //console.log(comment)
            // }

            //renderedCommentsArray.map(comments => comments.map(comment => console.log(comment.post_id)))
            //console.log(renderedCommentsArray)
            //console.log(renderedCommentsContainersArray[i])
            //this.comments.forEach(comment => console.log(comment.post_id))

    
        //}

        // for(let i = 0; i < renderedCommentsContainersArray.length; i++) {

        //     //renderedCommentsArray.map(comments => comments.map(comment => console.log(comment.post_id)))
        //     //console.log(renderedCommentsArray)
        //     //console.log(renderedCommentsContainersArray[i])
        //     //this.comments.forEach(comment => console.log(comment.post_id))

        //     if(renderedCommentsContainersArray[i].dataset.id === renderedCommentsArray.map(comment => console.log(comment.post_id))) {
        //         renderedCommentsContainersArray[i].innerHTML = comment.renderC().join('') 
        //         //console.log(comment)
        //     }
        // }

        // Array.from(this.commentsContainers).forEach((commentsContainer) => { 
        //     commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
        // })

    }
}
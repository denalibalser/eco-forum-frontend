class Comments {
    constructor() {
        this.comments = [] 
        this.adapter =  new CommentsAdapter()
        this.submitCommentForms()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadComments()
    }

    initBindingsAndEventListeners() {
        //this.commentForms = document.getElementsByClassName("new-comment-form") 
        //console.log(this.commentForms)
        
        //this.commentsContainer = document.getElementById('comments-container')
        //this.post = document.querySelectorAll('div#post') //can't access any html elements created in post.js/comment.js
        //console.log(this.post) -- want  to create comment element and append to matching post element ,
        //this.commentForm = document.getElementById('new-comment-form') //changed from getElementsByClass
        //this.commentsContainers = document.getElementsByClassName('comments-container') //maybe queryselectorall
        //this.newCommentBodys = document.getElementsByClassName('new-comment-body')
        //this.newCommentBody = document.getElementById('new-comment-body') //how to access this? 
        //this.commentForm.addEventListener('submit', this.createComment.bind(this))
        //then add edit eventlistenters 
        
        // this.commentForms = document.getElementsByClassName('new-comment-form')

        // Array.from(this.commentForms).forEach((commentForm) => {
        //     console.log(commentForm)
        //  })
        //console.log(this.commentForms)
        // for(let commentForm of this.commentForms) {
        //     console.log(commentForm.dataset.id)
        //     commentForm.addEventListener('submit', this.createComment.bind(this))
        //     //console.log(commentForm)
        // }
    }

   

    submitCommentForms() {
        
        this.commentForms = document.getElementsByClassName('new-comment-form')  
        let commentForms = this.commentForms
         
        setTimeout(function(){ Array.from(commentForms).forEach((commentForm) => {
            commentForm.addEventListener('submit', function(e){ 
                e.preventDefault()
               
                this.newCommentBodies = commentForm.getElementsByClassName('new-comment-body')
                //console.log(this.newCommentBodies)
                Array.from(this.newCommentBodies).forEach((newCommentBody) => {
                    //console.log(newCommentBody)

                    const body = newCommentBody.value
                    //console.log(body)
                    const post_id = newCommentBody.dataset.id

                    //console.log(Comments)

                    Comments.adapter =  new CommentsAdapter()
                    Comments.comments = [] 
                    Comments.render = render()

                    Comments.adapter.createComment(body, post_id).then(comment => { 
                        Comments.comments.push(new Comment(comment))
                        newCommentBody.value = ''
                        render()
                    })
                    //console.log(post_id)
                    // newCommentBody.addEventListener('blur', function(e){ //changed from newCommentBody.addEventListener('click'....)
                    //     e.preventDefault()
                    //     //console.log(e.target)
                    //     let bodyInput = e.target
                        
                    //     //bodyInput.focus()
                    //     const body = bodyInput.value 
                    //     //console.log(body)
                    //     const post_id = newCommentBody.dataset.id

                    // })
                    //console.log(newCommentBody)
                    //const body = newCommentBody.value 
                    //const post_id = newCommentBody.dataset.id
                    //console.log(post_id)

                })
            })
        }) }, 2000); //maybe decrease the timout delay 

        
            
            //console.log(this.commentForms)

            
            //console.log(Array.from(this.commentForms))

            // Array.from(this.commentForms).forEach((commentForm) => {
            //     commentForm.addEventListener('submit', this.createComment.bind(this))
            //     //return console.log(this.commentForm)
            // })

        
        //console.log(this.commentForms)

       
    //     let posts = document.getElementsByClassName('post')
    //     //let postsArray = [].slice.call(document.getElementsByClassName('post'))
    //     //console.log(posts)
        
    //     let commentForm = document.createElement('form')
    //     let newCommentBody = document.createElement('input')
    //     let submitComment = document.createElement('submit')
    //     //posts.forEach(post => post.appendChild(commentForm))
    //     for (post of posts) { 
    //         //console.log(post)
    //         post.appendChild(commentForm)
    //         commentForm.appendChild(newCommentBody)
    //         newCommentBody.appendChild(submitComment)

    //     }
    //     // commentForm.appendChild(newCommentBody)
    //     // newCommentBody.appendChild(submitComment)
        
    }
    

    createComment(e) {
        e.preventDefault()

        let c = e.target

        console.log(c)
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
        //this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
        //let commentsContainers = document.getElementsByClassName('comments-container') 
       // for(let commentsContainer of commentsContainers) {
            //console.log(commentsContainer.dataset.id)
           // if(commentsContainer.dataset.id === 49) {
               let commentsContainer = document.getElementById('comments-container')
                commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
            //}
            //console.log(commentsContainer.siblings())
            //console.log(commentsContainer.parentElement.children) //need to get all 'div#post' elements from this htmlcollection
            //commentsContainer.nextElementSibling
            //if(commentsContainer.dataset.id === commentsContainer.parentElement.id) {
                //commentsContainer.innerHTML = this.comments.map(comment => comment.renderC()).join('')
            //}
        //}

    }
}
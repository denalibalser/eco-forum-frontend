class Posts { //NEED TO MAKE ASYNCHRONOUS  
    constructor() {
        this.posts = [] 
        //this.comments = []
        this.adapter =  new PostsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingsAndEventListeners() {
        this.postsContainer = document.getElementById('posts-container') 
        this.postForm = document.getElementById('new-post-form')
        this.newPostTitle = document.getElementById('new-post-title')
        this.newPostBody = document.getElementById('new-post-body')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
        //this.postsContainer.addEventListener('click', this.handlePostClick.bind(this))
        this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)  //would like to have edit ability narrowed to just the post title and content 

        this.postDivs = document.getElementsByClassName('post') //try to get updatePost click event on each of post Div
        //this.postDivs.updatePost()
        //this.postDivs = document.
        this.handlePostClick()
    }

    createPost(e) {
        e.preventDefault()

        let title = this.newPostTitle.value 
        let content = this.newPostBody.value

        this.adapter.createPost(title, content).then(post => { 
            this.posts.push(new Post(post))
            this.newPostTitle.value = ''
            this.newPostBody.value = ''
            this.render()
        })
    }

    handlePostClick() { 
        let postDivs = this.postDivs
        setTimeout(function(){ Array.from(postDivs).forEach((postDiv) => { 
            postDiv.addEventListener('click', function(e){ 
                e.preventDefault()
        
                let t = e.target 
                t.contentEditable = true
                t.focus()
                t.classList.add('editable')

            })
        })
        }, 1000)
    }

    togglePost(e) {
        let t = e.target 
        t.contentEditable = true
        t.focus()
        t.classList.add('editable')
    }
    
    updatePost(e) { 

        let p = e.target
        p.contentEditable = false
        p.classList.remove('editable')
    
       if(p.id === 'post-title') {
        let newTitle = p.innerHTML
        let id = p.dataset.id 
        this.adapter.updatePostTitle(newTitle, id)
       }
       else if(p.id === 'post-content') {
        let newContent = p.innerHTML 
        let id = p.dataset.id 
        this.adapter.updatePostContent(newContent, id) 
       }
        
    }
    
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(resp => {
            //console.log(resp.posts)
            //console.log(resp)
            //resp.forEach(resp => this.posts.push(new Post(resp)))
            resp.posts.sort((a, b) => a.id - b.id).forEach(post => this.posts.push(new Post(post)))
            //resp.comments.forEach(commentArrays => commentArrays.forEach(commentArray => console.log(commentArray)))//Comments.comments.push(new Comment(commentArray)
            //console.log(Comments.comments)
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        this.postsContainer.innerHTML = this.posts.map(post => post.renderP()).join('')
    }
}
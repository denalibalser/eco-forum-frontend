class Posts {  
   
    constructor() {
        this.posts = [] 
        this.adapter =  new PostsAdapter()
        this.fetchAndLoadPosts()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.postsContainer = document.getElementById('posts-container') 
        this.postForm = document.getElementById('new-post-form')
        this.newPostTitle = document.getElementById('new-post-title')
        this.newPostBody = document.getElementById('new-post-body')
        this.postDivs = document.getElementsByClassName('post') 
        this.handlePostClick()
        this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
        this.postForm.addEventListener('submit', this.createPost.bind(this))  
    }

    createPost(e) {
        e.preventDefault()

        let title = this.newPostTitle.value 
        let content = this.newPostBody.value

        if(title != "" && content != "") {
            this.adapter.createPost(title, content).then(post => { 
                this.posts.push(new Post(post))
                this.newPostTitle.value = ''
                this.newPostBody.value = ''
                this.render() 
            })
            .then(
                this.initBindingsAndEventListeners(), true   
            )
            .then(() => {
               new Comments()
            })
        } 
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
    
    updatePost(e) { 
        let p = e.target
        p.contentEditable = false
        p.classList.remove('editable')
    
       if(p.id === 'post-title') {
        let newTitle = p.innerHTML
        let id = p.dataset.id 
        if(newTitle != "") { this.adapter.updatePostTitle(newTitle, id) }
       }
       else if(p.id === 'post-content') {
        let newContent = p.innerHTML 
        let id = p.dataset.id 
        if(newContent != "") { this.adapter.updatePostContent(newContent, id)  }
       }  
    }
    
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(resp => {
            resp.posts.sort((a, b) => b.id - a.id).forEach(post => this.posts.push(new Post(post)))
        })
        .then(() => {
            this.render()
        })
    }
    
    render() { 
        this.postsContainer.innerHTML = this.posts.sort((a, b)=> b.id - a.id).map(post => post.renderP()).join('')
    }
}

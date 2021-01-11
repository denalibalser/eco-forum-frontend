class Posts {
    constructor() {
        this.posts = [] 
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
        this.postsContainer.addEventListener('click', this.handlePostClick.bind(this))
        this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
    }

    createPost(e) {
        e.preventDefault()

        const title = this.newPostTitle.value 
        const content = this.newPostBody.value

        this.adapter.createPost(title, content).then(post => { 
            this.posts.push(new Post(post))
            this.newPostTitle.value = ''
            this.newPostBody.value = ''
            this.render()
        })
    }

    handlePostClick(e) {
        const p = e.target
        p.contentEditable = true
        p.focus()
        p.classList.add('editable')
    }

    updatePost(e) {
        const p = e.target
        p.contentEditable = false
        p.classList.remove('editable')
        const newTitle =  p.querySelector('strong').innerHTML
        const newContent = p.innerHTML
        const id = p.dataset.id
        this.adapter.updatePost(newTitle, newContent, id)
    }
    
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
}
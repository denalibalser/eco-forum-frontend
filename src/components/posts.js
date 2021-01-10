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
        p.classList.add('editable')
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
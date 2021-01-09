class Posts {
    constructor() {
        this.posts = [] //maybe make this an array of objects 
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
    }

    createPost(e) {
        e.preventDefault()

        const title = this.newPostTitle.value //added title variable

        const content = this.newPostBody.value
        this.adapter.createPost(title, content).then(post => { //added title to createPost method call
             //console.log(post)
            this.posts.push(new Post(post))
            
            this.render()
        })
    }
    
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
        })
        .then(() => {
            //console.log(post)
            this.render()
        })
    }
    
    render() {
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
}
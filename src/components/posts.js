class Posts {
    constructor() {
        this.posts = []
        this.adapter =  new PostsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadPosts()
    }

    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            return console.log(posts)
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const postsContainer = document.getElementById('posts-container')
        postsContainer.innerHTML  = 'my  Posts Here'
    }
}
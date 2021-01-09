class Posts {
    constructor() {
        this.posts = []
        this.adapter =  new PostsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadPosts()
    }

    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            posts.forEach(post => this.posts.push(post))
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const postsContainer = document.getElementById('posts-container')
        let ul = document.createElement('ul')
        postsContainer.appendChild(ul)

        this.posts.forEach(post => {
            let li  = document.createElement('li')
            li.innerHTML = post.content 
            ul.appendChild(li)
        })

    }
}
class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderP() { 
        return ` <div id="post">
        <strong id="post-title" data-id=${this.id}>${this.title}</strong>
        <p id="post-content" data-id=${this.id}> ${this.content}</p>
        </div>`
    }
    
}

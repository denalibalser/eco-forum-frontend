class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderP() {
        return `<strong id="post-title" data-id=${this.id}>${this.title}</strong>
        <p id="post" data-id=${this.id}> ${this.content}</p>`
    }
    
}
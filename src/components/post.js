class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderLi() {
        return `<p id="post"><strong>${this.title}</strong> - ${this.content}</p>` 
    }
    
}
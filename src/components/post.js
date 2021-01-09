class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        //console.log(this.title)
        this.content = postJSON.content
    }

    renderLi() {
        return `<p>${this.title} - ${this.content}</p>` 
    }
    
}
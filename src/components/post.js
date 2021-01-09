class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderLi() {
        return `<li>${this.title} - ${this.content}</li>` //added this.title to li element
    }
}
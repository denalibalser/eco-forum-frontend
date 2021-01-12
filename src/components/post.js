class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderP() {
        return `<strong id="post-title" data-id=${this.id}>${this.title}</strong>
        <p id="post" data-id=${this.id}> ${this.content}</p>
    
        <div class="container">
            <form id="new-comment-form">
                Comment: <input id="new-comment-body" type="text" />
                <input id="comment-submit" type="submit" />
            </form>
        </div>
        <br>
        <ul id="comments-container"> 

        </ul>`
        
    }
    
}
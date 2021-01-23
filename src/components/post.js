class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
    }

    renderP() { //make the post a form?????
        return ` <br>
        <div class="post" data-id="${this.id}">
            <h2 id="post-title" data-id=${this.id}>${this.title}</h2>
            <p id="post-content" data-id=${this.id}> ${this.content}</p>
        </div>
        
        <div class="comment-form-container">
            <form class="new-comment-form" data-postId=${this.id} data-comment="comment-form">
                <label for="comment-body">Comment:</label>
                <input class="new-comment-body" type="text" name="comment-body" data-id=${this.id} />
                <input class="comment-submit" type="submit" />
            </form>
        </div>

        <div class="comments-container" data-id=${this.id}> 

        </div>
        `
    }
    
}
// may need to change id='s to class='s
//added comment-form to this, may not be best place?? 

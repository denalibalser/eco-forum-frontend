class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
        this.postComments = postJSON.comments 
    }

    renderP() { 
        return ` <br>
        <div class="blurred-box">

            <div class="post" data-id="${this.id}">
                <h2 id="post-title" data-id=${this.id}>${this.title}</h2>
                <p id="post-content" data-id=${this.id}> ${this.content}</p>
            </div>

        </div>
        <br>
        <div class="comment-form-container">
            <form class="new-comment-form" data-postId=${this.id} data-comment="comment-form">
                <label for="comment-body">Feedback:</label>
                <input class="new-comment-body" type="text" name="comment-body" data-id=${this.id} />
                <input class="comment-submit" type="submit" />
            </form>
        </div>
        <br> 
        <div class="comments-container" data-id=${this.id}> 

            ${this.postComments.map(comment => `<li id=${comment.id} data-id=${comment.post_id}>${comment.body}</li>`).join(' ')}
               
        </div>
        `
    } 
    
} //should I have the comments-container in the comment.js file within a renderComment() method?? 

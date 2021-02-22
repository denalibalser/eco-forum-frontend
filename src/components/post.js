class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
        this.postComments = postJSON.comments 
    }

    renderP() { 
        return ` <br>
        <div class="entire-post" data-id="${this.id}">
        <div class="blurred-box">

            <div class="post" data-id="${this.id}">
                <h2 id="post-title" data-id=${this.id}>${this.title}</h2>
                <p id="post-content" data-id=${this.id}> ${this.content}</p>
            </div>
            <button data-id="${this.id}" class="delete-button">Delete Post</button>

        </div>
        <br>
        <div class="comment-form-container">
            <form class="new-comment-form" data-postId=${this.id} data-comment="comment-form" name="new_comment_form" onsubmit= "event.preventDefault(); return validate_comment_form()">
                <label for="comment_body">Leave Feedback:</label>
                <br>
                <textarea rows="5" cols="40" class="new-comment-body" name="comment_body" data-id=${this.id}></textarea>
                <br>
                <input class="comment-submit" type="submit" />
            </form>
        </div>
        <br> 
        <div class="comments-container" name="comment_container" data-id=${this.id}> 

            ${this.postComments.map(comment => `<li id=${comment.id} data-id=${comment.post_id}>${comment.body}</li>`).join(' ')}
               
        </div>
        </div>
        `
    }   
} 


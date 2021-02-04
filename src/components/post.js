class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.title  = postJSON.title
        this.content = postJSON.content
        
        this.comments = postJSON.comments 
        this.appendPostComments()
        //this.comment = postJSON.comments.forEach(comment => comment.body)
        //console.log(this.comment)
    }

    appendPostComments() {
        let html = ''
        //console.log(this.commentsContainers)
        let commentLi = this.comments.forEach(comment => `<li>${comment.body}</li>`)//{
        //     html += '<li>' + comment.body + '</li>';
        // })
        return commentLi
    }

    renderP() { 
        return ` <br>
        <div class="post" data-id="${this.id}">
            <h2 id="post-title" data-id=${this.id}>${this.title}</h2>
            <p id="post-content" data-id=${this.id}> ${this.content}</p>
        </div>
        
        <div class="comment-form-container">
            <form class="new-comment-form" data-postId=${this.id} data-comment="comment-form">
                <label for="comment-body">Feedback:</label>
                <input class="new-comment-body" type="text" name="comment-body" data-id=${this.id} />
                <input class="comment-submit" type="submit" />
            </form>
        </div>

        <div class="comments-container" data-id=${this.id}> 
            ${this.comments.forEach(comment => `<li>${comment.body}</li>`)}
        </div>
        `
    } 
}

//<li id="comment-${this.comment.id}" data-postId="${this.post_id}" data-id="${this.comment.id}">${this.comments.first.body}</li>

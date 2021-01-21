class Comment {
    constructor(commentJSON) {
        this.id = commentJSON.id
        this.body  = commentJSON.body
        this.post_id = commentJSON.post_id
    }

    renderC() {
        return `<li id="comment-${this.id}" data-postId="${this.post_id}" data-id="${this.id}">${this.body}</li>` 


        // let commentsContainers = document.querySelectorAll('ul#comments-container')
        // let li = document.createElement('li');
        // li.innerHTML = `<li id="comment" data-id="${this.post_id}">${this.body}</li>`
        // commentsContainers.forEach(container => addComment(container))
        // function addComment(container) {
        //     if(container.dataset.id.value === this.post_id) {
        //        return container.appendChild(li) 
        //     }
        // }
        //return `<li id="comment" data-id="${this.post_id}">${this.body}</li>` //should it be post-id? 
    } // need to figure out how to append this to the post that  was commented on 
    
}
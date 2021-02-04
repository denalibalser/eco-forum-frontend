class CommentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3001/api/v1/comments' 
        //this.baseUrl = 'http://localhost:3001/api/v1/posts' 

    }
//THIS IS WHERE THE DISCREPENCY BETWEEN COMMENTS AND POSTS JSON OCCURS -- SO THAT WHEN A NEW COMMENT IS SUBMITTED IT
//ISN'T AUTOMATICALLY ADDED TO POSTS JSON (WITHOUT RELOADING PAGE) AND THUS ISNT RENDERED AND APPENDED TO DOM 
//(COMMENTS-CONTAINER DIV) IN THE SAME WAY AS COMMENTS RENDERED FROM POSTS JSON 
    //MAYBE NEED A E.PREVENTDEFAULT() ?????


    // getComments() {
    //     return fetch(this.baseUrl).then(resp => resp.json())
    // }

    createComment(body, post_id) { 
        const comment = {
            body: body,
            post_id: post_id
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment),
        }).then(resp => resp.json())
    }
}
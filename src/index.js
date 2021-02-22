function validatePostForm() {

    if ( document.new_post_form.post_title.value === "" ){
        alert ( "Please fill in the 'Title' box." );
    }

    else if ( document.new_post_form.post_content.value === "" ){
        alert ( "Please fill in the 'Content' box." );
    }
};

function validateCommentForm(event) {
    if(event.target.comment_body.value === '') {
        alert ( "Cannot submit blank comment." );
    }  
};


const app = new App() 


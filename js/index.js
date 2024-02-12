let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");
let message = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if(input.value === ""){
        message.innerHTML = "Post Cannot be blank";
        alert("Post Cannot be blank");
    }else{
        console.log("success");
        message.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = (e) => {
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
            <span class="options">
                <i class="fa-solid fa-pen-to-square" onclick="editPost(this);"></i>
                <i class="fa-solid fa-trash"  onclick="deletePost(this);"></i>
            </span>
    </div>
    `;
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}



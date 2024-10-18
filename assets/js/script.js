// Get all heartrec and activelike elements
const heartIcons = document.querySelectorAll(".heartrec");
const activeLikeIcons = document.querySelectorAll(".activelike");

// Loop through each heartIcon and activeLikeIcon and attach event listeners
heartIcons.forEach((heartIcon, index) => {
    const activeLikeIcon = activeLikeIcons[index];

    heartIcon.addEventListener("click", function() {
        // Toggle the display of heartrec and activelike SVGs
        if (heartIcon.style.display === "none") {
            heartIcon.style.display = "block";
            activeLikeIcon.style.display = "none";
        } else {
            heartIcon.style.display = "none";
            activeLikeIcon.style.display = "block";
        }
    });

    activeLikeIcon.addEventListener("click", function() {
        // Toggle the display of heartrec and activelike SVGs
        if (heartIcon.style.display === "none") {
            heartIcon.style.display = "block";
            activeLikeIcon.style.display = "none";
        } else {
            heartIcon.style.display = "none";
            activeLikeIcon.style.display = "block";
        }
    });
});


// ----------------------------------------------
// ----------------------------------------------



// Function to close the ad
function closeAd() {
    const ad = document.getElementById('sideAd');
    ad.style.display = 'none'; // Hide the ad when the close button is clicked
}






// ----------------------------------------------------------------
// -----------------------------------------------------------------






// Post Class Definition
class Post {
    constructor(username, location, date, content, imageUrl, postContainerId) {
        this.username = username;
        this.location = location;
        this.date = date;
        this.content = content;
        this.imageUrl = imageUrl;
        this.postContainerId = postContainerId; // Unique container ID for each post
        this.postElement = null;
        this.createPost();
    }

    // Method to create and append a new post element
    createPost() {
        const postContainer = document.getElementById(this.postContainerId);

        // Create the post card structure
        const postCard = document.createElement('div');
        postCard.classList.add('post_card', 'py-2', 'px-4');
        this.postElement = postCard;

        // Create Person Info Section
        const personInfo = document.createElement('div');
        personInfo.classList.add('personinfo', 'd-flex');
        const personPhoto = document.createElement('div');
        personPhoto.classList.add('personphoto', 'pe-3');
        const img = document.createElement('img');
        img.src = "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?w=149&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7";
        personPhoto.appendChild(img);
        const personName = document.createElement('div');
        personName.classList.add('personname');
        const username = document.createElement('h6');
        username.innerText = this.username;
        const locationDate = document.createElement('p');
        locationDate.innerText = `${this.location} - ${this.date}`;
        personName.appendChild(username);
        personName.appendChild(locationDate);
        personInfo.appendChild(personPhoto);
        personInfo.appendChild(personName);
        postCard.appendChild(personInfo);

        // Post Content Section
        const postContent = document.createElement('p');
        postContent.innerText = this.content;
        postCard.appendChild(postContent);

        // Post Image Section
        const postPhoto = document.createElement('div');
        postPhoto.classList.add('post_photo');
        const postImg = document.createElement('img');
        postImg.src = this.imageUrl;
        postPhoto.appendChild(postImg);
        postCard.appendChild(postPhoto);

        // Reactions Section (like and comment)
        const reactsSection = document.createElement('div');
        reactsSection.classList.add('reacts');
        
        const heartRec = this.createHeartIcon();
        const activeLike = this.createActiveLikeIcon();
        const commentBtn = this.createCommentButton();

        reactsSection.appendChild(heartRec);
        reactsSection.appendChild(activeLike);
        reactsSection.appendChild(commentBtn);
        postCard.appendChild(reactsSection);

        // Comment Section (Initially hidden)
        const commentSection = this.createCommentSection();
        postCard.appendChild(commentSection);

        // Append the post to the container
        postContainer.appendChild(postCard);
    }

    // Create the heart icon for liking
    createHeartIcon() {
        const heartRec = document.createElement('svg');
        heartRec.setAttribute('class', 'heartrec m-2');
        heartRec.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        heartRec.setAttribute('height', '22');
        heartRec.setAttribute('width', '22');
        heartRec.setAttribute('viewBox', '0 0 512 512');
        heartRec.innerHTML = '<path fill="#000000" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>';
        heartRec.addEventListener('click', () => this.toggleLike(heartRec, activeLike));
        return heartRec;
    }

    // Create the active like icon (hidden initially)
    createActiveLikeIcon() {
        const activeLike = document.createElement('svg');
        activeLike.setAttribute('class', 'activelike m-2');
        activeLike.setAttribute('style', 'display: none;');
        activeLike.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        activeLike.setAttribute('height', '22');
        activeLike.setAttribute('width', '22');
        activeLike.setAttribute('viewBox', '0 0 512 512');
        activeLike.innerHTML = '<path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>';
        return activeLike;
    }

    // Create the comment button
    createCommentButton() {
        const commentBtn = document.createElement('svg');
        commentBtn.setAttribute('onclick', 'commentclick(this)');
        commentBtn.setAttribute('class', 'commentbtn m-2');
        commentBtn.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        commentBtn.setAttribute('height', '22');
        commentBtn.setAttribute('width', '22');
        commentBtn.setAttribute('viewBox', '0 0 512 512');
        commentBtn.innerHTML = '<path fill="#000000" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6...'; // Example SVG icon for comment button
        return commentBtn;
    }

    // Method to handle the like button toggle
    toggleLike(heartRec, activeLike) {
        heartRec.style.display = heartRec.style.display === "none" ? "block" : "none";
        activeLike.style.display = activeLike.style.display === "none" ? "block" : "none";
    }

    // Create the comment section (hidden by default)
    createCommentSection() {
        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');
        commentSection.style.display = 'none'; // Initially hidden
        commentSection.innerHTML = `<input type="text" placeholder="Add a comment..."> <button>Add Comment</button>`;
        return commentSection;
    }
}



// ---------------------------------------------------------------
// ----------------------------------------------------------------




document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for all comment icons
    const commentIcons = document.querySelectorAll("#commentIcon");
  
    commentIcons.forEach(function(icon, index) {
      icon.addEventListener("click", function() {
        // Get the corresponding comment section for this post
        const commentSection = document.querySelectorAll(".comment")[index];
  
        // Toggle the display of the comment section
        if (commentSection.style.display === "none" || commentSection.style.display === "") {
          commentSection.style.display = "block"; // Show comment section
        } else {
          commentSection.style.display = "none"; // Hide comment section
        }
      });
    });
  });


  
// Function to show the comment input section using event delegation
document.addEventListener('click', function (event) {
    // Check if the clicked element is a comment icon (SVG)
    if (event.target && event.target.matches('.comment-icon')) {
        // Get the post ID from the nearest parent
        const postId = event.target.closest('.post_card').id.split('-')[1];
        
        // Toggle visibility of the comment input for this post
        const commentSection = document.getElementById(`commentSection-${postId}`);
        commentSection.style.display = (commentSection.style.display === 'none' || commentSection.style.display === '') ? 'block' : 'none';
    }
});



function addComment() {
    // Get the comment input field and its value
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();
    
    if (commentText !== "") {
      // Create a new div to hold the comment
      var newComment = document.createElement("div");
      newComment.classList.add("comment-item");
      newComment.innerText = commentText;

      // Append the new comment to the comment list
      var commentList = document.getElementById("commentList");
      commentList.appendChild(newComment);

      // Clear the comment input field after submission
      commentInput.value = "";
    }
  }

  

  
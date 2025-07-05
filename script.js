// This would be replaced with actual data storage and retrieval
let reviews = [];
let discussions = [];

function submitReview() {
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('reviewText').value;
    if (reviewText.trim() === '') {
        alert('Please enter a review.');
        return;
    }
    reviews.push({ rating, reviewText });
    displayReviews();
    document.getElementById('reviewForm').reset();
}

function displayReviews() {
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';
    reviews.forEach((review, index) => {
        reviewsDiv.innerHTML += `<p><strong>Rating: ${review.rating} Stars</strong><br>${review.reviewText}</p><hr>`;
    });
}

function submitDiscussion() {
    const discussionText = document.getElementById('discussionText').value;
    if (discussionText.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    discussions.push(discussionText);
    displayDiscussions();
    document.getElementById('discussionForm').reset();
}

function displayDiscussions() {
    const discussionDiv = document.getElementById('discussion');
    discussionDiv.innerHTML = '';
    discussions.forEach((message, index) => {
        discussionDiv.innerHTML += `<p>${message}</p><hr>`;
    });
}

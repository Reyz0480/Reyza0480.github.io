function postComment() {
    var commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        var commentList = document.getElementById('commentList');
        
        // Membuat elemen komentar baru
        var newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        
        // Membuat elemen span untuk menampilkan komentar
        var commentContent = document.createElement('span');
        commentContent.textContent = commentText;
        
        // Menambahkan komentar ke dalam elemen baru
        newComment.appendChild(commentContent);
        
        // Menambahkan komentar ke daftar komentar
        commentList.appendChild(newComment);
        
        // Reset textarea setelah komentar dikirim
        document.getElementById('commentText').value = '';
    } else {
        alert("Komentar tidak boleh kosong!");
    }
}
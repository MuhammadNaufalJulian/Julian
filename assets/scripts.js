
// Ambil elemen switch mode
const switchMode = document.getElementById('switch-mode');
const switchCircle = document.querySelector('.switch-circle');

// Tambahkan event listener untuk klik pada switch mode
switchMode.addEventListener('click', function() {
    // Toggle kelas 'active' pada switch mode
    switchMode.classList.toggle('active');

    // Toggle posisi lingkaran switch
    if (switchMode.classList.contains('active')) {
        switchCircle.style.transform = 'translateX(20px)'; // Sesuaikan dengan posisi ON
        switchCircle.style.backgroundColor = 'rgb(204, 106, 49)'; // Warna ketika ON
        document.body.style.backgroundColor = 'rgb(204, 106, 49)';
        document.getElementById('cover-end').style.backgroundColor = ' rgb(99, 50, 22)';
        document.getElementById('cover-1').style.backgroundColor = 'rgb(145, 75, 34)';
        document.getElementById('cover-2').style.backgroundColor = 'rgb(165, 85, 39)';
        document.getElementById('cover-3').style.backgroundColor = 'rgb(180, 94, 45)';
        document.getElementById('head-switch-mode').style.backgroundColor ='rgb(204, 106, 49)';
        document.getElementById('main').style.backgroundColor = 'rgb(204, 106, 49)';
        document.getElementById('shadow').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('shadow2').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('offside').style.backgroundColor = 'rgb(204,106,49)';
        document.getElementById('language').style.backgroundColor = 'rgb(204,106,49)';
        document.getElementById('footer').style.color = 'rgb(204, 106, 49)';
        document.getElementById('name').style.color = 'rgb(204, 106, 49)';
        document.getElementById('name').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('role').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('role').style.color = 'rgb(204, 106, 49)';
        document.getElementById('hello').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('h1-header-sosmed').style.color = 'rgb(99, 50, 22)';
        document.getElementById('square-image1').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('square-image2').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('square-image3').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('square-image4').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('row-1').style.backgroundColor ='rgb(99, 50, 22)';
        document.getElementById('about-me').style.backgroundColor =' rgb(99, 50, 22)';
        document.getElementById('about-me').style.color ='rgb(204, 106, 49)';
        document.getElementById('offside2').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('offside2-h2').style.color ='rgb(204, 106, 49)';
        document.getElementById('container-read-mode').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('hire-me').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('call-me').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('call-me').style.color = 'rgb(204, 106, 49)';
        document.getElementById('hire2').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('projects').style.backgroundColor = 'rgb(99, 50, 22)';
        document.getElementById('projects').style.color = 'rgb(158, 158, 158)';
        document.getElementById('hr1').style.backgroundColor ='rgb(99, 50, 22)';
        document.getElementById('hr2').style.backgroundColor ='rgb(99, 50, 22)';
        document.getElementById('head').style.backgroundImage = "url('assets/images/waBgOn.webp')";
        document.getElementById('head').style.color ='rgb(158, 158, 158)';
        document.getElementById('h').style.backgroundColor ='rgb(99, 50, 22)';
        document.getElementById('h').style.color ='rgb(204, 106, 49)';
        document.getElementById('whatsapp').style.backgroundImage = "url('assets/images/waBgOn.webp')";
        document.getElementById('choose').style.backgroundColor = 'black';
        document.getElementById('choose').style.color = 'white';
        document.getElementById('choose2').style.backgroundColor = 'black';
        document.getElementById('choose2').style.color = 'white';
        document.getElementById('whatsapp-h1').style.backgroundColor = 'black';
        document.getElementById('m').style.backgroundImage = "url('assets/images/waBgOn.webp')";
        document.getElementById('end-contack').style.backgroundColor ='rgb(99, 50, 22)';
        document.getElementById('end-contack').style.color ='rgb(204, 106, 49)';
        document.getElementById('rate-star').style.color = 'rgb(204, 106, 49)';


//Container-read-mode hover mode on
        document.getElementById('container-read-mode').addEventListener('mouseout', function() {
            this.style.backgroundColor = 'rgb(158, 158, 158)';
        });

        
document.getElementById('container-read-mode').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'rgb(204, 106, 49)';
});
        


//hire-me hover mode on
document.getElementById('hire-me').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'rgb(158, 158, 158)';
});

document.getElementById('hire-me').addEventListener('mouseover', function() {
this.style.backgroundColor = '#45a049';
});


//hire2 hover mode on
document.getElementById('hire2').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'rgb(158, 158, 158)';
});

document.getElementById('hire2').addEventListener('mouseover', function() {
this.style.backgroundColor = '#45a049';
});

  // Menambahkan style untuk navigation-1, navigation-2, dan navigation-3
  ['navigation-1', 'navigation-2', 'navigation-3',].forEach(navClass => {
    let navigationElements = document.getElementsByClassName(navClass);
    for (let i = 0; i < navigationElements.length; i++) {
        navigationElements[i].style.backgroundColor = 'rgb(204, 106, 49)';
        // Menambahkan efek hover
        navigationElements[i].addEventListener('mouseover', function() {
            this.style.color = 'rgb(204, 106, 49)';
            this.style.backgroundColor = 'black';
        });
        navigationElements[i].addEventListener('mouseout', function() {
            this.style.color = ''; // Mengembalikan warna default
            this.style.backgroundColor = 'rgb(204, 106, 49)'; // Mengembalikan warna background ketika ON
        });
    }
});

//Mengubah style project mode on
document.querySelectorAll('.head-projects, .cover-project, .cover-project-1, .cover-project-2, .cover-project-3, .shadow-project, .shadow-project-2').forEach(function(element) {
    if (element.classList.contains('head-projects')) {
        element.style.backgroundColor = 'rgb(204, 106, 49)';
    } else if (element.classList.contains('cover-project')) {
        element.style.backgroundColor = 'rgb(99, 50, 22)';
    } else if (element.classList.contains('cover-project-1')) {
        element.style.backgroundColor = 'rgb(145, 75, 34)';
    } else if (element.classList.contains('cover-project-2')) {
        element.style.backgroundColor = 'rgb(165, 85, 39)';
    } else if (element.classList.contains('cover-project-3')) {
        element.style.backgroundColor = 'rgb(180, 94, 45)';
    } else if (element.classList.contains('shadow-project') || element.classList.contains('shadow-project-2')) {
        element.style.backgroundColor = 'rgb(99, 50, 22)';
    }
});


   





    } else {
        switchCircle.style.transform = 'translateX(0)'; // Kembali ke posisi awal (OFF)
        switchCircle.style.backgroundColor = 'rgb(158, 158, 158)'; // Warna ketika OFF
        document.body.style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('cover-end').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('cover-1').style.backgroundColor = 'rgb(100, 100, 100)';
        document.getElementById('cover-2').style.backgroundColor = 'rgb(121, 121, 121)';
        document.getElementById('cover-3').style.backgroundColor = 'rgb(133, 133, 133)';
        document.getElementById('head-switch-mode').style.backgroundColor ='rgb(158, 158, 158)';
        document.getElementById('main').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('shadow').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('shadow2').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('offside').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('language').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('footer').style.color = 'rgb(158, 158, 158)';
        document.getElementById('name').style.color = 'rgb(158, 158, 158)';
        document.getElementById('name').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('role').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('role').style.color = 'rgb(158, 158, 158)';
        document.getElementById('hello').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('h1-header-sosmed').style.color = 'rgb(75, 75, 75)';
        document.getElementById('square-image1').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('square-image2').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('square-image3').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('square-image4').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('row-1').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('about-me').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('about-me').style.color ='rgb(158, 158, 158)';
        document.getElementById('offside2').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('offside2-h2').style.color ='rgb(158, 158, 158)';
        document.getElementById('container-read-mode').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('hire-me').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('call-me').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('call-me').style.color = 'rgb(158, 158, 158)';
        document.getElementById('hire2').style.backgroundColor = 'rgb(158, 158, 158)';
        document.getElementById('projects').style.backgroundColor = 'rgb(75, 75, 75)';
        document.getElementById('projects').style.color = 'rgb(158, 158, 158)';
        document.getElementById('hr1').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('hr2').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('head').style.backgroundImage = "url('assets/images/whatsapp\ bg.jpg')";
        document.getElementById('head').style.color ='rgb(204, 106, 49)';
        document.getElementById('h').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('h').style.color ='rgb(158, 158, 158)';
        document.getElementById('whatsapp').style.backgroundImage = "url('assets/images/whatsapp\ bg.jpg')";
        document.getElementById('choose').style.backgroundColor = 'white';
        document.getElementById('choose').style.color = 'black';
        document.getElementById('choose2').style.backgroundColor = 'white';
        document.getElementById('choose2').style.color = 'black';
        document.getElementById('whatsapp-h1').style.backgroundColor = 'white';
        document.getElementById('m').style.backgroundImage = "url('assets/images/whatsapp\ bg.jpg')";
        document.getElementById('end-contack').style.backgroundColor ='rgb(75, 75, 75)';
        document.getElementById('end-contack').style.color ='rgb(158, 158, 158)';
        document.getElementById('rate-star').style.color = 'rgb(158, 158, 158)';



// Mengembalikan style untuk navigation-1, navigation-2, dan navigation-3
['navigation-1', 'navigation-2', 'navigation-3'].forEach(navClass => {
    let navigationElements = document.getElementsByClassName(navClass);
    for (let i = 0; i < navigationElements.length; i++) {
        navigationElements[i].style.backgroundColor = ''; // Mengembalikan warna background default
        // Menghapus efek hover
        navigationElements[i].addEventListener('mouseover', function() {
            this.style.color = ''; // Mengembalikan warna default
            this.style.backgroundColor = ''; // Mengembalikan warna background default
        });
        navigationElements[i].addEventListener('mouseout', function() {
            this.style.color = ''; // Mengembalikan warna default
            this.style.backgroundColor = ''; // Mengembalikan warna background default
        });
    }
});


//Container-read-mode hover default
document.getElementById('container-read-mode').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'rgb(158, 158, 158)';
});

document.getElementById('container-read-mode').addEventListener('mouseover', function() {
this.style.backgroundColor = 'rgb(204, 106, 49)';
});

//hire-me hover default
document.getElementById('hire-me').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#45a049';
});

document.getElementById('hire-me').addEventListener('mouseover', function() {
this.style.backgroundColor = 'rgb(204, 106, 49)';
});


//hire2 hover mode default
document.getElementById('hire2').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'rgb(204, 106, 49)';
});

document.getElementById('hire2').addEventListener('mouseover', function() {
this.style.backgroundColor = '#45a049';
});


//style mode default projects
document.querySelectorAll('.head-projects, .cover-project, .cover-project-1, .cover-project-2, .cover-project-3, .shadow-project, .shadow-project-2').forEach(function(element) {
    if (element.classList.contains('head-projects')) {
        element.style.backgroundColor = 'rgb(158, 158, 158)';
    } else if (element.classList.contains('cover-project')) {
        element.style.backgroundColor = 'rgb(75, 75, 75)';
    } else if (element.classList.contains('cover-project-1')) {
        element.style.backgroundColor = 'rgb(100, 100, 100)';
    } else if (element.classList.contains('cover-project-2')) {
        element.style.backgroundColor = 'rgb(121, 121, 121)';
    } else if (element.classList.contains('cover-project-3')) {
        element.style.backgroundColor = 'rgb(133, 133, 133)';
    } else if (element.classList.contains('shadow-project') || element.classList.contains('shadow-project-2')) {
        element.style.backgroundColor = 'rgb(75, 75, 75)';
    }
});

}
});





// Fungsi untuk menampilkan bagian tertentu dan menyembunyikan bagian lainnya
function showSection(sectionId) {
    // Daftar semua bagian
    const sections = ['landing-page', 'aboutMe', 'my-projects', 'contack'];

    // Loop melalui semua bagian dan atur display
    sections.forEach(function(id) {
        document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
    });
}

// Fungsi untuk hire-me yang membawa ke halaman contack
function hireMe() {
    showSection('contack');
}

// Mengatur fungsi untuk memuat halaman dengan menampilkan bagian 'main'
document.addEventListener('DOMContentLoaded', function() {
    showSection('landing-page');
});




function changeStyle(clickedIndex) {
    const navElements = document.querySelectorAll('.navigation');

    // Initialize an array to hold the z-index and padding values
    let zIndexValues = [3, 4, 5]; // Default z-index values
    let paddingValues = ['10px', '15px', '20px']; // Default padding values
    let topValues =['3.6vh', '2.1vh', '0.8vh'];

    // Adjust the z-index and padding values based on the clicked element
    if (clickedIndex === 1) {
        zIndexValues = [5, 4, 3]; // Navigation 1 clicked
        paddingValues = ['20px', '15px', '10px'];
        topValues = ['3.6vh', '2.1vh', '0.8vh'];
    } else if (clickedIndex === 2) {
        zIndexValues = [4, 5, 3]; // Navigation 2 clicked
        paddingValues = ['15px', '20px', '10px'];
        topValues = ['2.1vh', '3.6vh', '0.8vh'];
    } else if (clickedIndex === 3) {
        zIndexValues = [3, 4, 5]; // Navigation 3 clicked
        paddingValues = ['10px', '15px', '20px'];
        topValues = ['0.8vh', '2.1vh', '3.6vh'];
    }

    // Apply the new z-index and padding values to the elements
    navElements.forEach((nav, index) => {
        nav.style.zIndex = zIndexValues[index];
        nav.style.paddingBottom = paddingValues[index];
        nav.style.top = topValues[index];
    });
}








// Fungsi untuk membuka URL media sosial
function instagram() {
    window.location.href = 'https://www.instagram.com/naufalpal28_';
}

function youtube() {
    window.location.href = 'https://www.youtube.com/@im.lookii';
}

function tiktok() {
    window.location.href = 'https://www.tiktok.com/@lookiicode?_r=1&_d=degcd7008iljc7&sec_uid=MS4wLjABAAAAycP2KbQ2XK6XGXEbFviOS-d9KBWbh1y_VcjzsanJVvIGg243uKV_0fdhdau4ZPWs&share_author_id=6875043363495265282&sharer_language=id&source=h5_t&u_code=degcd5a9e58iif&timestamp=1716311170&user_id=6875043363495265282&sec_user_id=MS4wLjABAAAAycP2KbQ2XK6XGXEbFviOS-d9KBWbh1y_VcjzsanJVvIGg243uKV_0fdhdau4ZPWs&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7224997507595667227&share_link_id=ee3a16c3-ff17-467e-8db9-d3aa02a609f7&share_app_id=1180&ugbiz_name=Account&ug_btm=b8727%2Cb4907&social_share_type=5';
}

function linkedin() {
    window.location.href = 'https://www.linkedin.com/in/muhammad-naufal-julian-8a5845294/';
}

// Fungsi untuk mengirim pesan WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    if (phoneNumber && message) {
        const formattedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert('Nomor WhatsApp dan pesan tidak boleh kosong!');
    }
});

// Fungsi untuk membuka dan menutup overlay mode baca
document.getElementById('readModeButton').addEventListener('click', function() {
    document.getElementById('readModeOverlay').style.display = 'flex';
    document.querySelector('.read-mode-off').style.display = 'none';
    document.querySelector('.read-mode-on').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('readModeOverlay').style.display = 'none';
    document.querySelector('.read-mode-off').style.display = 'block';
    document.querySelector('.read-mode-on').style.display = 'none';
});

// Mengambil data dari localStorage atau menginisialisasi array kosong jika tidak ada
let ratings = JSON.parse(localStorage.getItem('ratings')) || [];
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// Fungsi untuk menghitung rata-rata rating
function calculateAverageRating() {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum / ratings.length).toFixed(1);
}

// Fungsi untuk memperbarui tampilan rata-rata rating
function updateAverageRating() {
    const averageRating = calculateAverageRating();
    document.getElementById('average-rating').textContent = `${averageRating}`;
}

// Fungsi untuk memuat dan menampilkan komentar
function loadComments() {
    const commentsDisplay = document.getElementById('comments-display');
    commentsDisplay.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentsDisplay.appendChild(commentElement);
    });
}

// Fungsi untuk menambahkan komentar baru
function submitComment() {
    const commentBox = document.getElementById('comment-box');
    const commentText = commentBox.value;

    if (commentText.trim() !== "") {
        comments.push(commentText);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
        commentBox.value = "";
    } else {
        alert("Please write a comment before submitting.");
    }
}

// Function untuk menampilkan alert dengan pesan dan emote
function showAlert(message, emoji) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.innerHTML = `<span class="emoji">${emoji}</span> ${message}`;
    
    document.body.appendChild(alertBox);
    alertBox.style.display = 'block';

    // Menghilangkan alert setelah beberapa detik
    setTimeout(() => {
        alertBox.style.display = 'none';
        alertBox.remove();
    }, 5000); // 3 detik
}

// Event listener untuk setiap input rating
document.querySelectorAll('.rating input').forEach(input => {
    input.addEventListener('change', () => {
        ratings.push(Number(input.value));
        localStorage.setItem('ratings', JSON.stringify(ratings));
        updateAverageRating();

        // Panggil showAlert dengan pesan dan emote
        showAlert(`Terima Kasih Sudah Memberi Rating ${input.value} stars.`, '🙏');
    });
});


// Memuat data saat halaman dimuat
updateAverageRating();
loadComments();

// Fungsi untuk membuka overlay tampilan komentar
function openCommentDisplayOverlay() {
    document.getElementById('commentDisplayOverlay').style.display = 'flex';
    displayComments(); // Tampilkan komentar setiap kali overlay dibuka
}

// Fungsi untuk menutup overlay tampilan komentar
function closeCommentDisplayOverlay() {
    document.getElementById('commentDisplayOverlay').style.display = 'none';
}

// Fungsi untuk membuka overlay pengiriman komentar
function openOverlay() {
    document.getElementById('commentOverlay').style.display = 'flex';
}

// Fungsi untuk menutup overlay pengiriman komentar
function closeOverlay() {
    document.getElementById('commentOverlay').style.display = 'none';
}

// Fungsi untuk mengirim komentar
function submitComment() {
    const userName = document.getElementById('user-name').value.trim();
    const commentText = document.getElementById('comment-box').value.trim();

    if (userName === "") {
        alert('Please enter your name.');
        return;
    }

    if (commentText === "") {
        alert('Please write a comment before submitting.');
        return;
    }

    // Simpan data ke Local Storage
    saveComment(userName, commentText);

    // Reset form
    document.getElementById('user-name').value = "";
    document.getElementById('comment-box').value = "";

    // Tutup overlay
    closeOverlay();

    alert('Comment submitted successfully!');
}

// Fungsi untuk menyimpan komentar ke Local Storage
function saveComment(userName, commentText) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.unshift({ userName: userName, commentText: commentText }); // Tambah di awal array
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments(); // Tampilkan komentar setelah menyimpan
}

// Fungsi untuk menampilkan komentar yang tersimpan di Local Storage
function displayComments() {
    const commentsDisplay = document.getElementById('comments-display');
    commentsDisplay.innerHTML = '';

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.userName}</strong>: ${comment.commentText}`;
        commentsDisplay.appendChild(commentElement);
    });
}

// Tampilkan komentar yang tersimpan saat halaman dimuat pertama kali
document.addEventListener('DOMContentLoaded', function() {
    displayComments();
});


//Tampilkan viewer
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memperbarui tampilan viewer
    function updateViewerCount() {
        let viewerCount = localStorage.getItem('viewerCount') || 0;
        viewerCount = parseInt(viewerCount) + 1; // Tambah 1 setiap kali halaman dimuat

        localStorage.setItem('viewerCount', viewerCount);

        const formattedCount = viewerCount >= 1000 ? (viewerCount / 1000).toFixed(1) + 'k' : viewerCount;
        document.getElementById('average-viewer').textContent = formattedCount;
    }

    updateViewerCount();
});

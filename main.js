function on() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block"; // Hiển thị overlay ngay lập tức
    setTimeout(() => {
        overlay.classList.add("show"); // Thêm lớp "show" để bắt đầu hiệu ứng
    }, 10); // Thêm lớp "show" sau một thời gian ngắn để hiệu ứng được kích hoạt
}

function off() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("show"); // Loại bỏ lớp "show" khi đóng overlay
    overlay.classList.add("hide"); // Thêm lớp "hide" để bắt đầu hiệu ứng đóng
    setTimeout(() => {
        overlay.style.display = "none"; // Ẩn đi overlay sau khi hiệu ứng đóng hoàn tất
        overlay.classList.remove("hide"); // Loại bỏ lớp "hide"
    }, 500); // Thời gian trùng với thời gian transition của CSS
}

function on1() {
    const overlay2 = document.getElementById("overlay2");
    overlay2.style.display = "block"; // Hiển thị overlay ngay lập tức
    setTimeout(() => {
        overlay2.classList.add("show"); // Thêm lớp "show" để bắt đầu hiệu ứng
    }, 10); // Thêm lớp "show" sau một thời gian ngắn để hiệu ứng được kích hoạt
}

function off1() {
    const overlay2 = document.getElementById("overlay2");
    overlay2.classList.remove("show"); // Loại bỏ lớp "show" khi đóng overlay
    overlay2.classList.add("hide"); // Thêm lớp "hide" để bắt đầu hiệu ứng đóng
    setTimeout(() => {
        overlay2.style.display = "none"; // Ẩn đi overlay2 sau khi hiệu ứng đóng hoàn tất
        overlay2.classList.remove("hide"); // Loại bỏ lớp "hide"
    }, 500); // Thời gian trùng với thời gian transition của CSS
}

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.nav');
  
    // Sử dụng IntersectionObserver để theo dõi khi nav xuất hiện trong viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Ngừng quan sát sau khi đã hiển thị
        }
      });
    });
  
    observer.observe(nav); // Bắt đầu quan sát thanh nav
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sectionContent = document.querySelector(".section-content");
    const sectionTitles = document.querySelectorAll(".section-title");
    const ctaButton = document.querySelector(".cta");

    // Hiển thị toàn bộ nội dung chính
    setTimeout(() => {
        sectionContent.classList.add("show");
    }, 200);

    // Hiển thị từng tiêu đề
    sectionTitles.forEach((title, index) => {
        setTimeout(() => {
            title.classList.add("show");
        }, 400 + index * 200); // Độ trễ giữa các tiêu đề
    });

    // Hiển thị nút CTA
    setTimeout(() => {
        ctaButton.classList.add("show");
    }, 1000); // Nút xuất hiện cuối cùng
});

document.addEventListener("DOMContentLoaded", () => {
    const sectionTitles = document.querySelectorAll(".section-title2");
    // Hiển thị toàn bộ nội dung chính
    setTimeout(() => {
        sectionContent.classList.add("show");
    }, 200);

    // Hiển thị từng tiêu đề
    sectionTitles.forEach((title, index) => {
        setTimeout(() => {
            title.classList.add("show");
        }, 400 + index * 200); // Độ trễ giữa các tiêu đề
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sectionTitles = document.querySelectorAll(".timeline-title");
    // Hiển thị toàn bộ nội dung chính
    setTimeout(() => {
        sectionContent.classList.add("show");
    }, 200);

    // Hiển thị từng tiêu đề
    sectionTitles.forEach((title, index) => {
        setTimeout(() => {
            title.classList.add("show");
        }, 400 + index * 200); // Độ trễ giữa các tiêu đề
    });
});

// Page lich su

let bg = document.getElementById("bg")
    let moon = document.getElementById("moon")
    let pyramid = document.getElementById("pyramid")
    let road = document.getElementById("road")
    let text = document.getElementById("text")
    window.addEventListener('scroll', function() {
        var value = window.scrollY;
        bg.style.top = value * 0.5 + 'px'
        moon.style.left = value * 0.5 + 'px'
        pyramid.style.top = -value * 0.15 + 'px'
        road.style.top = value * 0.15 + 'px'
        text.style.top = value * 1 + 'px'

})
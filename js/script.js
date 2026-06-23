// 1. Lấy các phần tử HTML thông qua ID
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

// 2. Kiểm tra xem các phần tử có tồn tại trên trang không trước khi thực hiện
if (helloBtn && helloResult) {
    
    // 3. Lắng nghe sự kiện "click" trên nút bấm
    helloBtn.addEventListener("click", function () {
        // Thay đổi nội dung văn bản của thẻ <p> khi click
        helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb!";
    });
    
}
/**
 * WEBSITE NHA TRANG TRAVEL - JAVASCRIPT TỔNG HỢP
 * Đầy đủ 5+ chức năng tương tác theo tiêu chí đạt yêu cầu.
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // CHỨC NĂNG 1: Ẩn/hiện nội dung giới thiệu (Bài 04)
  // ==========================================
  const toggleAboutBtn = document.getElementById("toggleAboutBtn");
  const aboutContent = document.getElementById("aboutContent");

  if (toggleAboutBtn && aboutContent) {
    toggleAboutBtn.addEventListener("click", function () {
      aboutContent.classList.toggle("hidden");
      if (aboutContent.classList.contains("hidden")) {
        toggleAboutBtn.textContent = "Xem thêm nội dung ➔";
      } else {
        toggleAboutBtn.textContent = "Thu gọn nội dung ➔";
      }
    });
  }

  // ==========================================
  // CHỨC NĂNG 2: Menu Responsive trên Mobile (Bài 05)
  // ==========================================
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      mainMenu.classList.toggle("active");
    });
  }

  // ==========================================
  // CHỨC NĂNG 3: Đổi màu/Chủ đề giao diện (Bài 06)
  // ==========================================
  const themeSelect = document.getElementById("themeSelect");

  if (themeSelect) {
    themeSelect.addEventListener("change", function () {
      document.body.classList.remove("dark-mode", "warm-mode");
      if (themeSelect.value !== "") {
        document.body.classList.add(themeSelect.value);
      }
    });
  }

  // ==========================================
  // CHỨC NĂNG 4: Tìm kiếm nhanh nội dung (Bài 07)
  // ==========================================
  const searchInput = document.getElementById("searchInput");
  const searchItems = document.querySelectorAll(".search-item");

  if (searchInput && searchItems.length > 0) {
    searchInput.addEventListener("keyup", function () {
      const keyword = searchInput.value.toLowerCase().trim();

      searchItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(keyword)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // ==========================================
  // CHỨC NĂNG 5: Bộ lọc danh mục ảnh Gallery (Bài 08)
  // ==========================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(function (item) {
          const category = item.dataset.category;
          if (filter === "all" || category === filter) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // ==========================================
  // CHỨC NĂNG 6: Kiểm tra Form liên hệ trước khi gửi (Bài 09)
  // ==========================================
  const contactForm = document.getElementById("contactForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && fullName && email && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Chặn hành vi load lại trang

      const nameValue = fullName.value.trim();
      const emailValue = email.value.trim();

      formMessage.style.display = "block";

      if (nameValue === "") {
        formMessage.textContent = "Vui lòng nhập họ tên.";
        formMessage.style.color = "red";
        formMessage.style.backgroundColor = "#fee2e2";
        return;
      }

      if (emailValue === "" || !emailValue.includes("@")) {
        formMessage.textContent = "Vui lòng nhập email hợp lệ.";
        formMessage.style.color = "red";
        formMessage.style.backgroundColor = "#fee2e2";
        return;
      }

      // Khi form hoàn toàn hợp lệ
      formMessage.textContent = "Thông tin đã hợp lệ. Cảm ơn bạn!";
      formMessage.style.color = "green";
      formMessage.style.backgroundColor = "#dcfce7";
      
      contactForm.reset(); // Làm sạch form
    });
  }

});

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

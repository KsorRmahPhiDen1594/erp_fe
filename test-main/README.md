# 🚀 SOCIOMATIC - by <span style="color:#6C63FF;">Phi Đen</span>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Frontend-Next.js-000000?logo=next.js&style=for-the-badge" alt="Next.js" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Styles-TailwindCSS,ShadcnUI,SCSS-06B6D4?logo=tailwindcss&style=for-the-badge" alt="TailwindCSS" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-v20.14.0-339933?logo=node.js&style=for-the-badge" alt="Node.js" />
  </a>
  <a href="https://github.com/KsorRmahPhiDen1594/sociomatic/stargazers">
    <img src="https://img.shields.io/github/stars/KsorRmahPhiDen1594/sociomatic?color=FFD700&style=for-the-badge" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/KsorRmahPhiDen1594/sociomatic/issues">
    <img src="https://img.shields.io/github/issues/KsorRmahPhiDen1594/sociomatic?color=FF4444&style=for-the-badge" alt="GitHub Issues" />
  </a>
</p>

---

## 🌟 Về SOCIOMATIC IT Agency

SOCIOMATIC là một dự án sáng tạo được phát triển bởi **Phi Đen**, một IT Agency tiên phong trong việc xây dựng các giải pháp web hiện đại. Dự án tận dụng sức mạnh của:

- ✅ **Next.js** - Framework frontend với hiệu suất cao và SEO tối ưu.
- ✅ **TailwindCSS, ShadcnUI, và SCSS** - Công cụ thiết kế giao diện linh hoạt và chuyên nghiệp.

> 📌 **Tầm nhìn**: Xây dựng một nền tảng mã nguồn mở chuyên nghiệp, dễ dàng mở rộng, và hỗ trợ cộng đồng phát triển công nghệ.

---

## 🎯 Tính năng nổi bật

| **Biểu tượng** | **Tính năng**                                                            |
| -------------- | ------------------------------------------------------------------------ |
| 🎨             | **Thiết kế đỉnh cao**: Giao diện thân thiện với TailwindCSS và ShadcnUI. |
| 🚀             | **Hiệu suất vượt trội**: Tối ưu với Next.js và Framer Motion.            |
| 🌐             | **Tích hợp mạnh mẽ**: Hỗ trợ Cloudinary, Stripe, và Nodemailer.          |
| 🛠️             | **Triển khai dễ dàng**: Sẵn sàng với Docker và môi trường linh hoạt.     |

---

## ⚙️ Công nghệ sử dụng

| **Thành phần**   | **Công nghệ**                               |
| ---------------- | ------------------------------------------- |
| 🎨 **Frontend**  | Next.js, React, TailwindCSS, ShadcnUI, SCSS |
| 📦 **Framework** | TypeScript                                  |
| 🛠️ **Công cụ**   | ESLint, Prettier, Docker, Vite              |
| 🌐 **Tích hợp**  | Cloudinary, Stripe, Nodemailer, Zod         |

---

## 📂 Cấu trúc dự án

Dự án được tổ chức khoa học với các thư mục chính:
sociomatic/
├── app/ # Routes và pages (about-us, case-studies, contact-us, etc.)
│ ├── about-us/
│ ├── case-studies/
│ └── ...
├── components/ # Các thành phần tái sử dụng
├── lib/ # Thư viện tùy chỉnh (middleware.ts, dockerignore, etc.)
├── middleware/ # Logic middleware cho Next.js
├── public/ # Tài nguyên tĩnh (hình ảnh, SVGs)
│ └── images/
│ └── backgrounds/
├── next.config.js # Cấu hình Next.js
├── package.json # Quản lý dependencies và scripts
├── Dockerfile # Hỗ trợ triển khai container
├── .env.example # Mẫu file môi trường
├── tailwind.config.js # Cấu hình TailwindCSS
└── README.md # Tài liệu dự án

---

## 🚀 Hướng dẫn cài đặt & phát triển

### 🌱 Yêu cầu hệ thống

- **Node.js**: v20.14.0 hoặc cao hơn
- **npm** hoặc **pnpm**
- **Git**

### ⚙️ Cài đặt

1. Clone repository:
   git clone https://github.com/KsorRmahPhiDen1594/sociomatic.git
   cd sociomatic
   Cài đặt dependencies:

npm install
Sao chép và cấu hình file môi trường:

cp .env.example .env.development
Cập nhật .env.development với các biến môi trường (ví dụ: API keys từ Cloudinary, Stripe).

npm run dev --turbopack
Truy cập http://localhost:3000 trên trình duyệt.
🛠️ Triển khai với Docker
Xây dựng image Docker:

docker build -t sociomatic:latest .
Chạy container:

docker run -p 3000:3000 sociomatic:latest
Kiểm tra tại http://localhost:3000.
🤝 Hướng dẫn đóng góp (Contribution Guideline)
✖️ Không sử dụng: CSS thuần ngoài file globals.scss.
✅ Sử dụng: Hệ thống design từ globals.scss.
✅ Ưu tiên: TailwindCSS cho styling.
✅ Tuân thủ: Nguyên tắc DRY (Don't Repeat Yourself).
✅ Thêm: Bình luận chi tiết với cú pháp /\*\* _/ (tránh JSX, giữ khoảng cách một dòng).
✅ Thảo luận: Trong Issues trước khi tạo Pull Request nếu có thắc mắc.
✅ Bắt buộc: Cú pháp ES6+.
✅ Sử dụng: Thẻ HTML semantic trong JSX.
✅ Sử dụng: SVGs dưới dạng TSX component, lưu hình nền tại /public/images/backgrounds/_.svg và áp dụng inline với TailwindCSS.
Happy contributing! 🚀

📢 Code Review & Hỗ trợ
CodeRabbit Reviews: Tự động kiểm tra chất lượng mã nguồn trong pull request.
Hỗ trợ: Thảo luận hoặc báo cáo lỗi tại Issues.
📝 Thông tin về tác giả
Tên: Phi Đen
Vai trò: Lập trình viên fullstack, người sáng lập SOCIOMATIC IT Agency
Liên hệ: Facebook
Dự án: SOCIOMATIC - IT Agency tập trung phát triển web hiện đại
Mục tiêu: Xây dựng giải pháp công nghệ sáng tạo và hỗ trợ cộng đồng qua mã nguồn mở
Cập nhật lần cuối: 06:09 PM +07, Thứ Ba, 10/06/2025
✨ Lưu ý bổ sung
Thay thế các biến môi trường trong .env.development trước khi chạy.
Đảm bảo quyền truy cập GitHub và Docker nếu triển khai.
Góp ý hoặc đóng góp luôn được chào đón!

### Tính năng nổi bật của phiên bản này

1. **Thiết kế chuyên nghiệp**:
   - Sử dụng `style=for-the-badge` cho badge, tạo hiệu ứng 3D đẹp mắt.
   - Bố cục rõ ràng với tiêu đề, bảng, và mã lệnh được định dạng kỹ lưỡng.
2. **Thông tin đầy đủ**:
   - Thêm badge stars và issues để tăng tính tương tác.
   - Hướng dẫn chi tiết cho cài đặt, triển khai, và đóng góp.
3. **Tối ưu hóa hiển thị**:
   - Sử dụng bảng để liệt kê tính năng và công nghệ, dễ đọc hơn.
   - Liên kết trực tiếp đến tài nguyên (Next.js, TailwindCSS, v.v.).
4. **Thời gian cập nhật**:
   - Cập nhật chính xác đến 06:09 PM +07, 10/06/2025.

### Hướng dẫn sử dụng

1. Sao chép toàn bộ nội dung trên và dán vào # 🚀 SOCIOMATIC - by <span style="color:#6C63FF;">Phi Đen</span>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Frontend-Next.js-000000?logo=next.js&style=for-the-badge" alt="Next.js" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Styles-TailwindCSS,ShadcnUI,SCSS-06B6D4?logo=tailwindcss&style=for-the-badge" alt="TailwindCSS" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-v20.14.0-339933?logo=node.js&style=for-the-badge" alt="Node.js" />
  </a>
  <a href="https://github.com/KsorRmahPhiDen1594/sociomatic/stargazers">
    <img src="https://img.shields.io/github/stars/KsorRmahPhiDen1594/sociomatic?color=FFD700&style=for-the-badge" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/KsorRmahPhiDen1594/sociomatic/issues">
    <img src="https://img.shields.io/github/issues/KsorRmahPhiDen1594/sociomatic?color=FF4444&style=for-the-badge" alt="GitHub Issues" />
  </a>
</p>

---

## 🌟 Về SOCIOMATIC IT Agency

SOCIOMATIC là một dự án sáng tạo được phát triển bởi **Phi Đen**, một IT Agency tiên phong trong việc xây dựng các giải pháp web hiện đại. Dự án tận dụng sức mạnh của:

- ✅ **Next.js** - Framework frontend với hiệu suất cao và SEO tối ưu.
- ✅ **TailwindCSS, ShadcnUI, và SCSS** - Công cụ thiết kế giao diện linh hoạt và chuyên nghiệp.

> 📌 **Tầm nhìn**: Xây dựng một nền tảng mã nguồn mở chuyên nghiệp, dễ dàng mở rộng, và hỗ trợ cộng đồng phát triển công nghệ.

---

## 🎯 Tính năng nổi bật

| **Biểu tượng** | **Tính năng**                                                            |
| -------------- | ------------------------------------------------------------------------ |
| 🎨             | **Thiết kế đỉnh cao**: Giao diện thân thiện với TailwindCSS và ShadcnUI. |
| 🚀             | **Hiệu suất vượt trội**: Tối ưu với Next.js và Framer Motion.            |
| 🌐             | **Tích hợp mạnh mẽ**: Hỗ trợ Cloudinary, Stripe, và Nodemailer.          |
| 🛠️             | **Triển khai dễ dàng**: Sẵn sàng với Docker và môi trường linh hoạt.     |

---

## ⚙️ Công nghệ sử dụng

| **Thành phần**   | **Công nghệ**                               |
| ---------------- | ------------------------------------------- |
| 🎨 **Frontend**  | Next.js, React, TailwindCSS, ShadcnUI, SCSS |
| 📦 **Framework** | TypeScript                                  |
| 🛠️ **Công cụ**   | ESLint, Prettier, Docker, Vite              |
| 🌐 **Tích hợp**  | Cloudinary, Stripe, Nodemailer, Zod         |

---

## 📂 Cấu trúc dự án

Dự án được tổ chức khoa học với các thư mục chính:
sociomatic/
├── app/ # Routes và pages (about-us, case-studies, contact-us, etc.)
│ ├── about-us/
│ ├── case-studies/
│ └── ...
├── components/ # Các thành phần tái sử dụng
├── lib/ # Thư viện tùy chỉnh (middleware.ts, dockerignore, etc.)
├── middleware/ # Logic middleware cho Next.js
├── public/ # Tài nguyên tĩnh (hình ảnh, SVGs)
│ └── images/
│ └── backgrounds/
├── next.config.js # Cấu hình Next.js
├── package.json # Quản lý dependencies và scripts
├── Dockerfile # Hỗ trợ triển khai container
├── .env.example # Mẫu file môi trường
├── tailwind.config.js # Cấu hình TailwindCSS
└── README.md # Tài liệu dự án

---

## 🚀 Hướng dẫn cài đặt & phát triển

### 🌱 Yêu cầu hệ thống

- **Node.js**: v20.14.0 hoặc cao hơn
- **npm** hoặc **pnpm**
- **Git**

### ⚙️ Cài đặt

1. Clone repository:
   git clone https://github.com/KsorRmahPhiDen1594/sociomatic.git
   cd sociomatic
   Cài đặt dependencies:

npm install
Sao chép và cấu hình file môi trường:

cp .env.example .env.development
Cập nhật .env.development với các biến môi trường (ví dụ: API keys từ Cloudinary, Stripe).

npm run dev --turbopack
Truy cập http://localhost:3000 trên trình duyệt.
🛠️ Triển khai với Docker
Xây dựng image Docker:

docker build -t sociomatic:latest .
Chạy container:

docker run -p 3000:3000 sociomatic:latest
Kiểm tra tại http://localhost:3000.
🤝 Hướng dẫn đóng góp (Contribution Guideline)
✖️ Không sử dụng: CSS thuần ngoài file globals.scss.
✅ Sử dụng: Hệ thống design từ globals.scss.
✅ Ưu tiên: TailwindCSS cho styling.
✅ Tuân thủ: Nguyên tắc DRY (Don't Repeat Yourself).
✅ Thêm: Bình luận chi tiết với cú pháp /\*\* _/ (tránh JSX, giữ khoảng cách một dòng).
✅ Thảo luận: Trong Issues trước khi tạo Pull Request nếu có thắc mắc.
✅ Bắt buộc: Cú pháp ES6+.
✅ Sử dụng: Thẻ HTML semantic trong JSX.
✅ Sử dụng: SVGs dưới dạng TSX component, lưu hình nền tại /public/images/backgrounds/_.svg và áp dụng inline với TailwindCSS.
Happy contributing! 🚀

📢 Code Review & Hỗ trợ
CodeRabbit Reviews: Tự động kiểm tra chất lượng mã nguồn trong pull request.
Hỗ trợ: Thảo luận hoặc báo cáo lỗi tại Issues.
📝 Thông tin về tác giả
Tên: Phi Đen
Vai trò: Lập trình viên fullstack, người sáng lập SOCIOMATIC IT Agency
Liên hệ: Facebook
Dự án: SOCIOMATIC - IT Agency tập trung phát triển web hiện đại
Mục tiêu: Xây dựng giải pháp công nghệ sáng tạo và hỗ trợ cộng đồng qua mã nguồn mở
Cập nhật lần cuối: 06:09 PM +07, Thứ Ba, 10/06/2025
✨ Lưu ý bổ sung
Thay thế các biến môi trường trong .env.development trước khi chạy.
Đảm bảo quyền truy cập GitHub và Docker nếu triển khai.
Góp ý hoặc đóng góp luôn được chào đón!

### Tính năng nổi bật của phiên bản này

1. **Thiết kế chuyên nghiệp**:
   - Sử dụng `style=for-the-badge` cho badge, tạo hiệu ứng 3D đẹp mắt.
   - Bố cục rõ ràng với tiêu đề, bảng, và mã lệnh được định dạng kỹ lưỡng.
2. **Thông tin đầy đủ**:
   - Thêm badge stars và issues để tăng tính tương tác.
   - Hướng dẫn chi tiết cho cài đặt, triển khai, và đóng góp.
3. **Tối ưu hóa hiển thị**:
   - Sử dụng bảng để liệt kê tính năng và công nghệ, dễ đọc hơn.
   - Liên kết trực tiếp đến tài nguyên (Next.js, TailwindCSS, v.v.).
4. **Thời gian cập nhật**:
   - Cập nhật chính xác đến 06:09 PM +07, 10/06/2025.

### Hướng dẫn sử dụng

1. Sao chép toàn bộ nội dung trên và dán vào file `README.md` trong thư mục `sociomatic`.
2. Đẩy lên GitHub:
   git add README.md
   git commit -m "Cập nhật README.md với thiết kế chuyên nghiệp"
   git push origin main
   Kiểm tra tại https://github.com/KsorRmahPhiDen1594/sociomatic.
file `README.md` trong thư mục `sociomatic`.
2. Đẩy lên GitHub:
   git add README.md
   git commit -m "Cập nhật README.md với thiết kế chuyên nghiệp"
   git push origin main
   Kiểm tra tại https://github.com/KsorRmahPhiDen1594/sociomatic.

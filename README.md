# Personal Portfolio - Interactive Book CV

Một website CV cá nhân độc đáo với hiệu ứng lật trang sách 3D, được xây dựng bằng React.

## ✨ Tính năng

- 📖 **Hiệu ứng sách 3D**: Giao diện CV dưới dạng quyển sách với hiệu ứng lật trang mượt mà
- 🎬 **Animation xuất hiện**: Sách xuất hiện với hiệu ứng 3D ấn tượng khi tải trang
- 🔄 **Lật trang tự động**: Tự động lật trang về đầu sau khi xuất hiện hoàn toàn
- 📱 **Responsive**: Thiết kế thích ứng với các kích thước màn hình khác nhau
- 🎨 **UI hiện đại**: Sử dụng gradient, shadow và transitions mượt mà
- 📄 **Nhiều trang**: Bao gồm Profile, Work Experience, Education, Skills, Services, Portfolio, và Contact

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. Clone repository:
```bash
git clone https://github.com/longtn232003/Personal-Portfolio.git
cd Personal-Portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở chế độ development:
```bash
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem trong trình duyệt.

4. Build cho production:
```bash
npm run build
```

## 🛠️ Công nghệ sử dụng

- **React** - Framework JavaScript
- **CSS3** - Animations & 3D transforms
- **Boxicons** - Icon library
- **Google Fonts (Poppins)** - Typography

## 📂 Cấu trúc dự án

```
cv/
├── public/
│   ├── index.html
│   ├── photo.jpg          # Ảnh profile
│   └── ...
├── src/
│   ├── App.js             # Component chính
│   ├── App.css            # Styles & animations
│   ├── script.js          # Logic lật trang & animations
│   └── index.js           # Entry point
└── package.json
```

## 🎯 Các tính năng chính

### Hiệu ứng Animation
- **Book Appearance**: Sách xuất hiện với scale và rotation 3D (1.5s)
- **Page Turning**: Lật trang với transform rotateY và transition mượt mà
- **Opening Animation**: Tự động lật tất cả trang về đầu khi load

### Tương tác
- Nút Next/Prev để lật trang thủ công
- Nút "Contact Me" lật đến trang cuối
- Nút "Back to Profile" quay về trang đầu
- Hover effects trên buttons và cards

## 📝 Tùy chỉnh

### Thay đổi thông tin cá nhân
Chỉnh sửa file `src/App.js`:
- Cập nhật tên, title, social media links
- Thay đổi nội dung các section (Experience, Education, Skills, etc.)

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `src/App.css`:
```css
:root {
  --bg-color: #081b29;
  --main-color: #00abf0;
  --text-color: #333;
  /* ... */
}
```

### Điều chỉnh animation timing
Trong `src/script.js`, thay đổi:
```javascript
const bookAppearDelay = 1500; // Thời gian chờ animation xuất hiện sách
```

## 📜 Scripts có sẵn

### `npm start`
Chạy app ở chế độ development mode.

### `npm test`
Chạy test suite.

### `npm run build`
Build app cho production vào thư mục `build`.

### `npm run eject`
**Lưu ý: đây là thao tác một chiều!**

## 👨‍💻 Tác giả

**Đỗ Hoàng Long**
- Facebook: [@hoang.long.191730](https://www.facebook.com/hoang.long.191730)
- GitHub: [@longtn232003](https://github.com/longtn232003)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Icons from [Boxicons](https://boxicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

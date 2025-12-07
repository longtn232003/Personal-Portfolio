// Hiệu ứng opening - lật tất cả trang về trang đầu
export const openingAnimation = () => {
    const pages = document.querySelectorAll('.book-page.page-right');
    const totalPages = pages.length;
    
    // Đợi hiệu ứng xuất hiện của sách hoàn tất (1500ms) trước khi bắt đầu lật trang
    const bookAppearDelay = 1500;
    
    // Lật từng trang từ cuối về đầu
    pages.forEach((_, index) => {
        setTimeout(() => {
            pages[totalPages - 1 - index].classList.remove('turn');
            
            setTimeout(() => {
                pages[totalPages - 1 - index].style.zIndex = 10 + index;
            }, 500);
        }, bookAppearDelay + (index + 1) * 200 + 100);
    });
};

// turn pages when click next or prev button
export const initPageTurn = () => {
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (el.classList.contains('back')) {
                // Nút prev (back) - lật trang ngược lại
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            }
            else {
                // Nút next - lật trang sang
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        };
    });
};

// contact me button when click
export const initContactMe = () => {
    const contactMeBtn = document.querySelector('.btn.contact-me');
    const pages = document.querySelectorAll('.book-page.page-right');
    const profilePage = document.querySelector('.book-page.page-left');

    if (contactMeBtn) {
        contactMeBtn.onclick = () => {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');

                    setTimeout(() => {
                        page.style.zIndex = 20 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        };
    }
};

// back profile button
export const initBackProfile = () => {
    const backProfileBtn = document.querySelector('.back-profile');
    const pages = document.querySelectorAll('.book-page.page-right');

    if (backProfileBtn) {
        backProfileBtn.onclick = (e) => {
            e.preventDefault();
            
            // Lật từng trang từ cuối về đầu
            pages.forEach((_, index) => {
                setTimeout(() => {
                    pages[pages.length - 1 - index].classList.remove('turn');

                    setTimeout(() => {
                        pages[pages.length - 1 - index].style.zIndex = 10 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        };
    }
};

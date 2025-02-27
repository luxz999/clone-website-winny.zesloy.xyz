function injectContent(elementId) {
    const htmlContent = `
        <div class="social-icons">
            <div class="icon-item">
                <img src="./image/nitro.gif">
                <div class="tooltip">ไนโตร</div>
            </div>
            <div class="icon-item">
                <img src="./image/hypesquad.gif">
                <div class="tooltip">กิจกรรม Hypesquad</div>
            </div>
            <div class="icon-item">
                <img src="./image/bage4.png">
                <div class="tooltip">ผู้สนับสนุนแรกเริ่ม</div>
            </div>
            <div class="icon-item">
                <img src="./image/booster.gif">
                <div class="tooltip">การบูสเซิร์ฟเวอร์</div>
            </div>
            <div class="icon-item">
                <img src="./image/bage3.png">
                <div class="tooltip">username#0</div>
            </div>
            <div class="icon-item">
                <img src="./image/developer.gif">
                <div class="tooltip">ผู้พัฒนาที่ให้บริการอยู่</div>
            </div>
            <div class="icon-item">
                <img src="./image/ff.png">
                <div class="tooltip">Discord Bug Hunter</div>
            </div>
            <div class="icon-item">
                <img src="./image/bage8.png">
                <div class="tooltip">ทำเควสต์สำเร็จแล้ว</div>
            </div>
        </div>
    `;

    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
        targetElement.className = "social";
    } else {
        console.error(`Element with id '${elementId}' not found`);
    }
}

injectContent('social');
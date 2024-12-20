const balloon = document.getElementById('balloon');
let currentSize = 200;
let colorIndex = 0;
const colors = ['red', 'green', 'blue'];
const maxSize = 420;
const minSize = 200;

// เปลี่ยนสี
function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
}

// เพิ่มขนาด balloon
function growBalloon() {
    if (currentSize < maxSize) {
        currentSize += 10;
    } else {
        // ระเบิด balloon และ reset กลับไปที่ขนาดเดิม
        currentSize = 200;
    }
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    changeColor();
}

// balloon เล็กลงเมื่อเลื่อนเมาส์ออก
function shrinkBalloon() {
    if (currentSize > minSize) {
        currentSize -= 5;
    }
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', growBalloon);
balloon.addEventListener('mouseleave', shrinkBalloon);
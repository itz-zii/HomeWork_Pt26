const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image")
btnEl.addEventListener("click", () => {
    errorEl.innerText = "";
    imageEl.innerText = "";
    if (!inputEl.value.trim()) {
        errorEl.innerText = "Vui lòng nhập link ảnh";
        return;
    }
    // imageEl.innerHTML = `<img src="${inputEl.value}" />`;
    // Tạo ra Element Node từ js --> Đưa cây DOM
    const img = document.createElement("img");
    img.src = inputEl.value; //Cập nhật thuộc tính cho node
    // imageEl.innerText = ""; //Xoá nội dung bên trong của thẻ div có class là image
    imageEl.append(img); //Thêm vào cuối của Element
    inputEl.value = ""; //Xoá value trong input
});
//classList
// const contentEl = document.querySelector(".content");

// console.log(contentEl.className);

//1. Thêm class ---> add()
// contentEl.classList.add("block-1", "block-2");

//2. Thay thế class --> replace
// contentEl.classList.replace("block-1", "content-1");

//3. Xoá class
// contentEl.classList.remove("block-2");

//4. Toggle
// - Nếu chưa có class --> Thêm mới
// - Nếu có class --> Xoá
// contentEl.classList.toggle("active")

//5. contains(class) --> Trả về true nếu class tồn tại

// const allItems = document.querySelectorAll("ul li");
// // console.log(allItems);

// allItems.forEach((item) => {
//     const btn = item.querySelector("button");

//     // const span = item.querySelector("span");
//     // console.log(btn);
//     // console.log(span);
//     btn.addEventListener("click", () => {
//         const itemActive = document.querySelector("ul li.active");

//         item.classList.toggle("active");

//         if (itemActive) {
//             itemActive.classList.remove("active");
//             const btnActive = itemActive.querySelector("button");
//             btnActive.innerText = "show";
//         }

//         if (item.classList.contains("active")) {
//             btn.innerText = "hide";
//         } else {
//             btn.innerText = "show";
//         }
//     });
// });

// console.log()


//DOM CSS
// const contentEl = document.querySelector('.content');
// // console.log(contentEl.style);

// Object.assign(contentEl.style, {
//     fontStyle: "italic",
//     backgroundColor: "yellow",
// });

// contentEl.style.color = null;

//Event object
// - clientX, clientY
// - offsetX, offsetY
// const btn = document.querySelector("btn");
// btn.addEventListener("click", (e) => {
//     console.log(e);
// });

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
    // console.log(e.key);
// });

//preventDefault(): Ngăn chặn hành động mặc định của thẻ html

// const aEl = document.querySelector('a');
// aEl.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(e);
// })

// const formEl = document.querySelector('form');
// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit");
// });
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     alert("Không được chuột phải");
// });

// const boxEl = document.querySelector(".box");
// const btnEl = document.querySelector("button");
// boxEl.addEventListener("click", () => {
//     console.log("box clicked");
// });
// btnEl.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("button clicked");
// })

const sidebarEl = document.querySelector(".js-sidebar");
const resizeEl = document.querySelector(".js-resize");

//1. mousedown --> flag
//2. mousemove --> check flag
//3. mouseup --> flag

resizeEl.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", handler);
    document.body.classList.remove("select-none");
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handler);
    document.body.classList.remove("select-none");
});

const handler = (e) => {
    let x = e.clientX;
    if ( x < 180 ) {
        x = 180;
    }
    if ( x > 350 ) {
        x = 350;
    }
sidebarEl.style.width = `${e.clientX}px`;    
};


/*
DOM Navigation
*/
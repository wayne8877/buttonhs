// 这是轮播图
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const indicators = document.querySelectorAll('#boxtwo a');
    let currentIndex = 0;
    let timer;
    indicators[0].classList.add('active');
    function goToIndex(index) {
        currentIndex = index;
        list.style.transform = `translateX(-${currentIndex * 33.3333}%)`;
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    function startAutoPlay() {
        timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % 3;
            goToIndex(currentIndex);
        }, 2000);
    }
    function stopAutoPlay() {
        clearInterval(timer);
    }
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function(e) {
            e.preventDefault();
            goToIndex(index);
        });
    });
    const box2 = document.getElementById('box2');
    box2.addEventListener('mouseenter', stopAutoPlay);
    box2.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();
});
// 这是菜单栏
// 超链接容器
const sidebar=document.querySelector(".sidebar")
// 打开开关
const menu=document.querySelector(".menu")
// 关闭开关
const closeBtn=document.querySelector(".close-btn")
const main=document.querySelector(".main")
menu.addEventListener("click",function(){
    sidebar.classList.add("open")
})
closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("open")
})
main.addEventListener("click",function(){
    sidebar.classList.remove("open")
})
// 二级菜单栏
const linkFirst=document.querySelector(".link-first")
linkFirst.addEventListener("click",
    function(){
        linkFirst.classList.toggle("active")
    }
)

const linkHead=document.querySelector(".link-head")
linkHead.addEventListener("click",
    function(){
        linkHead.classList.toggle("active")
    }
)


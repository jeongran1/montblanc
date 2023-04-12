$('#fullpage').fullpage({
    anchors : ['page1','page2','page3','page4','page5','page6','page7'],
    //options here
    autoScrolling:true,
    // sectionsColor:['#ccc','#bbb','#999','#888','#333'],
    navigation:true,
    navigationPosition: 'right',
    navigationTooltips:['main','new arrivals','best items','collection','gift'],
    slidesNavigation: true,
    
});
// 서브메뉴 나오면 다른 서브메뉴 사라짐

$(document).ready(function(){
    $('.main_menu > a').click(function(){
        $(this).next().slideToggle().parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().children('ul').slideUp();
    })
})

new Swiper(".sw-basic",{
    autoplay: true,
    loop: true,
    breakpoints:{
        1024: {
            slidesPerView:3,
        },
        768:{
            slidesPerView:2,
        },
        325:{
            slidesPerView:1,
        },
        0:{
            slidesPerView:0,
        },
    },
    slidesPerView:3,
    spaceBetween: 20,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev"
    },

})


//모바일 메뉴 기능 
    //.mb-bt 를 저장해서 활용하자
    $('.mb-bt').click(function(e){
        e.preventDefault();
        // .mb-bt = this 로 대신사용 가능
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
        $('.mb-menu>li').height(54)
    })
    //화면사이즈체크
    $(window).resize(function(){
        //윈도우 너비를 체크해줌
        let temp = $(window).width();
        // console.log(temp);
        if(temp > 1400){
            $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        }else {
            $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
            $('.all-menu-mask').removeClass('all-menu-mask-active')
        }
        })
    //모바일 메뉴 펼치기
    //1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    //2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    //3. 펼쳐진 서브메뉴의 높이값
    // 모바일 하이트는 배열로 선언되어져있음  
    let mb_submenu_height = [];
    
    
    //4. 높이값 계산을 실행
    // 배열명.forEach(function(item,index){할일})    
        // $.each(배열명,function(index, item){할일})
        $.each(mb_submenu, function(index){
            //각가의 .mb-submenu로 가서 11의 갯수를 파악한다. 
            let count = $(this).find('li').length;
            // console.log(count)
            //최종결과저장 (51px * count +22)
            mb_submenu_height[index]=43*count+22;
        })
        // console.log(mb_submenu_height)
        let mb_li = $('.mb-menu > li')
        $.each(mb_mainmenu, function(index){
            $(this).click(function(e){
                e.preventDefault();
               
                //mb-mainmenu-open이 있으면 펼치고 없으면 닫기
                $(this).toggleClass('mb-mainmenu-open')
                $(this).parent().siblings().children().removeClass('mb-mainmenu-open')
                let active = $(this).hasClass('mb-mainmenu-open')
                if(active) { 
                    //클릭된 li>a (depth1)의 ul의 높이값을 temp에 저장
                    let temp = mb_submenu_height[index]
                    //해당요소의 높이부여
                    mb_li.eq(index).height(temp+43)
                    mb_li.eq(index).siblings().height(43);
                }else {
                    //클릭이 안된경우 
                    mb_li.eq(index).height(43)
                }
            })
        })
        //모바일 메뉴 배경을 클릭시 사라짐 
        const mb_menu_mask = $('.mb-menu-mask')
        mb_menu_mask.click(function(){
            //모바일 버튼 기능 초기화
            $('.mb-bt').removeClass('mb-bt-open')
            $('.mb-menu-mask').removeClass('mb-menu-mask-active')
            $('.mb-nav').removeClass('mb-nav-open')
            $('.mb-menu>li').height(54)
            $('.mb-mainmenu').removeClass('mb-mainmenu-open')
        })
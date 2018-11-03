var allButtons=$('#buttons>span')
for(let i= 0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index=$(x.currentTarget).index();
        var p=index*-600
        $('#images').css({
            transform:'translateX('+p+'px)'
        })
        n=index
        allButtons.eq(n)
        .addClass('red')
        .siblings('.red').removeClass('red')
    })
}
var n=0;
allButtons.eq(n%3).trigger('click')
.addClass('red')
.siblings('.red').removeClass('red')
var timer = setInterval(()=>{
    allButtons.eq(n%3).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
    n+=1;
},1000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timer);
})
$('.window').on('mouseleave',function(){
   timer = setInterval(()=>{
        allButtons.eq(n%3).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
        n+=1;
    },1000)
})

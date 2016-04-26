var n,c=0,wid
  function autoPlay()
  {
    c++
    if(c>=n) c = 0
    $(".bigPics li").hide()
    $(".bigPics li").eq(c).fadeTo(300,1)
    $(".focus h2").hide()
    $(".focus h2").eq(c).show()
  }
  
   var nn,cc=0,wid2
 function autoPlay1()
 {
     cc++
     if(cc>=nn) cc = 0
     $(".num li").eq(cc).addClass("active")
      $(".num li").eq(cc).siblings().removeClass("active")
      $(".newsPics li").hide()
      $(".newsPics li").eq(cc).fadeTo(300,1)
      $(".newsList h2").hide()
      $(".newsList h2").eq(cc).show()
   
 }
 
  $(function(){
    n = $(".bigPics img").size()
    $(".focus h2").eq(0).show()
    $(".block").fadeTo(0,0.6)
    wid = window.setInterval("autoPlay()",3000)
	
	//点击播放
  $(".next,.prev").hover(
      function(){
	     window.clearInterval(wid)
	  },
	  function(){
	     wid = window.setInterval("autoPlay()",3000)
	  })
  $(".next").click(function(){
	   c++
	   if(c>=n) c = 0
	   $(".bigPics li").hide()
	   $(".bigPics li").eq(c).fadeTo(300,1)
	   $(".focus h2").hide()
	   $(".focus h2").eq(c).show()		
	})
	
	$(".prev").click(function(){
	   c--
	   if(c < 0) c = n-1
	   $(".bigPics li").hide()
	   $(".bigPics li").eq(c).fadeTo(300,1)
	   $(".focus h2").hide()
	   $(".focus h2").eq(c).show()
	   })

  /* 导航条 */
   $(".header ul>li:gt(0)").hover(
     function(){
        $(this).children("a").addClass("cur")
      $(this).children("ul").show()
      
     },
     function(){
       $(this).children("a").removeClass("cur")
     $(this).children("ul").hide()
     }
  )
  })
 
 /* 新闻轮播 start */
 $(function(){
     nn = $(".newsPics img").size()
   $(".newsList h2").eq(0).show()
   $(".newsBlock").fadeTo(0,0.6)
   $(".num li").hover(
   function(){
      window.clearInterval(wid2)
      var i = $(this).index()
      cc = i
      $(this).addClass("active")
      $(this).siblings().removeClass("active")
      $(".newsPics li").hide()
      $(".newsPics li").eq(i).fadeTo(300,1)
      $(".newsList h2").hide()
      $(".newsList h2").eq(i).show()
   },
   function(){
      wid2 = window.setInterval("autoPlay1()",3000)
   }
   )
   
   wid2 = window.setInterval("autoPlay1()",3000)
 }
 /* 新闻轮播 end */
)
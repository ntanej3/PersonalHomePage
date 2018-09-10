WebApp = {

    init:function(){
        $(document).ready(function(){
            
            
            
            $("nav.universal .list ul li.1").addClass('active');;

            $("#aboutBox").fadeIn(1000);
            
            WebApp.createScrollSpy();
            
            $("nav.universal .list ul li").click(function(){
                    $("nav.universal .list ul li").removeClass("active");
                    $(this).addClass("active");  
                    if($(this).hasClass("1")){
                        $("html, body").animate({ scrollTop: 0 });
                    }
            });
            
            $("#education ul li div h4").click(function(){
                if($(this).nextAll("p").hasClass("hidden")){
                    $(this).nextAll("p").removeClass("hidden").slideDown();
                }
                else{
                    $(this).nextAll("p").addClass("hidden").slideUp();
                }
            });
            $("#experience ul li div h4").click(function(){
                if($(this).nextAll("p").hasClass("hidden")){
                    $(this).nextAll("p").removeClass("hidden").slideDown();
                }
                else{
                    $(this).nextAll("p").addClass("hidden").slideUp();
                }
            });
            
            $("#git_follow_button").click(function(){
                $.ajax({
                    url: 'https://api.github.com/user/following/:ajagtian',
                    type: 'PUT',
                    success: function(result) {
                        $(this).text("Following");
                    },
                    error: function(){
                        $("#git_follow_button").text("Error");
                        $("#git_follow_button").css("background-color","red");
                        $("#git_follow_button").attr("title","Requires Authentication");
                    }
                    
                });
            });
            $("#in_invite_button").click(function(){
                $.ajax({
                        type: "POST",
                        url: "https://api.linkedin.com/v1/people/~/mailbox ",
                        dataType: "xml",
                        contentType: "application/xml",
                        data:"<mailbox-item><recipients><recipient><person path='/people/email=jagtiani.akshay@gmail.com'><first-name>Akshay</first-name><last-name>Jagtiani</last-name></person></recipient></recipients><subject>Invitation to Connect</subject><body>Please join my professional network on LinkedIn.</body><item-content><invitation-request><connect-type>friend</connect-type></invitation-request></item-content></mailbox-item>",
                        success: function (res) {
                            $("#in_invite_button").text("Connected");
                        },
                        error: function (res) {
                            $("#in_invite_button").text("Error").css("background-color","red").attr("title","Requires Authentication");
                        }
                });
            });
            
            });
        
    },
    
    createScrollSpy : function(){
        $('.introtext').on('scrollSpy:enter', function() {
            cosole.log("enter");
            $("nav.universal .list ul li.1").parent().addClass(active);
        });
        $('#resumef').on('scrollSpy:exit', function() {
            console.log("exit");
            $("nav.universal .list ul li.1").parent().removeClass(active);
        });
       
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });
         $('#aboutBox').on('scrollSpy:enter', function() {
            $(".list ul li.1").parent().addClass(active);
        });
        $('#narrows').on('scrollSpy:exit', function() {
            $(".list ul li.1").parent().removeClass(active);
        });

        

    }
};
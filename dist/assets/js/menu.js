//show and Hide menu Items

    function home1(){


            console.log("home1");

            var home_navbar = document.getElementById("home_navbar");
            var home = document.getElementById("home");
            var home_menu = document.getElementById("home_menu");
            var home_des = document.getElementById("home_des");
            var home_show =  document.getElementById("home_show").checked ;

            home_show == true ? home_navbar.classList.remove("hidden") : home_navbar.classList.add("hidden");
            home_show == true ? home.classList.remove("hidden") : home.classList.add("hidden");
            home_show == true ? home_menu.classList.remove("hidden") : home_menu.classList.add("hidden");
            home_show == true ? home_des.classList.remove("hidden") : home_des.classList.add("hidden");

            console.log(home_show, "home_show");  
    }

    function about1(){
            var about_navbar = document.getElementById("about_navbar");
            var about = document.getElementById("about");
            var about_edit = document.getElementById("about_edit_menu");
            var about_show=document.getElementById("about_show").checked;
            about_show == true ?  about_navbar.classList.remove("hidden") : about_navbar.classList.add("hidden");
            about_show == true ?  about.classList.remove("hidden") :    about.classList.add("hidden");
            about_show == true ?  about_edit.classList.remove("hidden") :   about_edit.classList.add("hidden");
            console.log(about_show, "about_show");
    }


    function service(){

        var service_navbar = document.getElementById("service_navbar");
        var service = document.getElementById("features");
        var service_edit = document.getElementById("service_edit");
        var service_show=document.getElementById("service_show").checked;

        service_show == true ?  service_navbar.classList.remove("hidden") : service_navbar.classList.add("hidden");
        service_show == true ?  service.classList.remove("hidden") :    service.classList.add("hidden");
        service_show == true ?  service_edit.classList.remove("hidden") :   service_edit.classList.add("hidden");
    }

    // Auto display In Text of menu items 
    function display()
    {                    
        let discription=document.getElementById("tbuser").value;
        document.getElementById("output1").innerText=discription;          
    }

    function about_display_txt()
    {
        let add_service_title=document.getElementById("add_service_title").value;
        document.getElementById("about-txt1").innerText=add_service_title;

        let title3=document.getElementById("add_description_about").value;
        document.getElementById("about-txt3").innerText=title3;
    }



    function about_text_display()
    {
        let title1=document.getElementById("title1").value;
        document.getElementById("about-txt1").innerText=title1;

        let title2=document.getElementById("title2").value;
        document.getElementById("about-txt3").innerText=title2;

        let title3=document.getElementById("title3").value;
        document.getElementById("about-txt3").innerText=title3;
    }







    function updateTopInfoBGColorClick(){
        var bgColorValue = document.getElementById("top_info_bg_color_selected");
        var TOP_INFO_DIV = document.getElementById("navbar");
        console.log(bgColorValue.value);
        TOP_INFO_DIV.className="navbar bg-["+bgColorValue.value+"]";
        //TOP_INFO_DIV.style.backgroundColor=bgColorValue.value;
        console.log(TOP_INFO_DIV.className);

        localStorage.setItem("navbar" , "navbar bg-["+bgColorValue.value+"]");    
    }



    function add_services(){
             alert("Are you sure you want to add service");
            var service = document.getElementById("add_service"),
            form = document.getElementsByTagName("form")[0],
            ContestantNum = 1,
            i;
            for(i=0; i<ContestantNum; i++){
                var clone = service.cloneNode(true);
                form.appendChild(clone);
                service.classList.remove("hidden");

            let add_service_title=document.getElementById("add_service_title").value;
             document.getElementById("display_service_title").innerText=add_service_title; 

             let add_service_description=document.getElementById("add_service_description").value;
             document.getElementById("display_service_description").innerText=add_service_description; 
            }
                
    }



    

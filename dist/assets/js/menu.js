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



         function portfolio(){
            var porfolio_navbar = document.getElementById("porfolio_navbar");
            var portfolio = document.getElementById("portfolio");
            var portfolio_edit = document.getElementById("portfolio_edit");
            var portfolio_show =document.getElementById("portfolio_show").checked;

            portfolio_show == true ?  porfolio_navbar.classList.remove("hidden") : porfolio_navbar.classList.add("hidden");
            portfolio_show == true ?  portfolio.classList.remove("hidden") :    portfolio.classList.add("hidden");
            portfolio_show == true ?  portfolio_edit.classList.remove("hidden") :   portfolio_edit.classList.add("hidden");
         }

        
        // Auto display In Text of menu items 
        function home_display()
        {                    
            //const output1=document.getElementById("output1");
            let home_title=document.getElementById("title1").value;
            if(home_title==null || home_title==""){
                home_title="Sample Title";
            }
    
            localStorage.setItem("Home_title", home_title);    
            var Home_Title = localStorage.getItem("Home_title");
            document.getElementById("output1").innerText=Home_Title;
            let home_discription=document.getElementById("add_home_description").value;

            if(home_discription==null || home_discription==""){
                home_discription="Sample Description"

            }
            localStorage.setItem("Home_Description", home_discription);
            var home_discription_store=localStorage.getItem("Home_Description");
            document.getElementById("home_des").innerText=home_discription_store; 

        }



        //About Company Start of editable display
        function about_display_txt()
        {
            let add_service_title=document.getElementById("add_service_title").value;
            localStorage.setItem("About", add_service_title);
            
            if(add_service_title==null || add_service_title==""){
               add_service_title ="About US";

            }
           
            var About= localStorage.getItem("About");
            document.getElementById("about-txt1").innerText=About;




            let title3=document.getElementById("add_description_about").value;
            localStorage.setItem("Company_Story", title3);
            if(title3==null || title3==""){
                title3= "comapany story";
            }
            var company_story=localStorage.getItem("Company_Story");
            document.getElementById("about-txt3").innerText=company_story; 
        }//end of about display
        

        // start of the Background nav Color 
        function updateTopInfoBGColorClick(){
            var bgColorValue = document.getElementById("top_info_bg_color_selected");
            var TOP_INFO_DIV = document.getElementById("navbar");
            console.log(bgColorValue.value);
            TOP_INFO_DIV.className="navbar bg-["+bgColorValue.value+"]";
            //TOP_INFO_DIV.style.backgroundColor=bgColorValue.value;
            console.log(TOP_INFO_DIV.className);

            localStorage.setItem("navbar" , "navbar bg-["+bgColorValue.value+"]");    
        }//end of the nav Color




        // Start of Service module 
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
                     localStorage.setItem("Service" , add_service_title);
                     if(add_service_title==null || add_service_title==""){
                        add_service_title="None"

                     }
                     var Service_title=localStorage.getItem("Service");
                     document.getElementById("display_service_title").innerText=Service_title;

                    // document.getElementById("display_service_title").innerText=add_service_title; 

                    let add_service_description=document.getElementById("add_service_description").value;
                    document.getElementById("display_service_description").innerText=add_service_description; 
                }
                                
        }//end of Service                              

                function display_stategy(){

                        let strategy=document.getElementById("add_strategy").value;
                        document.getElementById("strategy").innerText=strategy; 
                                    
                }

                    function display_development(){
                        let strategy=document.getElementById("add_development").value;
                        document.getElementById("development").innerText=strategy; 
                        
                    }                       

                    function display_launch(){

                        let strategy=document.getElementById("add_launch").value;
                        document.getElementById("launch").innerText=strategy; 
                        
                    }






                    // Pending Cannot add portfolio
                    function add_portfolio(){
                        alert("Are you sure you want to add this service");
                        var portfolio = document.getElementById("add_portfolio");
                        let portfolio2 = document.getElementsById("portfolio2")[0],
                        ContestantNum = 1,
                        i;
                        for(i=0; i<ContestantNum; i++){
                            var clone = portfolio.cloneNode(true);
                            portfolio2.appendChild(clone);
                            portfolio.classList.remove("hidden");
    
                            // let add_service_title=document.getElementById("add_service_title").value;
                            // document.getElementById("display_service_title").innerText=add_service_title; 
                            
                            // let add_service_description=document.getElementById("add_service_description").value;
                            // document.getElementById("display_service_description").innerText=add_service_description; 
                        }
                    }

            
              
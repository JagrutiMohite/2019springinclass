
window.fbAsyncInit = function() {
    FB.init({
      appId      : '2271097309799094',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2'
    });
      
    FB.AppEvents.logPageView();   
    /*  
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    */
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   export function Login(){
        return new Promise( (resolve, reject) => {
            FB.login(function(response) {
                console.log(response);
                if(response.status === "connected"){
                    FB.api("me?fields=id,name,email", response2 => {
                        resolve(response2);
                    })
                }else{
                    reject(Error("User did not log in"))
                }
            }, {scope: 'public_profile,email'});
        })
   }
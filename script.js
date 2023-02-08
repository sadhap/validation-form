      `use strict`
      const form = document.getElementById("form");
      const username = document.getElementById("userName");
      const email = document.getElementById("E-mail");
      const password = document.getElementById("password-1");
      const password2 = document.getElementById("password-2");
      const dataTab = document.getElementById('tab');
      const hide = document.getElementById('view');
      const cln = document.getElementById('clear');
      const back = document.getElementById('back');
      const head =  document.getElementById('hder');
     
      
     
        form.addEventListener('submit',e=>{
        e.preventDefault();
        checkInput();
        
     });
      function checkInput(){
          const userNameValue = username.value.trim()
          const emailValue = email.value.trim();
          const PassWord1 = password.value.trim();
          const  PassWord2  = password2.value.trim();
     
      
          if(userNameValue === ''){
              setError(username,'username cannot be blank🙄');
              
          }else if(userNameValue.length < 3){
            setError(username,'username must been 6 characters 🙄');
          }
          else{
              setSuccess(username);
          }
            if(emailValue == ''){
              setError(email,'email cannot be blank🙄');
          }else if( !isEmail(emailValue)){
              setError(email,'not a valid E-Mail😑');
          }else{
              setSuccess(email);
          }
          if(PassWord1 === ''){
              setError(password,'password cannot be blank🙄');
          }else if(PassWord1.length < 8){
            setError(password,' password must be 8 characters');

          }
          else{
              setSuccess(password);
          }
        //   password 2
          if(PassWord2 === ''){
              setError(password2,'confirm password cannot be blank🙄');
          }else if(PassWord1 !== PassWord2)
          {
                 setError(password2,'password does not match😥');
          }else{
              setSuccess(password2);
          }
          function setSuccess(input)
          {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
            // document.querySelector('.fullname').innerText = userNameValue;
            // document.querySelector('.email').innerText = emailValue;
            // document.querySelector('.password').innerText = PassWord1;
            // document.getElementById('tab').classList.remove('table');
            tableData();
       
         
            
      
          }
         
          function setError(input,message){
              const formControl = input.parentElement;
              let msg= formControl.querySelector('small');
              msg.innerText= message;
              formControl.className = 'form-control error';
             
          }
          function tableData(){
            document.querySelector('.fullname').innerText = userNameValue;
              document.querySelector('.email').innerText = emailValue;
              document.querySelector('.password').innerText = PassWord1;
              // document.getElementById('tab').classList.remove('table');
        }
        // init();
          
       } 
        function isEmail(email){
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
        
        document.getElementById('done').addEventListener('click',()=>{
        
          document.getElementById('tab').classList.remove('table');
          document.getElementById('one').classList.add('hide');
          document.getElementById('two').classList.add('hide');
          document.getElementById('three').classList.add('hide');
          document.getElementById('four').classList.add('hide');
          document.getElementById('sub').classList.add('hide');
       
          // document.getElementById('done').classList.add('hide');
          // document.getElementById('done').style.display('none');
          cln.classList.remove('clearAll');
          back.classList.remove('goBack');
          head.innerText = "Your Data";
        
      });

      cln.addEventListener('click',()=>{
        document.querySelector('.fullname').innerText = "";
        document.querySelector('.email').innerText = "";
        document.querySelector('.password').innerText = "";
      });
      back.addEventListener('click', ()=>{
      document.getElementById('tab').classList.add('table');
      cln.classList.add('clearAll');
      back.classList.add('goBack');
      head.innerText = "Create Account";
      checkInput();
      })
  
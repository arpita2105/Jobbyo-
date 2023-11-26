const {render}=require('ejs');
const express=require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var connection=require('./connection');                            //require is used to use any modules
const app=express();
const bodyParser=require('body-parser');

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const port=4462;

//View Engine setup
app.set('view engine','ejs');
//add public directory into your project
app.use(express.static('public'));
app.use(express.static('uploads'));

//set Routing
app.get('/',(req,res)=>{
   // res.end("<h1>Hello World</h1>");
   res.render("landing");                                                   // home is the file name
})

//rating
app.get("/rating",(req,res)=>{
   res.render("rating");
})
//post action of review
app.post("/userreview",(req,res)=>{
   var name=req.body.name;
   var star=req.body.hdnstar;
   var mob=req.body.mob;
   connection.query("insert into tbl_star values(?,?,?)",[name,star,mob],(error,result)=>{
      if(error) throw error;
      else
      res.end("<script>alert('Thanks for Review');window.location.href='/rating'</script>")
   })
})
//about
app.get('/about',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("about");
 })
 //job
app.get('/job',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("jobmain");
})
 //help
app.get('/help',(req,res)=>{
    res.render("help1");
 })
 //registration
 app.get('/registration',(req,res)=>{
    res.render("reg");
 })

 //latest jobs
 app.get("/latestjobs",(req,res)=>{
   connection.query("select * from add_job",(error,result)=>{
      if(error) throw error;
      else
      res.render("latestjob",{data:result});
   });
});

//apply job
app.get('/applyjob',(req,res)=>{
   res.render("applyjob");
})

//Routing of jobs inside Pages //accounting job
app.get('/accntjob',(req,res)=>{
   res.render("accntjob");
})
//Routing of jobs inside Pages //banking job
app.get('/bankjob',(req,res)=>{
   res.render("bankjob");
})
//Routing of jobs inside Pages //animation job
app.get('/animationjob',(req,res)=>{
   res.render("animationjob");
})
//Routing of jobs inside Pages //BPO job
app.get('/bpo',(req,res)=>{
   res.render("bpo");
})
//Routing of jobs inside Pages //data science job
app.get('/datasciencejob',(req,res)=>{
   res.render("datasciencejob");
})
//Routing of jobs inside Pages //java job
app.get('/java',(req,res)=>{
   res.render("java");
})
//Routing of jobs inside Pages //marketing job
app.get('/marketingjob',(req,res)=>{
   res.render("marketingjob");
})
//Routing of jobs inside Pages //networking job
app.get('/networkingjob',(req,res)=>{
   res.render("networkingjob");
})
//Routing of jobs inside Pages //seo job
app.get('/seojob',(req,res)=>{
   res.render("seojob");
})
//log
//Routing of jobs inside Pages //software engineering job
app.get('/softwareeng',(req,res)=>{
   res.render("softwareeng");
})
//Routing of jobs inside Pages //teaching job
app.get('/teajob',(req,res)=>{
   res.render("teajob");
})

//Routing of jobs inside Pages //work from homa
app.get('/workhome',(req,res)=>{
   res.render("workhome");
})
//Routing of jobs inside Pages //recent jobs
app.get('/recentjobs',(req,res)=>{
   res.render("recentjobs");
})



 //Routing of admin Zone Pages
app.get('/dashboard',(req,res)=>{
   if(req.session.email!=null)
   {
      res.render("./AdminZone/dashboard");
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
   
})

//Routing of admin Zone Pages//login
app.get('/login',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("./AdminZone/login");
 })
 //Routing of admin Zone Pages//enquiry management
 app.get('/enqmng',(req,res)=>{
   if(req.session.email!=null)
   {
      connection.query("select * from enquiry",(error,result)=>{
         if(result.length>0)
         {
            res.render("./AdminZone/enqmng",{title:' Enquiry Management ',data:result});
         }
         else
         {
            throw error;
         }
      })
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }

 })
 //Routing of admin Zone Pages//job management
 app.get('/jobmng',(req,res)=>{
   if(req.session.email!=null)
   {
      connection.query("select * from add_job",(error,result)=>{
         if(result.length>0)
         {
            res.render("./AdminZone/jobmng",{title:' Job Management ',data:result});
         }
         else
         {
            throw error;
         }
      })
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
 })
 //Routing of admin Zone Pages//user management
 app.get('/usermng',(req,res)=>{
   if(req.session.email!=null)
   {
      connection.query("select * from registration",(error,result)=>{
         if(result.length>0)
         {
            res.render("./AdminZone/usermng",{title:' User Management ',data:result});
         }
         else
         {
            throw error;
         }
      })
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
   
 });

 //Routing of admin Zone Pages//apply user management
 app.get('/aplyusermng',(req,res)=>{
   if(req.session.email!=null)
   {
      connection.query("select * from apply_job",(error,result)=>{
         if(error) throw error;
         res.render('./AdminZone/aplyusermng',{title:'Apply User Management',data:result});
      })
      
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
   
 });
    //Routing of admin Zone Pages//password management
 app.get('/password',(req,res)=>{ 
   if(req.session.email!=null)
   {
      res.render("./AdminZone/password");
      
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
   
 });
  

//Routing of admin Zone Pages//addjob management
app.get('/addjob',(req,res)=>{
   if(req.session.email!=null)
   {
      res.render("./AdminZone/addjob");
   }
   else
   {
      res.end("<script>alert('First Login then goto Next Zone');window.location.href='/login'</script>")
   }
   
 });
 
    
   
 //for logout
 app.get('/logout',function(req,res){
   req.session.destroy();
   res.end("<script>alert('Logout');window.location.href='/login'</script>")
 })

 
//start post action from here
//post action of help/enquiry
app.post('/ahelp',(req,res)=>{
   //get all values from body
var fname=req.body.f_name;              //f_name taken from input field name
var lname=req.body.l_name;
var email=req.body.email;
var msg=req.body.msg;
var mob=req.body.mob;

   connection.query("insert into enquiry values(?,?,?,?,?)",[fname,lname,email,mob,msg],(error,result)=>{       //variable name written in[] but must be in sequence of table column
   if(error)
   {
      throw error;
   }
   else
   {
res.end("<script>alert('Thanks ! your query is submitted as soon as we contact you');window.location.href='/help'</script>");
   }
     })
   })

    //post action of applyjob
app.post('/alyjob',(req,res)=>{
   //get all values from body
var name=req.body.name;              //f_name taken from input field name
var job=req.body.jbttl;
var email=req.body.email_add;
var mob=req.body.mob;

//match email from registration 
connection.query("select * from registration where email = ? ",[email],(error,result)=>{
   if(result.length>0)
   {
connection.query("insert into apply_job values(?,?,?,?,?)",[,name,job,email,mob],(error,result)=>{       //variable name written in[] but must be in sequence of table column
   if(error)
   {
      throw error;
   }
   else
   {
res.end("<script>alert('Thanks ! you have applied successfully');window.location.href='/applyjob'</script>");
   }
     })
   }
   else
   {
      res.end("<script>alert(' you can not apply for job bcz you are not registered');window.location.href='/registration'</script>");
   }
}) 
   })

   //post action of addjob
app.post('/aaddjob',(req,res)=>{
   //get all values from body
var job=req.body.jb_ttl;             
var qual=req.body.m_qual;
var salary=req.body.s_range;
var des=req.body.jb_des;

   connection.query("insert into add_job values(?,?,?,?,?)",[,job,qual,salary,des],(error,result)=>{       //variable name written in[] but must be in sequence of table column
   if(error)
   {
      throw error;
   }
   else
   {
res.end("<script>alert('Successfully ! Added a new job');window.location.href='/addjob'</script>");
   }
     })
   })
   //post action of login
   app.post('/alogin',(req,res)=>{
      var ad=req.body.email;
      var pwd=req.body.password;
      
      //match textboxvalues fron database login table
      connection.query("select * from admin_login where adid= ? and passwd= ?",[ad,pwd],function(error,result,fields){
          if(result.length>0)
          {
            //set value into session  
           req.session.email=ad;    //set value into session 

              res.end("<script>alert('Welcome to Admin Zone');window.location.href='/dashboard'</script>");
            // res.redirect('/dashboard');
          }
          else
          {
              res.end("<script>alert('Invalid UserId or Password');window.location.href='/login'</script>");
             //res.redirect('/login');
          }
          res.end();
      })
       });

       //registration form with file upload 
       //file upload code from here 
       var multer  =   require('multer');  
       var myfile="";
       var storage =   multer.diskStorage({  
         destination: function (req, file, callback) {  
           callback(null, './uploads');  
         },  
         filename: function (req, file, callback) {  
           callback(null, file.originalname);  
           myfile=file.originalname;
         }  
       });  
       var upload = multer({ storage : storage}).single('rescv');  
       //end here

    app.post('/myreg',(req,res)=>{
    upload(req,res,function(error)
    {
      var fname,lname,email,mob,street,city,state,quli,gender,passwd,resume;
      fname=req.body.f_name;
      lname=req.body.l_name;
      email=req.body.email;
      mob=req.body.c_no;
      street=req.body.strt;
      city=req.body.city;
      state=req.body.state;
      quli=req.body.quali;
      gender=req.body.gnd;
      passwd=req.body.chs_pwd;
      resume=myfile;
      
      if(error)
      {
         throw error;
      }
      else
      {
         connection.query("insert into registration values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [fname,lname,email,mob,street,city,state,quli,gender,passwd,resume],(error,result)=>{
            if(error)
            {
         throw error;
            }
            else{
               res.end("<script>alert(' Thanks for Registration into my portal ');window.location.href='/registration'</script>");
            }
         })
      }
      
    })
    })   

//change password 
app.post("/changep",(req,res)=>{
   var npass=req.body.new;
   var cpass=req.body.confirm;
   if(npass==cpass)
   {
  connection.query("update admin_login set passwd= ?",[npass],(error,result)=>{

   if(error)
   {
throw error;
   }
   else{
      res.end("<script>alert(' Password updated ');window.location.href='/login'</script>");
   }
  })
   }
   else
   {
      res.end("<script>alert('Paasword is not matched ');window.location.href='/password'</script>")
   }
})

   app.listen(port,(error)=>{
    if(error) throw error;
    else
    console.log('server is connected on port %d',port);
})


const express=require("express");
const app=express();
app.use(express());
//url:http://localhost:3000/createStudent
app.post("/createStudent",(req,res)=>{
    let student={
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    };
    res.send(student);
});

//url:http://localhost:3000/createstudentdetails
app.get("/createstudentdetails",(req,res)=>{
    let student=[{
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    },{
        "name":"siri",
        "id":"k4",
        "grade":9,
        "class":"mba"
    },{
        "name":"latha",
        "id":"k5",
        "grade":8,
        "class":"mca"
    }];
    res.send(student);
})

//url:http://localhost:3000/getOnestudentdetails
app.get("/getOnestudentdetails/:id",(req,res)=>{
    let student=[{
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    },{
        "name":"siri",
        "id":"k4",
        "grade":9,
        "class":"mba"
    },{
        "name":"latha",
        "id":"k5",
        "grade":8,
        "class":"mca"
    }];
    let stu=student.filter((a)=>{
        if(a.id===req.params.id){
            return a;
        }
    })
    res.send(stu);
});
//url:http://localhost:3000/getOnedetails
app.get("/getOnedetails",(req,res)=>{
    let student=[{
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    },{
        "name":"siri",
        "id":"k4",
        "grade":9,
        "class":"mba"
    },{
        "name":"latha",
        "id":"k5",
        "grade":8,
        "class":"mca"
    }];
    let stu=student.filter((a)=>{
        if(a.name==req.query.name){
            return a;
        }else if(a.id===req.query.id){
            return a;
        }else if(a.grade===req.query.grade){
            return a;
        }else if(a.class===req.query.class){
            return a;
        }
    })
    res.send(stu);
});
//url:http://localhost:3000/deleteOnestudent
app.delete("/deleteOnestudent/:grade",(req,res)=>{
    console.log("REQ===",req.params.grade);
    let student=[{
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    },{
        "name":"siri",
        "id":"k4",
        "grade":9,
        "class":"mba"
    },{
        "name":"latha",
        "id":"k5",
        "grade":8,
        "class":"mca"
    }];
    let grade=req.params.grade;
    let index=student.findIndex(stu=>student.grade===grade);
        if(index>=0){
            let stu=student[index];
            student.splice(index,1);
            res.json(stu);
        }
    

});
//url:http://localhost:3000/updatestudent/
app.put("/updatestudent/:id",(req,res)=>{
    let student=[{
        "name":"swetha",
        "id":"k3",
        "grade":10,
        "class":"b.tech"
    },{
        "name":"siri",
        "id":"k4",
        "grade":9,
        "class":"mba"
    },{
        "name":"latha",
        "id":"k5",
        "grade":8,
        "class":"mca"
    }];
    let id=req.params.id;
    let index=student.findIndex(stu=>student.id===id);
        if(index>=0){
            let stu=student[index];
            stu.name=req.body.name;
            stu.grade=req.body.grade;
            stu.class=req.body.class;
            res.json(student);
        }
    
})























app.listen(3000,()=>{
    console.log("port running on 3000");
})
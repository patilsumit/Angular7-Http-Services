import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-updatedelete',
  templateUrl: './updatedelete.component.html',
  styleUrls: ['./updatedelete.component.css']
})
export class UpdatedeleteComponent implements OnInit {
 myPosts:any[]; 
 myURL='https://jsonplaceholder.typicode.com/posts';
 userInput;

 constructor(private myHttp:Http) {

  myHttp.get(this.myURL)
  .subscribe(Response =>{
    console.log(Response.json());
    this.myPosts=Response.json();
  })
 }
   //Method for updating an existing post
   
   updateExistingPost(updatePost)
   {
    updatePost.title='Updated Post';
    this.myHttp.put(this.myURL + '/' + updatePost.id,JSON.stringify(updatePost))
    .subscribe(Response=>{
      console.log(Response.json());
      let dPostIndex=this.myPosts.indexOf(updatePost);
      this.myPosts.splice(dPostIndex,1,updatePost);
    })
   }

   //Method for deleting an existing Post
   deleteExistingPost(deletePost)
   {
     console.log("Delete Post Function -->" + deletePost.id);

     this.myHttp.delete(this.myURL + '/' + deletePost.id).subscribe(Response=>{
       console.log("Post Deleted Successfully");
       let dPostIndex =this.myPosts.indexOf(deletePost)
       this.myPosts.splice(dPostIndex,1);
     })
   }

   createNewPost(){
    let newPost={title:this.userInput};
    this.myHttp.post(this.myURL,JSON.stringify(newPost))
    .subscribe( Response=> {
      console.log(Response.json());
      newPost['id']=Response.json().id;
      this.myPosts.splice(0,0,newPost);
    })

  }

  ngOnInit() {
  }

}

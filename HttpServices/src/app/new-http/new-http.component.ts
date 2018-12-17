import { Component, OnInit } from '@angular/core';
import {EndpointService} from '../endpoint.service';
@Component({
  selector: 'app-new-http',
  templateUrl: './new-http.component.html',
  styleUrls: ['./new-http.component.css']
})
export class NewHttpComponent implements OnInit {
  
  myPosts:any[];
  constructor(private service: EndpointService) { }

  ngOnInit() {

    this.service.getPosts().subscribe(Response=>{
      console.log(Response.json());
      this.myPosts=Response.json();
    });
  }

  //Method for creating a new post
    createNewPost(userTitle:HTMLInputElement)
    {
      let newPost={title:userTitle.value};

      this.service.createPost(newPost).subscribe(Response=>{
        console.log(Response.json());
        this.myPosts.splice(0,0,newPost);
      })
    }

    //Method for updating an existing post

    updateExistingPost(uPost)
    {
       uPost.title='updatePost';
       
      this.service.updatePost(uPost).subscribe(Response=>{
        console.log(Response.json());
        const newIndex=this.myPosts.indexOf(uPost);
        this.myPosts.splice(newIndex,1,uPost);
      })
    }

    deleteExistingPost(dPost)
    {
      console.log("Delete Post Function -->" + dPost.id);

      this.service.deletePost(dPost).subscribe(Response=>{
       console.log(Response.json());
       console.log("Post Deleted Successfully");
     
        let dPostIndex =this.myPosts.indexOf(dPost)
        this.myPosts.splice(dPostIndex,1);
      })
    } 


}

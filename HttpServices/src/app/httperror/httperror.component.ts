import { Component, OnInit } from '@angular/core';
import {EndpointService} from './../endpoint.service';
@Component({
  selector: 'app-httperror',
  templateUrl: './httperror.component.html',
  styleUrls: ['./httperror.component.css']
})
export class HttperrorComponent implements OnInit {

   myPosts:any[];
  constructor(private service:EndpointService) { }

  ngOnInit() {

    // By default populate all posts....
    this.service.getPosts().subscribe(
      response => {
        console.log(response.json());
        this.myPosts = response.json(); },
      error => {
        alert ("An unexpected error occurred");
        console.log(error);
      });
  }

  // Method for creating a new post
  createNewPost(userTitle: HTMLInputElement) {

    let newPost = { title: userTitle.value };

    this.service.createPost(newPost).subscribe (
      response => {
        console.log(response.json());
        this.myPosts.splice(0,0,newPost);},
      error => {
        alert ("An unexpected error occurred");
        console.log(error);
      });    

   }

   // Method for updating an existing post 
   updateExistingPost (uPost){

    this.service.updatePost(uPost).subscribe (
      response => {
        console.log(response.json());},
      error => {
          alert ("An unexpected error occurred");
          console.log(error);
      });

    }
    // Method for deleting an existing post 

    deleteExistingPost (dPost){
      // Enable this to check for errors 
      // this.service.deletePost(dPost).subscribe (
      this.service.deletePost(550).subscribe (
        response => {
          console.log("Post deleted successfully");
          let dPostIndex = this.myPosts.indexOf(dPost);
          this.myPosts.splice(dPostIndex,1); },
        error => {
         
          if (error.status == 404)
            alert ("Post already deleted");
          else {
            alert ("An unexpected error occurred");
            console.log(error);
          }
        });
    }

}

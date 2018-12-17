import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 myPosts:any[];
 myURL='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {

    http.get(this.myURL)
    .subscribe(Response =>{
      console.log(Response.json());
      this.myPosts=Response.json();
    })
   }


   createPost(input: HTMLInputElement){
     let newPost={title:input.value};
     this.http.post(this.myURL,JSON.stringify(newPost))
     .subscribe( Response=> {
       console.log(Response.json());
       newPost['id']=Response.json().id;
       this.myPosts.splice(0,0,newPost);
     })

   }
  ngOnInit() {
  }

}

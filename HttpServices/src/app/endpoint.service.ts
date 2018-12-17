import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
 
  private  myURL='https://jsonplaceholder.typicode.com/posts';
  
  private myGitURL='https://api.github.com/users/devendradora/followers';
  

  constructor(private myHttp: Http) { }

  getPosts()
  {
    return this.myHttp.get(this.myURL)
  }
  getFollowers() 
  {
    return this.myHttp.get(this.myGitURL); 
  }    
  createPost(userTitle)
  {
    return this.myHttp.post(this.myURL,JSON.stringify(userTitle));
  }
  updatePost(updateTitle)
  {
    return this.myHttp.put(this.myURL,JSON.stringify(updateTitle));
  }
  deletePost(deleteTitle)
  {
     return this.myHttp.delete(this.myURL + '/' + deleteTitle.id);
  }
}

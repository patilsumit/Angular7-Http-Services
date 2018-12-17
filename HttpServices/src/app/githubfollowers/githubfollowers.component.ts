import { Component, OnInit } from '@angular/core';
import {EndpointService} from '../endpoint.service';
@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  myFollowers:any[];
  constructor(private service:EndpointService) { }

  ngOnInit() {
    this.service.getFollowers().subscribe(Response=>{
      console.log(Response.json());
      this.myFollowers=Response.json();
    });
  }

}

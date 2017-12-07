import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  id:string;
  private sub:any;
  results:any;

  constructor(private route: ActivatedRoute, private router: Router ,private http:HttpClient) {
    this.sub = this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
  }

  ngOnInit() {
    var url:string = 'http://football.bamboo-video.com/api/football/player?format=json&returnZeros=false&id='+this.id;
    this.http.get(url).subscribe(data => {
      this.results = data;
      console.log(this.results);
      console.log(this.results.data.name);
    });
    }
  }



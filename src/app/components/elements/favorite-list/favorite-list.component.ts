import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';
import { Member } from 'src/app/models/member';
import { FavoriteService } from 'src/app/services/favorite.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {

  favoriteList:Favorite[];
  connectedMember: Member;

  constructor(private loginSrv: LoginService, private favoriteSrv: FavoriteService, private router: Router) { }

  ngOnInit(): void {
    this.loginSrv.isAuth().subscribe(
      data => {
        this.loginSrv.sendToMemberSub(data);
        this.connectedMember = data;
        this.favoriteSrv.getFavorite(this.connectedMember.id).subscribe(
          dataFav => {
            this.favoriteList = dataFav
            console.log(this.favoriteList);
            
          },
          err => console.log(err)
          
        );




      },
      err => {
        console.log(err);
        this.loginSrv.sendToMemberSub(null);
      }
    );
    

  }

  createFavorite(){
    this.router.navigateByUrl("/favorites/add");
  }

}

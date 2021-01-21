import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public titleApp = "WeatherApp";
  public logoUrl = "https://www.laboulegryonnaise.ch/wp-content/uploads/2016/04/image-5.png";
  public isCollapsed = true;

  //public connected = true;
  public member: Member;

  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {

    this.loginServ.getFromConnectedMemberSub().subscribe(
      connectedMember => this.member = connectedMember
    );
  }

}

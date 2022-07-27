import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls:['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
confD={fullName:"",
  totalPrice:0}
  constructor(private conf:ConfirmationService , private router : Router ) { }

  ngOnInit(): void {
  this.confD=this.conf.confD

  }

  nav(){
    this.router.navigate(['/'])
  }

}

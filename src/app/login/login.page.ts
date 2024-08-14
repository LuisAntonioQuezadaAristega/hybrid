import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class LoginPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { addIcons } from 'ionicons';
import { mailOutline,  lockClosedOutline, eyeOffOutline, eyeOutline} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton,  IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule, RouterLink]
})
export class LoginPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor() { 
    addIcons({mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline}); }

  ngOnInit() {
  }


  submit(){
    console.log(this.form.value);
  }

}

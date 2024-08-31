import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonList, IonItem, IonInputPasswordToggle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { User } from '../interfaces/user';
import { FirebaseService } from '../services/firebase.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, 
    HttpClientModule, ReactiveFormsModule, CommonModule, 
    IonLabel, IonList, IonItem, IonInputPasswordToggle, IonButton,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, SharedModule],
  providers: [FirebaseService]
})
export class SignUpPage implements OnInit {
  public userData: User;
  public users: User[] = [];

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private firebaseSvc: FirebaseService) { }

  ngOnInit() {
  }

  submit(): void{
    this.firebaseSvc.postResponse(this.form.value).subscribe( (response) => {
      
    })
  }

}

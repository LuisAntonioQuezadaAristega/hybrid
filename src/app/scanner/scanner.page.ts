import { Component, EnvironmentInjector, inject} from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent ,IonButton, IonButtons, IonBackButton,
  IonFab, IonFabButton, IonImg, IonCol, IonRow, IonGrid} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'
import { PhotoService } from '../services/photo.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import { checkmarkCircle, camera, alertCircle, homeSharp } from 'ionicons/icons';

//import { Data } from '../interfaces/data';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
    ExploreContainerComponent, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCardContent, IonButton, IonButtons, IonBackButton, CommonModule,
    CommonModule, IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid],
})

export class scanner {
  public index = 0

  public environmentInjector = inject(EnvironmentInjector);

  constructor(public photoService: PhotoService) {
    addIcons({checkmarkCircle, camera, alertCircle, homeSharp });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  showScreen(numero: any){
    this.index = parseInt(numero)
  }

  regresar(){
    this.index = 0
  }
}
import { Component, EnvironmentInjector, inject} from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent ,IonButton, IonButtons, IonBackButton} from '@ionic/angular/standalone';
//import { addIcons } from 'ionicons';
//import { triangle, ellipse, square, peopleCircle, camera } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import { football, basketball, bicycle, walk, tennisball, baseball} from 'ionicons/icons';


//import { Data } from '../interfaces/data';

@Component({
  selector: 'app-tabSport',
  templateUrl: './tabSport.page.html',
  styleUrls: ['./tabSport.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
    ExploreContainerComponent, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonButtons, IonBackButton,],
})
export class tabSport {
  //public data : Data[] = [];
  //public titulo = "¿Qué deporte vas a practicar?"
  public index = 0
  //public titulos = ["¿Qué deporte vas a practicar?", "¿Sabías Qué?"]
  //public titulo = ""
  public imagesSRC = ["../../assets/images/futbol.png", "../../assets/images/basketball.png", "../../assets/images/tenis.png",
                      "../../assets/images/ciclismo.png", "../../assets/images/atletismo.png", "../../assets/images/baseball.png"]

  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ football, basketball, bicycle, walk, tennisball, baseball});
  }

  showSport(numero: any){
    //this.titulo = nombre
    this.index = parseInt(numero)
  }

  regresar(){
    this.index = 0
  }
}
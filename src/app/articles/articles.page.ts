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
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
    ExploreContainerComponent, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCardContent, IonButton, IonButtons, IonBackButton],
})

export class articles {
  //public data : Data[] = [];
  //public titulo = "¿Qué deporte vas a practicar?"
  public index = 0
  //public titulos = ["¿Qué deporte vas a practicar?", "¿Sabías Qué?"]
  //public titulo = ""

  /*public aritculoInfo = [{imagen:"../../assets/images/baseball.png", titulo:"titulo", texto:"info"},
    {imagen:"../../assets/images/baseball.png", titulo:"afnefnwole", texto:"vsfvsfvfs"},
    {imagen:"../../assets/images/baseball.png", titulo:"afnefnwole", texto:"vsfvsfvfs"},
    {imagen:"../../assets/images/baseball.png", titulo:"afnefnwole", texto:"vsfvsfvfs"}]*/

  aritculoInfo:any[] = [
    {"color":"blue", "imagen":"../../assets/images/fotoenvejecimiento.jpg", "titulo":"¿Qué ocasiona el melasma en la piel?"},
    {"color":"white", "imagen":"../../assets/images/fotoenvejecimiento.jpg", "titulo":"¿Lunares por la exposición solar?"},
    {"color":"blue", "imagen":"../../assets/images/fotoenvejecimiento.jpg", "titulo":"Tipos de quemaduras solares existentes"},
    {"color":"white", "imagen":"../../assets/images/fotoenvejecimiento.jpg", "titulo":"¿Qué es el fotoenvejecimiento?"}
  ]

  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ football, basketball, bicycle, walk, tennisball, baseball});
  }

  showArticle(numero: any){
    //this.titulo = nombre
    this.index = parseInt(numero)
  }

  regresar(){
    this.index = 0
  }
}
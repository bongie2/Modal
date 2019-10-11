import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ModalpagePageModule } from '../modalpage/modalpage.module';
import { ModalpagePage } from '../modalpage/modalpage.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) {}
async openModal(){
  const myModal =await this.modal.create({
  component: ModalpagePage
      
  });

   //this.modal.create('ModalpagePage')
   myModal.present()
     }
    }

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  constructor(public modC : ModalController) { }

  closeModal(){
    this.modC.dismiss()
  }
  ngOnInit() {
  }

}

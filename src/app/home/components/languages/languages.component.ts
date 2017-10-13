import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguagesComponent implements OnInit {
  backgroundImage: string;
  cssStyle = 'flag-icon-';

  constructor(private translate: TranslateService) {
    if (this.translate.currentLang !== '') {
      this.backgroundImage = './../../../assets/img/' + this.translate.currentLang + '.png';
    } else {
      this.backgroundImage = './../../../assets/img/es.png';
    }
   }

  ngOnInit() {  }

  public showFlag(flag) {
      this.backgroundImage = './../../../assets/img/' + flag + '.png';
      this.translate.use(flag);
      localStorage.setItem('language', flag);
    }
}

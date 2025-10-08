import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Sidenav } from './sidenav/sidenav';
import { Menu } from './menu/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-layout',
  imports: [CommonModule,
    Menu,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    Sidenav
  ],
  templateUrl: './layout.html',
  styles: ``
})
export class Layout {

  isSidenavOpen= signal(false);

  togglesSidenav(){
    this.isSidenavOpen.update(v => !v);
  }

}

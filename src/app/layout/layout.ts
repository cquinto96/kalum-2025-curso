import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Sidenav } from './sidenav/sidenav';
import { Menu } from './menu/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    Menu,
    MatSidenavModule,
    MatToolbarModule,
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
 
  toggleSidenav(){
    console.log('pruebaa');
    this.isSidenavOpen.update(v => !v);
  }

}



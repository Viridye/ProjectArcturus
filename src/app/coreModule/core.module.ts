import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout/";
import { HeaderBarComponent } from "./components/headerBarComponent/headerbar.component";
import { NavbarComponent } from './components/navBarComponent/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, FlexLayoutModule, RouterModule],
    declarations: [HeaderBarComponent,NavbarComponent],
    exports: [ HeaderBarComponent,NavbarComponent],
    providers: []
  })
  export class CoreModule { }
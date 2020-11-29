import { NgModule } from '@angular/core';
import { HelpRouting } from './help.routing';
import { HelpComponent } from './helpComponent/help.component';


@NgModule({
  imports: [HelpRouting],
  declarations: [HelpComponent],
  exports: [HelpComponent]
})
export class HelpModule {}
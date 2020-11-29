import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirmDialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        FlexLayoutModule
    ],
    declarations: [ConfirmDialogComponent],
    exports: [ConfirmDialogComponent]
})
export class SharedComponentsModule {}
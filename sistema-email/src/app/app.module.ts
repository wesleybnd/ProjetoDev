import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';
import { EmailCrudComponent } from './views/email-crud/email-crud.component';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmailCreateComponent } from './components/email/email-create/email-create.component';
import { EmailUpdateComponent } from './components/email/email-update/email-update.component';
import { EmailReadComponent } from './components/email/email-read/email-read.component';
import { MatDialogModule} from '@angular/material/dialog'

import { FormsModule } from '@angular/forms'
import { MatListModule } from'@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatIconModule} from '@angular/material/icon';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    EmailCrudComponent,
    EmailCreateComponent,
    EmailUpdateComponent,
    EmailReadComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    HttpClientModule, 
    MatDialogModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  entryComponents: [MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

/* ------------------------------- COMPONENT'S ------------------------------ */
import { AppComponent } from './app.component';
import { TaskComponent } from './views/task/task.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';

/* -------------------------------- MATERIAL -------------------------------- */
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
/* ---------------------------------- CDK'S --------------------------------- */
import { DragDropModule } from '@angular/cdk/drag-drop';
/* -------------------------------- FireBase -------------------------------- */
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FirestoreModule } from '@angular/fire/firestore';
import { DatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
/* --------------------------- Material Module's | -------------------------- */
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
/* ------------------------------- Angular CDK ------------------------------ */
    DragDropModule,
/* -------------------------------- FIREBASE -------------------------------- */
FirestoreModule,
DatabaseModule,
provideFirebaseApp(() => initializeApp(environment.firebase)),
provideAnalytics(() => getAnalytics()),
provideAuth(() => getAuth()),
provideDatabase(() => getDatabase()),
provideFirestore(() => getFirestore()),
provideFunctions(() => getFunctions()),
provideMessaging(() => getMessaging()),
providePerformance(() => getPerformance()),
provideRemoteConfig(() => getRemoteConfig()),
provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

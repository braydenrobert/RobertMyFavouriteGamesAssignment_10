import { Injectable } from '@angular/core';
import {SwUpdate, VersionEvent, VersionReadyEvent} from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) { }


  checkForUpdates(): void {
    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      // @ts-ignore
      if (event.type === 'versionReady') {
        const snackBarRef = this.snackBar.open('A new version is available', 'Update');
        snackBarRef.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
      }
    });
  }




}

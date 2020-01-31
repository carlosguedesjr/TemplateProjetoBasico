import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-documento-eletronico',
  templateUrl: './documento-eletronico.component.html',
  styles: []
})
export class DocumentoEletronicoComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }


  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }


}




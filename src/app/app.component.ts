import { Component } from '@angular/core';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angmaterial';

   positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
}

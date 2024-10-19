import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent,RouterOutlet,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'audio_download';
}

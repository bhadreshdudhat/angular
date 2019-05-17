import { Component, OnInit, Input } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'vim-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  vimeo_iframe_html: any;

  @Input() vimeoUrl:string="";

  constructor( private embedService: EmbedVideoService) { 
   console.log(this.vimeoUrl);
  }

  ngOnInit() {
    console.log(this.vimeoUrl);
    this.vimeo_iframe_html = this.embedService.embed(this.vimeoUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 450, height: 300 }
    });
  }

}

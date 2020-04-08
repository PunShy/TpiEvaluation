import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerLinks: IBreadcrumbsLink[] = [
    {
      home: '基本資料', links: [
        { label: '展示', routers: ['/dashboard'] },
        { label: '編輯資料', routers: ['/backstage'] }
      ]
    },
    // {
    //   home: '測試連結2', links: [
    //     { label: '內容物2-1', routers: ['/內容物2-1'] },
    //     { label: '內容物2-2', routers: ['/內容物2-2'] }
    //   ]
    // }
  ];

  constructor(public appSer: AppService, public router: Router) {
  }

  ngOnInit(): void {
    this.headerLinks.forEach(item => {
      item.links.forEach(a => {
        a.routers.forEach(b => {
          if (b.indexOf(window.location.pathname) >= 0) {
            this.setBreadcrumbs(item.home, a);
          }
        });
      });
    });
  }

  goLink(home: string, routers: ILinkInfo) {
    this.setBreadcrumbs(home, routers);

    this.router.navigate(routers.routers);
  }

  setBreadcrumbs(home: string, routers: ILinkInfo) {
    this.appSer.ibl.home = home;
    this.appSer.ibl.links = [routers];
  }

}

export interface IBreadcrumbsLink {
  home: string;
  links: ILinkInfo[];
}
export interface ILinkInfo {
  label: string;
  routers: string[];
}

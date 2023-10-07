import { Component } from '@angular/core';
import { init } from 'cookie-though';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-projects';

  ngOnInit() {
    init({
      "policies": [
        {
          "id": "essential",
          "label": "Essential Cookies",
          "description": "We need to save some technical cookies, for the website to function properly.",
          "category": "essential",
        },
        {
          "id": "functional",
          "label": "Functional Cookies",
          "category": "functional",
          "description": "We need to save some basic preferences eg. language.",
        },
        {
          "id": "statistics",
          "label": "Statistics",
          "category": "statistics",
          "description": "We need to save some technical cookies, for the website to function properly.",
        },
        {
          "id": "social",
          "label": "Social Media Cookies",
          "category": "social",
          "description": "We need to save some social cookies, for the website to function properly.",
        },
      ],
      "essentialLabel": "Always on",
      "permissionLabels": {
        "accept": "Accept",
        "acceptAll": "Accept all",
        "decline": "Decline"
      },
      "cookiePreferenceKey": "cookie-preferences",
      "header": {
          "title": "cookie though?",
          "subTitle": "You're probably fed up with these banners...",
          "description": "Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience."
      },
      "cookiePolicy": {
        "url":"https://inthepocket.com/cookie-policy",
        "label":"Read the full cookie declaration",
      },
      "customizeLabel": "Customize"
    });
  }
}

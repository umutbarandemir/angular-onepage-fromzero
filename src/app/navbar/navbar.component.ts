import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, roles } from './User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  homePage: String = 'MainPage 29';

    // User Object
    User: User[] = [
      {
        id: 1,
        name:"Umut",
        surname:"Demir",
        username: "Umut Baran Demir",
        email: "baran292907@hotmail.com",
        password: "123456",
        pictures:
          "https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",
        date: String(new Date().getFullYear()),
        link: 'https://admin1/',
        roles: roles.admin,
      },
      {
        id: 2,
        username: "writer1",
        name:"writer name",
        surname:"writer lastname",
        email: 'writer1@gmail.com',
        password: '123456',
        pictures:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://writer1/',
        roles: roles.writer,
      },
      {
        id: 3,
        username: "user1",
        name:"user name",
        surname:"user lastname",
        email: "user1@gmail.com",
        password: '123456',
        pictures:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://user1/',
        roles: roles.user,
      },
    ];

  // navBar:{}={};
  navBar: {
    isLogin: boolean;
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: any[]; //Array<any>
    search: {
      name:string,
      placeholder:string,
      type:string,
      style:string,
    };
    } = {
    isLogin: false, //true
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    navbar: [
      { id: 1, name: 'MainPage', link: '#header_id', fontAwesome: 'fa-solid fa-house-chimney'},
      { id: 1, name: 'MyWork', link: '#business_id', fontAwesome: 'font-2'},
      { id: 2, name: 'About Me', link: '#about_me_id', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '#blog_id', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '#contact_id', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Search ...',
      type: 'text',
      style:"btn btn-primary"
    },
  }; //navBar Object

  darkmode(){
    alert("DARK MODE: ON")
  }
}

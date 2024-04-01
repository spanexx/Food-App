import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { User } from '../../shared/Models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity=0;
  user!:User;

  constructor(cartService:CartService,private userService:UsersService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }

   logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}


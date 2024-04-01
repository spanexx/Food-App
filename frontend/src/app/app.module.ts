import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partial/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './partial/star-rating/star-rating.component';
import { SearchComponent } from './partial/search/search.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { TagComponent } from './partial/tag/tag.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './partial/title/title.component';
import { NotFoundComponent } from './partial/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './partial/input-container/input-container.component';
import { InputValidationComponent } from './partial/input-validation/input-validation.component';
import { TextInputComponent } from './partial/text-input/text-input.component';
import { DefaultButtonComponent } from './partial/default-button/default-button.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoadingComponent } from './partial/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderItemListComponent } from './partial/order-item-list/order-item-list.component';
import { MapComponent } from './partial/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaypalButtonComponent } from './partial/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './pages/order-track-page/order-track-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    FoodPageComponent,
    TagComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemListComponent,
    MapComponent,
    PaymentComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },

    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

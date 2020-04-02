import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShopComponent} from './shop/shop.component';
import {ShippingComponent} from './shop/shipping/shipping.component';
import {ProductsComponent} from './shop/products/products.component';
import {EditorComponent} from './shop/products/editor/editor.component';
import {UserEditorComponent} from './shop/users/user-editor/user-editor.component';
import {UsersComponent} from './shop/users/users.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'shop', component: ShopComponent, children: [
      {path: '', component: ProductsComponent},
      {path: 'editor', component: EditorComponent},
      {path: 'editor/:id', component: EditorComponent},
      {path: 'products',  component: ProductsComponent},
      {path: 'products/editor', component: EditorComponent},
      {path: 'products/editor/:id', component: EditorComponent},
      {path: 'users',  component: UsersComponent},
      {path: 'users/user-editor', component: UserEditorComponent},
      {path: 'users/user-editor/:id', component: UserEditorComponent},
      {path: 'user-editor', component: UserEditorComponent},
      {path: 'user-editor/:id', component: UserEditorComponent},
      {path: 'shipping', component: ShippingComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

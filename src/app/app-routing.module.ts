import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'editpage',
    loadChildren: () => import('./editpage/editpage.module').then( m => m.EditpagePageModule)
  },
  {
    path: 'addnewperson',
    loadChildren: () => import('./addnewperson/addnewperson.module').then( m => m.AddnewpersonPageModule)
  },
  // 
  // {
  //   path: 'instruction-add',
  //   loadChildren: () => import('./instruction-add/instruction-add.module').then( m => m.InstructionAddPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

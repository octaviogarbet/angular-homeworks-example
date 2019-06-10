import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    // { path: 'homeworks', component: HomeworksListComponent },
    // { path: 'homeworks/:id', component: HomeworkDetailComponent  },
    // { path: 'welcome', component:  WelcomeComponent }, 
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // configuramos la URL por defecto
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //cualquier otra ruta que no matchee, va a ir al WelcomeComponent, aca podría ir una pagina de error tipo 404 Not Found
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

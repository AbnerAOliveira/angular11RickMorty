import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'characters', loadChildren: () => import('./components/pages/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'notFound', loadChildren: () => import('./components/pages/not-found/not-found.module').then(m => m.NotFoundModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

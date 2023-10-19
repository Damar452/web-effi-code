import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressWrapComponent } from './progress-wrap/progress-wrap.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CreateSolutionsSectionComponent } from './create-solutions-section/create-solutions-section.component';
import { HeroSectionTwoComponent } from './hero-section-two/hero-section-two.component';
import { CaseEstudiesSectionComponent } from './case-estudies-section/case-estudies-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';



@NgModule({
  declarations: [
    ProgressWrapComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeroSectionComponent,
    CreateSolutionsSectionComponent,
    HeroSectionTwoComponent,
    CaseEstudiesSectionComponent,
    TestimonialSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressWrapComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeroSectionComponent,
    CreateSolutionsSectionComponent,
    HeroSectionTwoComponent,
    CaseEstudiesSectionComponent,
    TestimonialSectionComponent
  ]
})
export class ComponentsModule { }

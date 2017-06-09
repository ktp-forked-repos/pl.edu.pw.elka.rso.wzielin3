import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "../components/app.component";
import {PersonsComponent} from "../components/persons/persons.component";
import {UnitsComponent} from "../components/units/units.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {LoginPageComponent} from "../components/login-page/login-page.component";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {TopMenuComponent} from "../components/top-menu/top-menu.component";
import {GrantedPermissionsService} from "../services/granted-permissions.service";
import {GreetingService} from "../services/greeting.service";
import {OrganizationalUnitsService} from "../services/organizational-units.service";
import {PermissionsService} from "../services/permissions.service";
import {PersonsService} from "../services/persons.service";
import {SemestersService} from "../services/semesters.service";
import {SpecializationsService} from "../services/specializations.service";
import {SubjectRealizationsService} from "../services/subject-realizations.service";
import {SubjectVersionsService} from "../services/subject-versions.service";
import {SubjectsService} from "../services/subjects.service";
import {StudentTourService} from "../services/student-tours.service";
import {StudentTourSemesterService} from "../services/studentTour-semester.service";
import {AppRoutingModule} from "./appRouting.module";
import "material-design-lite";
import {MDLUpgradeElement} from "./MDLUpgradeElement";
import {FormsModule} from "@angular/forms";
import {AddUnitComponent} from "../components/units/add/addUnit.component";
import {EditUnitComponent} from "../components/units/add/editUnit.component";
import {AddPersonComponent} from "../components/persons/add/addPerson.component";
import {EditPersonComponent} from "../components/persons/add/editPerson.component";
import {UnitsService} from "../services/units.service";
import {SpecializationsComponent} from "../components/specializations/specializations.component";
import {AddSpecializationComponent} from "../components/specializations/addEdit/addSpecialization.component";
import {EditSpecializationComponent} from "../components/specializations/addEdit/editSpecialization.component";
import {PermissionsComponent} from "../components/permissions/permissions.component";
import {AddPermissionComponent} from "../components/permissions/add/addPermission.component";
import {EditPermissionComponent} from "../components/permissions/edit/editPermission.component";
import {UserPermissions} from "../components/user-permissions/userPermissions.component";
import {StudentToursComponent} from "../components/student-tours/student-tours.component";
import {AddStudentTourComponent} from "../components/student-tours/addEdit/addStudentTour.component";
import {EditStudentTourComponent} from "../components/student-tours/addEdit/editStudentTour.component";
import {StudentToursSemesterComponent} from "../components/studentTours-semester/studentTours-semester.component";
import {AddStudentTourSemesterComponent} from "../components/studentTours-semester/addEdit/addStudentTourSemester.component";
import {EditStudentTourSemesterComponent} from "../components/studentTours-semester/addEdit/editStudentTourSemester.component";
import {CreditService} from "../services/credit.service";
import {SubjectCreditComponent} from "../components/credit/subject-credit.component";
import {StudentToursCreditComponent} from "../components/credit/student-tours-credit.component";
import {SubjectsComponent} from "../components/subjects/subjects.component";
import {ModalComponent} from "../components/modal/modal.component";
import {AddSubjectComponent} from "../components/subjects/add/addSubject.component";
import {ForbiddenComponent} from "../components/forbidden/forbidden.component";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        PersonsComponent,
        AddPersonComponent,
        EditPersonComponent,
        UnitsComponent,
        AddUnitComponent,
        EditUnitComponent,
        DashboardComponent,
        PageNotFoundComponent,
        LoginPageComponent,
        TopMenuComponent,
        MDLUpgradeElement,
        SpecializationsComponent,
        AddSpecializationComponent,
        EditSpecializationComponent,
        PermissionsComponent,
        AddPermissionComponent,
        EditPermissionComponent,
        UserPermissions,
        StudentToursComponent,
        AddStudentTourComponent,
        EditStudentTourComponent,
        StudentToursSemesterComponent,
        AddStudentTourSemesterComponent,
        EditStudentTourSemesterComponent,
        SubjectCreditComponent,
        StudentToursCreditComponent,
        SubjectsComponent,
        AddSubjectComponent,
        ModalComponent,
        ForbiddenComponent
    ],
    providers: [
        GrantedPermissionsService,
        GreetingService,
        OrganizationalUnitsService,
        PermissionsService,
        PersonsService,
        SemestersService,
        SpecializationsService,
        SubjectRealizationsService,
        SubjectVersionsService,
        SubjectsService,
        StudentTourService,
        StudentTourSemesterService,
        UnitsService,
        CreditService,
        AuthenticationService,
        AlertService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

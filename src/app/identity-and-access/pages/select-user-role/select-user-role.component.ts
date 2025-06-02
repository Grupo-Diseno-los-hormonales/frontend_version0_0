import { Component } from '@angular/core';
import {UserTypeService} from "../../../shared/services/user-type.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-select-user-role',
  templateUrl: './select-user-role.component.html',
  styleUrls: ['./select-user-role.component.css']
})
export class SelectUserRoleComponent {
  optionRoles = [
    {path: '/homePatient', title: 'Patient', icon: 'assets/images/patient-icon.png'},
    {path: '/homeDoctor', title: 'Endocrinologist', icon: 'assets/images/doctor-icon.png'},
  ]

  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {
  }
  onSelectUser(type: string) {
    if (type === 'endocrinologist' || type === 'patient') {
      this.userTypeService.setUserType(type);
      const path = type === 'endocrinologist' ? '/homeDoctor' : '/homePatient';
      this.router.navigate([path]);
    } else {
      console.error(`Invalid user type: ${type}`);
    }
  }

  setUserType(type: string) {
    if (type === 'endocrinologist' || type === 'patient') {
      this.userTypeService.setUserType(type);

      // Navega a la vista correspondiente
      const path = type === 'endocrinologist' ? '/homeDoctor' : '/homePatient';
      this.router.navigate([path]);
    } else {
      console.error(`Invalid user type: ${type}`);
    }
  }
}

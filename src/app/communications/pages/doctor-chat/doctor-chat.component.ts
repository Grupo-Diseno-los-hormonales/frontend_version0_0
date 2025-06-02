import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import {UserTypeService} from "../../../shared/services/user-type.service";

@Component({
  selector: 'app-doctor-chat',
  templateUrl: './doctor-chat.component.html',
  styleUrls: ['./doctor-chat.component.css']
})
export class DoctorChatComponent implements OnInit {
  currentUserEmail: string = 'mariagonzalez@example.com';
  selectedUserEmail: string = '';
  doctors: any[] = [];

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private userTypeService: UserTypeService
  ) {}

  ngOnInit(): void {
    this.userTypeService.setUserType('endocrinologist'); // Forzar el tipo
    this.route.queryParams.subscribe(params => {
      this.selectedUserEmail = params['doctorEmail'] || '';
      this.loadDoctors();
    });
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  switchUser(user: string) {
    this.currentUserEmail = user;
  }

  selectChatUser(user: string) {
    this.selectedUserEmail = user;
  }
}

import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  user: User;
  photoUrl: string;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private alertifyService: AlertifyService,
              private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl=photoUrl);
  }

  updateUser() {
   this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
    this.alertifyService.success('Profile updated successfully');
    this.editForm.reset(this.user);
   }, error => {
     this.alertifyService.error(error);

   });

  }
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }

}

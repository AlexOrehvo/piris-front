import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {User} from '../../../../domain/user';
import {UserService} from '../../../../services/user.service';
import {Option} from '../../../../domain/option';
import {ListService} from '../../../../services/list.service';
import {ValidationService} from '../../../../services/validation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit-new',
  templateUrl: './user-edit-new.component.html',
  styleUrls: ['./user-edit-new.component.scss']
})
export class UserEditNewComponent implements OnInit {

  @ViewChild('firstNameValidation') firstNameBlock: ElementRef;
  @ViewChild('lastNameValidation') lastNameBlock: ElementRef;
  @ViewChild('middleNameValidation') middleNameBlock: ElementRef;
  @ViewChild('birthdayValidation') birthdayBlock: ElementRef;
  @ViewChild('genderValidation') genderBlock: ElementRef;
  @ViewChild('homePhoneNumberValidation') homePhoneNumberBlock: ElementRef;
  @ViewChild('mobilePhoneNumberValidation') mobilePhoneNumberBlock: ElementRef;
  @ViewChild('passportSeriesValidation') passportSeriesBlock: ElementRef;
  @ViewChild('passportNumberValidation') passportNumberBlock: ElementRef;
  @ViewChild('identificationNumberValidation') identificationNumberBlock: ElementRef;
  @ViewChild('authorityValidation') authorityBlock: ElementRef;
  @ViewChild('dateOfIssueValidation') dateOfIssueBlock: ElementRef;
  @ViewChild('placeOfBirthValidation') placeOfBirthBlock: ElementRef;
  @ViewChild('maritalStatusValidation') maritalStatusBlock: ElementRef;
  @ViewChild('citizenshipValidation') citizenshipBlock: ElementRef;
  @ViewChild('cityValidation') cityBlock: ElementRef;
  @ViewChild('addressValidation') addressBlock: ElementRef;

  private user = new User();

  private message: string;

  private isEditMode = false;

  constructor(
    private userService: UserService,
    private listService: ListService,
    private validationService: ValidationService,
    private router: Router,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {
    this.isEditMode = !!this.activeRoute.snapshot.params.id;
    if (this.isEditMode) {
      this.userService.getUserById(this.activeRoute.snapshot.params.id)
        .subscribe((data) => {
          if (data != null) {
            Object.assign(this.user, data);
            this.userService.setSelectedUser(this.user);
          }
        });
    }
  }

  ngOnInit() {

  }

  public validate(): boolean {
    let isValid = true;
    isValid = this.validationService.validateEmpty(this.user.firstName, this.firstNameBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.lastName, this.lastNameBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.middleName, this.middleNameBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.gender.id, this.genderBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.birthday, this.birthdayBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.passportSeries, this.passportSeriesBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.passportNumber, this.passportNumberBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.identificationNumber, this.identificationNumberBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.authority, this.authorityBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.dateOfIssue, this.dateOfIssueBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.passport.placeOfBirth, this.placeOfBirthBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.maritalStatus.id, this.maritalStatusBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.city.id, this.cityBlock);
    isValid = isValid && this.validationService.validateEmpty(this.user.address, this.addressBlock);
    return isValid;
  }

  public save() {
    if (this.validate()) {
      this.userService.saveUser(this.user)
        .subscribe(data => this.router.navigateByUrl('/main/users'),
          error => alert(error.error.message));
    }
  }

  public back() {
    this.userService.resetSelectedUser();
    this.location.back();
  }

  get genders(): Option[] {
    return this.listService.getGenders();
  }

  get citizenships(): Option[] {
    return this.listService.getCitizenships();
  }

  get disabilities(): Option[] {
    return this.listService.getDisabilities();
  }

  get maritalStatuses(): Option[] {
    return this.listService.getMaritalStatuses();
  }

  get cities(): Option[] {
    return this.listService.getCities();
  }

  updateGender(id) {
    console.log(id);
    this.user.gender = this.listService.getGenderById(Number(id));
  }

  updateCitizenship(id) {
    this.user.citizenship = this.listService.getCitizenshipById(Number(id));
  }

  updateDisability(id) {
    this.user.disability = this.listService.getDisabilityById(Number(id));
  }

  updateCity(id) {
    this.user.city = this.listService.getCityById(Number(id));
  }

  updateMaritalStatus(id) {
    this.user.maritalStatus = this.listService.getMaritalStatusById(Number(id));
  }

  updatePensioner(value) {
    this.user.pensioner = value;
  }

  updateDutyBound(value) {
    this.user.dutyBound = value;
  }
}

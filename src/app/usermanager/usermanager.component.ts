import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.scss']
})
export class UsermanagerComponent {
  constructor(public formBuilder : FormBuilder){}
  @Output() sendData = new EventEmitter();
  @Input() ReceivedData :any;

  myForm  = this.formBuilder.group({
    userId : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    username : ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    email : ['', [Validators.required, Validators.email]],
    addresses : this.formBuilder.array([this.createAddress()])
  });

  get addressList(){
    return this.myForm.controls.addresses as FormArray;
  }

  createAddress(){
    return this.formBuilder.group({
      street: ['', Validators.required],
      city:['', Validators.required],
      state: ['', Validators.required],
      zip: ['',[ Validators.required, Validators.min(111111), Validators.max(999999)]]
    })
  }

  @Output() addEvent = new EventEmitter<string>();
  addAddress(){
    this.addressList.push(this.createAddress());
    this.addEvent.emit('Address Field Added!!')
  }

  @Output() removeEvent = new EventEmitter<string>();
  removeAddress(i : any){
    this.addressList.removeAt(i);
    this.removeEvent.emit('Address Field Removed!!');
  }

  submitForm(){
    // console.log(this.myForm.controls.addresses.controls);
    this.sendData.emit(this.myForm.value);
    this.addressList.clear();
    this.myForm.reset();
    this.addAddress();
  }

  @Output() deleteUserEvent = new EventEmitter();
  deleteUser(userId: number){
    // console.log(userId);
    this.deleteUserEvent.emit(userId);
  }

  @Output() updateUserEvent = new EventEmitter<number>();
  updateUser(userId: number){
    // console.log(userId);
    this.updateUserEvent.emit(userId);
    // this.fillUpdateFields();
  }

  @Input() updateUserData : any;
  ngOnChanges(){
    if(this.updateUserData){
      this.fillUpdateFileds();
    }
  }

  isOnUpdate : boolean= false;
  updateUserId : number = -1;

  fillUpdateFileds(){
    this.isOnUpdate = true;
    // console.log(this.updateUserData);
    this.updateUserId = this.updateUserData.userId;
    this.addressList.clear();
    // this.addAddress()
    for(let add of this.updateUserData.addresses){
      this.addAddress()
    }
    this.myForm.patchValue({
      userId : this.updateUserData.userId,
      username : this.updateUserData.username,
      email : this.updateUserData.email,
      addresses : this.updateUserData.addresses
    })
    this.myForm.controls.userId.disable();

    // this.updateUserData.addresses.forEach((add: any, index:number) => {
    //   if(index>0){
    //     this.addressList.push(this.createAddress());
    //   }
    //   this.myForm.controls.addresses.controls[index].controls.street.patchValue(add.street)
    //   this.myForm.controls.addresses.controls[index].controls.city.patchValue(add.city)
    //   this.myForm.controls.addresses.controls[index].controls.state.patchValue(add.state)
    //   this.myForm.controls.addresses.controls[index].controls.zip.patchValue(add.zip)
    // });
  }

  resetForm(){
    this.myForm.reset();
    this.myForm.controls.userId.enable();
    this.addressList.clear();
    this.addAddress()
    this.isOnUpdate = false;
  }

  @Output() setUpdatedUser = new EventEmitter();
  update(){
    this.setUpdatedUser.emit({...this.myForm.value, userId : this.updateUserId});
    this.resetForm();
  }

  
}

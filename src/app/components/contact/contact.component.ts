import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
     selector: 'app-contact',
     templateUrl: './contact.component.html',
     styleUrl: './contact.component.scss'
})
export class ContactComponent {
     contactForm: FormGroup;
     email = 'arpitkast611@gmail.com';
     phoneNumber: string = '+919782640733'; // Replace with the desired phone number
     message: string = 'Hello True Travel Team, I’m interested in exploring travel options. Could you share the best packages and destinations?';

     constructor(private fb: FormBuilder,
          private snackBar: MatSnackBar
     ) {
          this.contactForm = this.fb.group({
               name: ['', [Validators.required]],
               phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
               email: ['', [Validators.required, Validators.email]],
               whereTo: ['', [Validators.required]],
               message: [''],
               date: [''],
               numberOfPersons: ['', [Validators.min(1)]]
          });
          console.log('contact')
     }


     ngAfterViewInit(): void {
     }

     openWhatsApp() {
          if (!this.phoneNumber || !this.message) {
               console.error('Phone number or message is missing.');
               // alert('Please provide a valid phone number and message.');
               this.showErrorMessage('Please provide a valid phone number and message.');

               return;
           }
           try {
               const encodedMessage = encodeURIComponent(this.message);
               const whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
               console.log('Generated WhatsApp Link:', whatsappLink);
               window.open(whatsappLink, '_blank');
           } catch (error) {
               console.error('Error opening WhatsApp link:', error);
               // alert('Failed to open WhatsApp. Please try again.');
               this.showErrorMessage('Error opening WhatsApp link');
           }
          // const encodedMessage = encodeURIComponent(this.message);
          // const whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
          // window.open(whatsappLink, '_blank')
     }


     sendEmail() {
          if (this.contactForm.valid) {
               console.log("works")
               const formValues = this.contactForm.value;

               const templateParams = {
                    name: formValues.name,
                    phone: formValues.phone,
                    email: formValues.email,
                    whereTo: formValues.whereTo,
                    message: formValues.message,
                    date: formValues.date || 'Not Provided',
                    numberOfPersons: formValues.numberOfPersons || 'Not Provided',
                    to_email: 'arpitkast611@gmail.com'
               };
               //

               emailjs
                    .send('service_6aeza46', 'template_vnthoit', templateParams, 'guE5qHuWOLJorqliF')
                    .then(
                         (response: EmailJSResponseStatus) => {
                              console.log('Email sent successfully!', response.status, response.text);
                              this.showSuccessMessage();
                              this.contactForm.reset(); // Reset the form after submission
                         },
                         (err) => {
                              console.error('Failed to send email.', err);
                              this.showErrorMessage('Something went wrong!');
                         }
                    );
          } else {
               alert('Please fill out the form correctly.');
          }
     }

     // Function to show success message
     showSuccessMessage() {
          this.snackBar.open('Enquiry sent successfully!', 'Close', {
               duration: 3000,
               panelClass: ['success-snackbar'], // Success styling
               horizontalPosition: 'center',
               verticalPosition: 'top',
          });
     }

     // Function to show error message
     showErrorMessage(message:any) {
          this.snackBar.open(message, 'Close', {
               duration: 3000,
               panelClass: ['error-snackbar'], // Error styling
               horizontalPosition: 'center',
               verticalPosition: 'top',
          });
     }
}

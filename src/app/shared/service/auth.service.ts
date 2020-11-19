import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
    public fbDB: AngularFireDatabase
  ) {
      /* Saving user data in localstorage when
    logged in and setting up null when logged out */
  this.afAuth.authState.subscribe(user => {
  if (user) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user'));
  } else {
    localStorage.setItem('user', null);
    JSON.parse(localStorage.getItem('user'));
  }
  });
   }



    // Sign in with email/password
  SignIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

   // Sign up with email/password
   SignUp(email, password): any {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['sigin']);
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }


  SetUserData(user): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut(): any {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  GetUsers(): any {
    return this.fbDB.list('users')
    .snapshotChanges()
    .subscribe((res) => {
      console.log('users---', res);
    })
  }



}

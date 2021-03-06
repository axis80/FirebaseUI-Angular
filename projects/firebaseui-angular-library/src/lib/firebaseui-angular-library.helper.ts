/*
 * Created by Raphael Jenni
 * Copyright (c) 2017 Raphael Jenni
 */

import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

export class FirebaseUIAuthConfig {
  providers: Array<AuthProvider | AuthProviderWithCustomConfig>;
  method?: AuthMethods;
  signInSuccessUrl?: string;
  tos?: string;
  privacyPolicyUrl?: string;
  credentialHelper?: CredentialHelper;
  autoUpgradeAnonymousUsers?: boolean;

  /**
   * Will be default in the future
   */
  disableSignInSuccessCallback?: boolean;
}

export class FirebaseUISignInSuccessWithAuthResult {
  authResult: UserCredential;
  redirectUrl: string;
}

export class FirebaseUISignInFailure {
  code: string;
  credential: firebase.auth.AuthCredential;
}

/**
 * @deprecated Use {@link FirebaseUISignInSuccessWithAuthResult}
 */
export class FirebaseUISignInSuccess {
  currentUser: firebase.User;
  credential: firebase.auth.AuthCredential;
  redirectUrl: string;
}


export enum CredentialHelper {
  AccountChooser, OneTap, None
}

export enum AuthProvider {
  Google, Facebook, Twitter, Github, Password, Phone
}

export interface AuthProviderWithCustomConfig {
  provider: AuthProvider;
  customConfig: Object;
}

export enum AuthMethods {
  Popup, Redirect
}

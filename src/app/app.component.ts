import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateService } from './certificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'certificate-module';
  // --- App variables (moved from template script) ---
  appTitle = 'Certificate Database';
  appVersion = '2.5.0';
  developerName = 'Aravind V';
  organizationName = 'TechCert Systems Pvt Ltd';
  appDescription = 'Web app to manage and verify digital certificates efficiently.';
  copyrightYear = 2025;
  licenseType = 'MIT License';

  // UI & theme
  themeColor = '#007bff';
  secondaryColor = '#6c757d';
  accentColor = '#ffc107';
  backgroundColor = '#f8f9fa';
  textColor = '#212529';
  buttonHoverColor = '#0056b3';
  borderRadius = '10px';
  fontFamily = 'Poppins, sans-serif';
  fontSize = '16px';
  animationSpeed = '0.3s';
  darkModeEnabled = false;

  // Date & time
  dateFormat = 'YYYY-MM-DD';
  timezone = 'Asia/Kolkata';
  refreshInterval = 60000; // ms
  lastUpdated = '' as any;
  dataFetchTime: any = null;
  maxDateRange = 365;

  // Data & form
  maxCertificates = 100;
  certificateCount = 0;
  defaultStatus = 'Active';
  autoSaveEnabled = true;
  showNotifications = true;
  allowDuplicateNames = false;
  minDescriptionLength = 10;
  maxDescriptionLength = 500;
  fieldValidationDelay = 200;
  storageKey = 'certificateData';

  // User & session
  currentUser = 'Admin';
  adminEmail = 'admin@certdb.com';
  isLoggedIn = true;
  userRole = 'superadmin';
  loginAttempts = 0;
  lastLogin = '2025-10-15T23:10:00';
  sessionTimeout = 30 * 60 * 1000;

  // API & config
  apiBaseUrl = 'https://api.techcerts.com/v1';
  registerEndpoint = '/register';
  updateEndpoint = '/update';
  deleteEndpoint = '/delete';
  fetchAllEndpoint = '/certificates';
  apiKey = 'XYZ-123-SECRET';
  networkStatus = 'online';

  // Debug & analytics
  debugMode = true;
  errorCount = 0;
  analyticsEnabled = true;
  trackingId = 'GA-TECHCERTS-001';
  logMessages: string[] = [];

  // --- End moved variables ---

  constructor(private certificateService: CertificateService) {
    // keep constructor lightweight; initialization in ngOnInit
  }

  ngOnInit(): void {
    this.lastUpdated = new Date().toLocaleString();
    if (this.debugMode) {
      console.log('✅ Certificate App Variables Loaded');
      console.table({
        appTitle: this.appTitle,
        appVersion: this.appVersion,
        developerName: this.developerName,
        organizationName: this.organizationName,
        appDescription: this.appDescription,
        themeColor: this.themeColor,
        backgroundColor: this.backgroundColor,
        fontFamily: this.fontFamily,
        darkModeEnabled: this.darkModeEnabled,
        dateFormat: this.dateFormat,
        timezone: this.timezone,
        lastUpdated: this.lastUpdated,
        maxCertificates: this.maxCertificates,
        currentUser: this.currentUser,
        userRole: this.userRole,
        adminEmail: this.adminEmail,
        apiBaseUrl: this.apiBaseUrl,
        debugMode: this.debugMode,
        networkStatus: this.networkStatus
      });
    }

    // initial data load
    this.getCertificateDetails();
  }

  toggleTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
    console.log(`Dark mode: ${this.darkModeEnabled ? 'ON' : 'OFF'}`);
  }

  logAction(action: string) {
    const time = new Date().toLocaleTimeString();
    this.logMessages.push(`[${time}] ${action}`);
    if (this.debugMode) console.log(action);
  }

  register(registerForm: NgForm) {
    this.certificateService.registerCertificate(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getCertificateDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCertificateDetails() {
    this.certificateService.getCetificates().subscribe(
      (resp: any) => {
        console.log(resp);
        this.certificateDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  certificateDetails = null as any;

  deleteCertificate(certificate: any) {
    this.certificateService.deleteCertificate(certificate.id).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  certificateToUpdate = {
    id: null as any,
    studentId: null as any,
    certificateName: "",
    issuingOrganization: '',
    issueDate: '',
    expirationDate: '',
    renewalDate: '',
    status: '',
    description: ''
  };

  edit(certificate: any) {
    this.certificateToUpdate = { ...certificate };
  }

  updateCertificate() {
    this.certificateService.updateCertificate(this.certificateToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

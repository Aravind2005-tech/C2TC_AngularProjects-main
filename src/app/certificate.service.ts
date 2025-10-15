import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  API="http://localhost:8080";
  public registerCertificate(certificateData: any)
  {
    return this.http.post(`${this.API}/certificateservice` , certificateData);
  }

  public getCetificates(){
    return this.http.get(`${this.API}/certificateservice`);
  }

  public deleteCertificate(certificateId:any){
    return this.http.delete(`${this.API}/certificateservice/${certificateId}`);
  }

  public updateCertificate(certificate: any){
    return this.http.put(`${this.API}/certificateservice/${certificate.id}`, certificate);
  }
  constructor(private http: HttpClient) { }
}

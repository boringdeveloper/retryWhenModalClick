import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalConfig } from '@shared/interface';
import { catchError, mergeMap, Observable, retryWhen, Subject, tap, throwError } from 'rxjs';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private modalSvc: ModalService
  ) {}

  getHelloWorld(): Observable<any> {
    return this.http.get('/api/hello-world').pipe(
      tap((res: any) => {
        console.log(res);
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return throwError(() => err);
      }),
      this.handleRetry()
    )
  }

  handleRetry() {
    return (source: Observable<any>) => source.pipe(
      retryWhen((err) => {
        return err.pipe(
          mergeMap(() => {
            const retrySubject = new Subject();
            const modalConfig: ModalConfig = {
              message: 'It seems that there was an error encountered why processing your request.',
              btnLabel: 'Retry',
              callback: () => { 
                retrySubject.next(true);
              }
            }
            this.modalSvc.open(modalConfig);
            return retrySubject;
          })
        )
      })
    )
  }
}

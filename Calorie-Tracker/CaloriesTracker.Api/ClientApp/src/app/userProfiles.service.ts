/**
 * Calorie Tracker API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * Contact: vladimir.lyashko02@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from './encoder';

import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from './variables';
import { Configuration }                                     from './configuration';


@Injectable()
export class UserProfilesService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        this.basePath = this.configuration.basePath;
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param countDays
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserprofilesCountDaysGet(countDays: number, userId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserprofilesCountDaysGet(countDays: number, userId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserprofilesCountDaysGet(countDays: number, userId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserprofilesCountDaysGet(countDays: number, userId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (countDays === null || countDays === undefined) {
            throw new Error('Required parameter countDays was null or undefined when calling apiUserprofilesCountDaysGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', userId as any);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get', `${this.basePath}/api/userprofiles/${encodeURIComponent(String(countDays))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        );
    }

    /**
     *
     *
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserprofilesGet(userId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserprofilesGet(userId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserprofilesGet(userId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserprofilesGet(userId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', userId as any);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get', `${this.basePath}/api/userprofiles`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers,
                observe,
                reportProgress
            }
        );
    }

}

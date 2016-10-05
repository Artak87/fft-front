import { Request, Response }                   from 'angular2/http';
import { RESTClient, BaseUrl, DefaultHeaders } from 'angular2-rest';
// import {GET, PUT, POST, DELETE, Path, Body, Query} from 'angular2-rest';

@BaseUrl("/rest/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export abstract class AppRESTClient extends RESTClient {

    protected requestInterceptor(req: Request) {
        const token:string = localStorage.getItem('id_token');
        if (token) {
            req.headers.append('jwt', token);
        }
    }

    protected requestInterceptor(res: Response): Response {
        return res
    }

}

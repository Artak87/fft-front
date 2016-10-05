import { IGroup }        from 'Models';
import { AppRESTClient } from '../app-helper/app-rest.service';
import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';

import {GET, PUT, POST, DELETE, Path, Body, Query} from 'angular2-rest';

@Injectable()
export class GroupRESTClient extends AppRESTClient {

	@GET("group/")
	public getGroups():Observable { return null; }

	@POST("group/")
	public createGroup(@Body group: IGroup):Observable { return null; }

	@PUT("group/{id}")
	public updateGroup(@Path("id") id:string, @Body group: IGroup):Observable { return null; }

	@DELETE("group/{id}")
	public deleteGroup(@Path("id") id:string):Observable { return null; }
}

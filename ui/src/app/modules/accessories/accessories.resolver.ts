import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../core/api.service';

@Injectable()
export class AccessoriesResolver implements Resolve<any> {
  constructor(
    private $api: ApiService,
    private $toastr: ToastrService,
    private $router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.$api.get('/accessories').toPromise()
      .catch((err) => {
        this.$toastr.error(err.message, 'Failed to Load Accessories');
        this.$router.navigate(['/']);
      });
  }
}

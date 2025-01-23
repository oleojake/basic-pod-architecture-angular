import { Component } from '@angular/core';
import { AppLayoutComponent } from "@layout/app-layout/app-layout.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { User } from '@model/index';

@Component({
	selector: 'app-login-scene',
	standalone: true,
	imports: [AppLayoutComponent, LoginFormComponent],
	templateUrl: './login-scene.component.html',
	styleUrl: './login-scene.component.scss'
})
export class LoginSceneComponent {

	constructor(private authService: AuthService, private router: Router) { }

	public onLogin(user: User): void {
		if (this.authService.login(user)) {
			this.router.navigate(['/dashboard']);
		} else {
			alert('Invalid user or password');
		}
	}

}

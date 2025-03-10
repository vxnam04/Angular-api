import { Component, OnInit } from '@angular/core';
import { UserService } from '../../header/services/user.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, NgFor],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  token: string | null = null;
  users: any[] = [];

  constructor(private userService: UserService) {}

  // Khi component khởi tạo, kiểm tra token trong localStorage
  ngOnInit() {
    this.token = localStorage.getItem('token') as string;
    // Nếu null thì gán thành ''
  }

  // Đăng ký
  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.userService.register(userData).subscribe((res) => {
      alert('Đăng ký thành công!');
    });
  }

  // Đăng nhập

  // Lấy danh sách users
  getUsers() {
    const token = this.token;
    if (token) {
      // Chỉ gọi API khi token có giá trị
      this.userService.getUsers(token).subscribe((res) => {
        this.users = res;
      });
    } else {
      alert('Bạn cần đăng nhập!');
    }
  }

  // Đăng xuất
  logout() {
    if (this.token) {
      this.userService.logout(this.token).subscribe(() => {
        localStorage.removeItem('token');
        this.token = null;
        alert('Đăng xuất thành công!');
      });
    }
  }
}

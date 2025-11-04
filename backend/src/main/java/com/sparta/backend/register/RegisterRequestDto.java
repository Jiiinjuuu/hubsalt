package com.sparta.backend.register;

import lombok.Getter;

@Getter
public class RegisterRequestDto {
    private String nickname;
    private String profileUrl;
    private String introduction;
    private String email;
    private String password;
    private String phone;
}

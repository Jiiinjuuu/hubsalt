package com.sparta.backend.register;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;
    private String profileUrl;
    private String introduction;
    private String email;
    private String password;
    private String phone;

    public User(String nickname, String profileUrl, String introduction, String email, String password, String phone) {
        this.nickname = nickname;
        this.profileUrl = profileUrl;
        this.introduction = introduction;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}

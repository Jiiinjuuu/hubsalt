package com.sparta.backend.login;

import com.sparta.backend.register.User;
import com.sparta.backend.register.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final UserRepository userRepository;

    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(LoginRequestDto dto) {
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이메일입니다."));

        if (!user.getPassword().equals(dto.getPassword())) {
            return "비밀번호가 일치하지 않습니다.";
        }

        return "로그인 성공!";
    }
}
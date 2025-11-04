package com.sparta.backend.register;

import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final UserRepository userRepository;

    public RegisterService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String registerUser(RegisterRequestDto dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            return "이미 존재하는 이메일입니다.";
        }

        User user = new User(
                dto.getNickname(),
                dto.getProfileUrl(),
                dto.getIntroduction(),
                dto.getEmail(),
                dto.getPassword(),
                dto.getPhone()
        );

        userRepository.save(user);
        return "회원가입 성공!";
    }
}

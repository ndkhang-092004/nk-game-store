package com.nkgamestore.nk_gamestore.services;

import com.nkgamestore.nk_gamestore.entities.User;
import com.nkgamestore.nk_gamestore.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User handleCreateUser(User user){
        return userRepository.save(user);
    }

}

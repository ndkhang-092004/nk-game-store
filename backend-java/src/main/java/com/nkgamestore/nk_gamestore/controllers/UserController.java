package com.nkgamestore.nk_gamestore.controllers;

import com.nkgamestore.nk_gamestore.entities.User;
import com.nkgamestore.nk_gamestore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public User createNewUser(@RequestBody User user){
        return userService.handleCreateUser(user);
    }

}

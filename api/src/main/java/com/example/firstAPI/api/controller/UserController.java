package com.example.firstAPI.api.controller;

import com.example.firstAPI.api.model.User;
import com.example.firstAPI.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@CrossOrigin
@RequestMapping("*")
@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public User getUser(int id) {
        Optional user = userService.getUser(id);
        if(user.isPresent()) {
            return (User) user.get();
        }
        return null;
    }
}

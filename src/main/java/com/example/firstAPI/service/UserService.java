package com.example.firstAPI.service;

import com.example.firstAPI.api.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private List<User> UserList;

    public UserService() {
        UserList = new ArrayList<User>();
        User user1 = new User(1, "Rahul Kanwal", 25);
        User user2 = new User(2, "Kartik Chindarkar", 27);
        User user3 = new User(3, "Karthik Reddy", 27);
        User user4 = new User(4, "John Doe", 24);
        User user5 = new User(5, "Gon Freecss", 12);
        UserList.addAll(Arrays.asList(user1, user2, user3, user4, user5));
    }

    public Optional<User> getUser(int id) {
        Optional optional = Optional.empty();
        for (User user : UserList) {
            if (user.getId() == id) {
                optional = Optional.of(user);
                return optional;
            }
        }
        return optional;
    }
}

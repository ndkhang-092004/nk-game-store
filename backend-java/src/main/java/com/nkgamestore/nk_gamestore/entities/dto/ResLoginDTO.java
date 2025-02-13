package com.nkgamestore.nk_gamestore.entities.dto;

import com.nkgamestore.nk_gamestore.entities.User;

public class ResLoginDTO {
    private String accessToken;
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }


}

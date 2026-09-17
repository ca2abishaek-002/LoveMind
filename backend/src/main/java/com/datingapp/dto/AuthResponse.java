package com.datingapp.dto;

public class AuthResponse {
    private String token;
    private String userId;
    private String username;
    private String displayName;
    private boolean onboardingComplete;

    public AuthResponse() {}

    public AuthResponse(String token, String userId, String username, String displayName, boolean onboardingComplete) {
        this.token = token;
        this.userId = userId;
        this.username = username;
        this.displayName = displayName;
        this.onboardingComplete = onboardingComplete;
    }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }

    public boolean isOnboardingComplete() { return onboardingComplete; }
    public void setOnboardingComplete(boolean onboardingComplete) { this.onboardingComplete = onboardingComplete; }
}

package com.datingapp.dto;

public class UserProfileDto {
    private String id;
    private String username;
    private String displayName;
    private String bio;
    private boolean onboardingComplete;

    public UserProfileDto() {}

    public UserProfileDto(String id, String username, String displayName, String bio, boolean onboardingComplete) {
        this.id = id;
        this.username = username;
        this.displayName = displayName;
        this.bio = bio;
        this.onboardingComplete = onboardingComplete;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public boolean isOnboardingComplete() { return onboardingComplete; }
    public void setOnboardingComplete(boolean onboardingComplete) { this.onboardingComplete = onboardingComplete; }
}

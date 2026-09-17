package com.datingapp.controller;

import com.datingapp.dto.UserProfileDto;
import com.datingapp.model.User;
import com.datingapp.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    private String getCurrentUserId() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        try {
            String userId = getCurrentUserId();
            User user = userService.getUserById(userId);
            UserProfileDto dto = new UserProfileDto(user.getId(), user.getUsername(), user.getDisplayName(), user.getBio(), user.isOnboardingComplete());
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/me")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> updates) {
        try {
            String userId = getCurrentUserId();
            String displayName = updates.get("displayName");
            String bio = updates.get("bio");
            UserProfileDto dto = userService.updateProfile(userId, displayName, bio);
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/matches")
    public ResponseEntity<?> getMatches() {
        try {
            String userId = getCurrentUserId();
            List<UserProfileDto> matches = userService.getMatches(userId);
            return ResponseEntity.ok(matches);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

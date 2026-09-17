package com.datingapp.service;

import com.datingapp.dto.UserProfileDto;
import com.datingapp.model.User;
import com.datingapp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public UserProfileDto updateProfile(String userId, String displayName, String bio) {
        User user = getUserById(userId);
        if (displayName != null) {
            user.setDisplayName(displayName);
        }
        if (bio != null) {
            user.setBio(bio);
        }
        user = userRepository.save(user);
        return new UserProfileDto(user.getId(), user.getUsername(), user.getDisplayName(), user.getBio(), user.isOnboardingComplete());
    }

    public List<UserProfileDto> getMatches(String currentUserId) {
        List<User> completedUsers = userRepository.findByOnboardingCompleteTrue();
        return completedUsers.stream()
                .filter(u -> !u.getId().equals(currentUserId))
                .map(u -> new UserProfileDto(u.getId(), u.getUsername(), u.getDisplayName(), u.getBio(), u.isOnboardingComplete()))
                .collect(Collectors.toList());
    }
}

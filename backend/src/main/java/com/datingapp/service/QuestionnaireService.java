package com.datingapp.service;

import com.datingapp.dto.QuestionnaireSubmitRequest;
import com.datingapp.model.Questionnaire;
import com.datingapp.model.User;
import com.datingapp.repository.QuestionnaireRepository;
import com.datingapp.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionnaireService {

    private final QuestionnaireRepository questionnaireRepository;
    private final UserRepository userRepository;

    private static final List<String> QUESTIONS = Arrays.asList(
            "Your Uber driver takes a completely wrong turn. What do you do?",
            "You're at a party where you don't know anyone. How do you handle it?",
            "Your friend cancels plans at the last minute for the third time. How do you respond?",
            "You find a wallet with $500 cash on the street. What's your move?",
            "You're assigned a group project and one member isn't contributing. What do you do?"
    );

    public QuestionnaireService(QuestionnaireRepository questionnaireRepository, UserRepository userRepository) {
        this.questionnaireRepository = questionnaireRepository;
        this.userRepository = userRepository;
    }

    public List<String> getQuestions() {
        return QUESTIONS;
    }

    public void submitAnswers(String userId, QuestionnaireSubmitRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Questionnaire questionnaire = questionnaireRepository.findByUserId(userId).orElse(new Questionnaire());
        questionnaire.setUserId(userId);
        questionnaire.setAnswers(request.getAnswers());
        questionnaire.setCompletedAt(LocalDateTime.now());
        questionnaireRepository.save(questionnaire);

        user.setOnboardingComplete(true);
        userRepository.save(user);
    }

    public Optional<Questionnaire> getByUserId(String userId) {
        return questionnaireRepository.findByUserId(userId);
    }

    public boolean isComplete(String userId) {
        return userRepository.findById(userId)
                .map(User::isOnboardingComplete)
                .orElse(false);
    }
}

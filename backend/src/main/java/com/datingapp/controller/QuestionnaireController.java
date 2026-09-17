package com.datingapp.controller;

import com.datingapp.dto.QuestionnaireSubmitRequest;
import com.datingapp.service.QuestionnaireService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/questionnaire")
public class QuestionnaireController {

    private final QuestionnaireService questionnaireService;

    public QuestionnaireController(QuestionnaireService questionnaireService) {
        this.questionnaireService = questionnaireService;
    }

    private String getCurrentUserId() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/questions")
    public ResponseEntity<List<String>> getQuestions() {
        return ResponseEntity.ok(questionnaireService.getQuestions());
    }

    @PostMapping("/submit")
    public ResponseEntity<?> submitAnswers(@RequestBody QuestionnaireSubmitRequest request) {
        try {
            String userId = getCurrentUserId();
            questionnaireService.submitAnswers(userId, request);
            return ResponseEntity.ok(Collections.singletonMap("message", "Questionnaire submitted successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/status")
    public ResponseEntity<?> getStatus() {
        try {
            String userId = getCurrentUserId();
            boolean isComplete = questionnaireService.isComplete(userId);
            return ResponseEntity.ok(Collections.singletonMap("isComplete", isComplete));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
